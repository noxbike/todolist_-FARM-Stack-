import React from 'react'
import { useSelector } from 'react-redux'

export default function Welcome() {
    const user = useSelector(state => state.user.value)
    const hours = new Date().getHours();
    const message = (hours) => {
        if(hours <= 12) 
            return 'Good morning';
        else if(hours <= 16) 
            return 'Good afternoon';
        else
            return 'Good evening';
    }

    return (
        <div>
            <h1>{ message(hours) },<br/>{ user.name }</h1>
        </div>
    )
}