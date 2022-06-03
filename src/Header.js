import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import Forumicon from '@material-ui/icons/Forum'


function Header() {
  return (
    <div className = 'header'>
        
        <IconButton>
            <PersonIcon fontSize = 'large' className='header_icon'/>
        </IconButton>

        <h1>REMINDER WEB APP ✔️</h1>
        <IconButton>\
        </IconButton>
        
        
    </div>
  )
}

export default Header