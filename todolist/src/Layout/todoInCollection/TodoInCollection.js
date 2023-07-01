import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Menu from '../../components/menu/Menu'
import Path from '../../components/path/Path'
import AddButton from '../../components/addButton/AddButton'
import Todolist from '../../components/todolist/Todolist'
import "./todoInCollection.css"

export default function TodoInCollection() {
    const collection = useParams().collection
    const todolist = useSelector(state => state.todolist.value)
    const [ todoComplete, setComplete ] = useState([])
    const [todoIncomplete, setIncomplete] = useState([])
   
    // Separate all todo in two differents categories complete and incomplete
    useEffect(() => {
       if(todolist){
        let findTodoComplete = todolist.filter(todo => (todo.lists === collection && todo.complete))
        let findTodoIncomplete = todolist.filter(todo => (todo.lists === collection && !todo.complete))
        setComplete(findTodoComplete)
        setIncomplete(findTodoIncomplete)
      }
    },[collection, todolist])
  return (
    <div id="TodoInCollection">
        <Menu selected={ collection }/>
        <div className='container-todo'>
            <Path collection={ collection }/>
            <AddButton/>
            { todoIncomplete.length > 0 && <p className='list'>Tasks - { todoIncomplete.length }</p> }
            <Todolist isComplete={false} todolists={ todoIncomplete }/>
            { todoComplete.length > 0 && <p className='list'>Completed - { todoComplete.length }</p> }
            <Todolist isComplete={ true } todolists={ todoComplete }/>
        </div>
    </div>
  )
}