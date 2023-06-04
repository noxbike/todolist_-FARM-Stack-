import React, { useEffect, useState } from 'react'
import "./todoInCollection.css"
import { useParams } from 'react-router-dom'
import Menu from '../../components/menu/Menu'
import Path from '../../components/path/Path'
import AddButton from '../../components/addButton/AddButton'
import { todo, lists } from '../../components/data/datatest'
import Todolist from '../../components/todolist/Todolist'


export default function TodoInCollection() {
    const [ complete, setComplete ] = useState([])
    const [incomplete, setIncomplete] = useState([])
    const collection = useParams().collection
    const item = lists.find(data => data.name === collection)
    
    
    useEffect(() => {
      let complete = []
      let incomplete = []
      for(const item in todo){
        if(todo[item].lists === collection){
          todo[item].complete && complete.push(todo[item]) 
          !todo[item].complete && incomplete.push(todo[item])
        }
       setComplete(complete)
       setIncomplete(incomplete)
      }
    },[collection])
  return (
    <div id="TodoInCollection">
        <Menu selected={collection}/>
        <div className='container-todo'>
            <Path collection={collection}/>
            <AddButton/>
            {incomplete.length > 0 && <p className='list'>Tasks - {incomplete.length}</p>}
            <Todolist done={false} color={item['color']} data={incomplete}/>
            {complete.length > 0 && <p className='list'>Completed - {complete.length}</p>}
            <Todolist  done={true} color={item['color']} data={complete}/>
        </div>
    </div>
  )
}
