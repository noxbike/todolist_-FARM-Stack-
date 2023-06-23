import React from 'react'
import './account.css'
import Menu from '../../components/menu/Menu'
import Path from '../../components/path/Path'
import { useSelector } from 'react-redux'

export default function Account() {
    const user = useSelector(state => state.user.value);
    return (
        <div id="account">
            <Menu/>
            <Path collection='Account'/>
            <div className='profilePicture'>
                <img src={user.profile} alt="profile" />
                <h2>{user.name}</h2>
            </div>
            <div className='content'>
                <div className='row'>
                    <div>
                        <p>Name</p>
                        <p>{user.name}</p>
                    </div>
                    <div>
                        <button>Edit</button>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <p>Email</p>
                        <p>{user.email}</p>
                    </div>
                    <div>
                        <button>Edit</button>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <p>Password</p>
                        <p>***********</p>
                    </div>
                    <div>
                        <button>Change</button>
                    </div>
                </div>
            </div>
            <div className='Sign-out'>
                    <div>
                        <button>Sign Out</button>
                    </div>
            </div>
        </div>
    )
}
