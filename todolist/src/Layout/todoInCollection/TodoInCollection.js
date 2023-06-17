import React, { useEffect, useState } from 'react'
import "./todoInCollection.css"
import { useParams } from 'react-router-dom'
import Menu from '../../components/menu/Menu'
import Path from '../../components/path/Path'
import AddButton from '../../components/addButton/AddButton'
import Todolist from '../../components/todolist/Todolist'
import { useSelector } from 'react-redux'

export default function TodoInCollection() {
    const [ complete, setComplete ] = useState([])
    const [incomplete, setIncomplete] = useState([])
    const collection = useParams().collection
    const todolist = useSelector(state => state.todolist.value)
   
    useEffect(() => {
      if(todolist){
        let complete = []
        let incomplete = []
        for(const item in todolist){
          if(todolist[item].lists === collection){
            todolist[item].complete && complete.push(todolist[item]) 
            !todolist[item].complete && incomplete.push(todolist[item])
          }
        }
        setComplete(complete)
        setIncomplete(incomplete)
      }
    },[collection, todolist])
  return (
    <div id="TodoInCollection">
        <Menu selected={collection}/>
        <div className='container-todo'>
            <Path collection={collection}/>
            <AddButton/>
            {incomplete.length > 0 && <p className='list'>Tasks - {incomplete.length}</p>}
            <Todolist done={false} data={incomplete}/>
            {complete.length > 0 && <p className='list'>Completed - {complete.length}</p>}
            <Todolist done={true} data={complete}/>
        </div>
    </div>
  )
}
