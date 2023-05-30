from settings import db
from bson import ObjectId
from typing import List
from fastapi.encoders import jsonable_encoder 
from fastapi.responses import JSONResponse
from models.todolist_model import (
    todo_model,
    todoUpdate_model
)

from fastapi import (
    FastAPI,
    status,
    HTTPException
)

app = FastAPI()

#welcome message
@app.get("/")
def read_root():
    return {"message": "Bienvenue sur FastAPI ce backend est conçu afin de stocker les donnée provenant de ReactJs dans MongoDB."}

#find all
@app.get("/todolist", response_description="list all todo", response_model=List[todo_model])
async def get_todolist():
    todo = await db["todolist"].find().to_list(1000)
    return todo

#find incomplete or complete todo
@app.get("/todolist/{item_incomplete}", response_description="list incomplete or complete todo", response_model=List[todo_model])
async def get_incompletetodo(item_incomplete: bool):
    todo = await db["todolist"].find({"complete": item_incomplete}).to_list(1000)
    return todo

#find by lists
@app.get("/todolist/lists/{item_lists}", response_description="list by lists todo", response_model=List[todo_model])
async def get_listed_todo(item_lists: str):
    todo = await db["todolist"].find({"lists": item_lists}).to_list(1000)
    return todo
    
#adding new todo
@app.post("/addtodo/", response_description="addtodo", response_model=todo_model)
async def add_todo(todo: todo_model):
    todo = jsonable_encoder(todo)
    new_todo = await db["todolist"].insert_one(todo)

    created_todo = await db["todolist"].find_one({"_id": new_todo.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_todo)

#modification of todo
@app.put("/modif_todo/{todo_id}", response_description="modifier the todo", response_model=todoUpdate_model)
async def update_todo(todo_id: str, todo: todoUpdate_model):
    new_todo = {key: value for key, value in todo.dict().items() if value is not None}
    result = await db["todolist"].update_one({"_id": ObjectId(todo_id)}, {"$set": new_todo})

    if result.modified_count == 1:
        return {"message": "Item updated successfully"}
    
    return {"message": "Item not found or no fields to update"}

#delete todo
@app.delete("/delete/{todo_id}", response_description="delete todo")
async def delete_todo(todo_id: str):
    delete_result = await db["todolist"].delete_one({"_id": ObjectId(todo_id)})
    
    if delete_result.deleted_count == 1:
         return {"object": "deleted successfully"}
    
    raise HTTPException(status_code=404, detail=f"todo {todo_id} not found")

