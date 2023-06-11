import React from 'react'
import { useSelector } from 'react-redux'

export default function Welcome() {
    const user = useSelector(state => state.user.value)
    const message = (hours) => {
        if(hours <= 12) 
            return 'Good morning';
        else if(hours <= 16) 
            return 'Good afternoon';
        else
            return 'Good evening';


    }
    const hours = new Date().getHours();
  return (
    <div>
        <h1>{message(hours)},<br/>{user.name}</h1>
    </div>
  )
}
