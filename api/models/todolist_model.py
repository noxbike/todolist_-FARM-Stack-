from bson import ObjectId
from pydantic import BaseModel, Field
from typing import Optional

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

class todo_model(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    task: str
    description: str
    lists: str
    tag: str
    complete: bool
    when: list
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "task": "apprendre l'anglais",
                "description": "level up in english",
                "lists": "learning",
                "tag": "english",
                "complete": False,
                "when": [1, 1, 2025]
            }
        }

class todoUpdate_model(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    task: Optional[str] = None
    description: Optional[str] = None
    lists: Optional[str] = None
    tag: Optional[str]  = None
    complete: Optional[bool] = None
    when: Optional[list] = None
    class Config:
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}
        shema_extra = {
            "example": {
                "task": "apprendre l'anglais",
                "description": "level up in english",
                "lists": "learning",
                "tag": "english",
                "complete": False,
                "when": [1, 1, 2025]
            }
        }