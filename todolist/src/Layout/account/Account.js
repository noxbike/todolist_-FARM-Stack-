import React from 'react'
import './account.css'
import Menu from '../../components/menu/Menu'
import Path from '../../components/path/Path'
const picture = "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg";

export default function Account() {
  return (
    <div id="account">
        <Menu/>
        <Path collection='Account'/>
        <div className='profilePicture'>
            <img src={picture} alt="profile" />
            <h2>Mickael Morel</h2>
        </div>
        <div className='content'>
            <div className='row'>
                <div>
                    <p>Name</p>
                    <p>Mickael Morel</p>
                </div>
                <div>
                    <button>Edit</button>
                </div>
            </div>
            <div className='row'>
                <div>
                    <p>Email</p>
                    <p>noxbike@gmail.com</p>
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