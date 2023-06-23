import React, { useEffect, useState } from 'react'
import "./todoInCollection.css"
import { useParams } from 'react-router-dom'
import Menu from '../../components/menu/Menu'
import Path from '../../components/path/Path'
import AddButton from '../../components/addButton/AddButton'
import Todolist from '../../components/todolist/Todolist'
import { useSelector } from 'react-redux'

export default function TodoInCollection() {
    const [ todoComplete, setComplete ] = useState([])
    const [todoIncomplete, setIncomplete] = useState([])
    const collection = useParams().collection
    const todolist = useSelector(state => state.todolist.value)
   
    // Separate all todo in two differents categories complete and incomplete
    useEffect(() => {
      if(todolist){
        let todoComplete = []
        let todoIncomplete = []
        for(const item in todolist){
          if(todolist[item].lists === collection){
            todolist[item].complete && todoComplete.push(todolist[item]) 
            !todolist[item].complete && todoIncomplete.push(todolist[item])
          }
        }
        setComplete(todoComplete)
        setIncomplete(todoIncomplete)
      }
    },[collection, todolist])
  return (
    <div id="TodoInCollection">
        <Menu selected={ collection }/>
        <div className='container-todo'>
            <Path collection={ collection }/>
            <AddButton/>
            { todoIncomplete.length > 0 && <p className='list'>Tasks - { todoIncomplete.length }</p> }
            <Todolist done={false} todolists={ todoIncomplete }/>
            { todoComplete.length > 0 && <p className='list'>Completed - { todoComplete.length }</p> }
            <Todolist done={ true } todolists={ todoComplete }/>
        </div>
    </div>
  )
}
