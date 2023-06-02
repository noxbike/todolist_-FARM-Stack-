import React from 'react'
import "./todoInCollection.css"
import { useParams } from 'react-router-dom'
import Menu from '../menu/Menu'

export default function TodoInCollection() {
    var collection = useParams().collection
  return (
    <div id="TodoInCollection">
        <Menu/>
        {collection}
    </div>
  )
}
