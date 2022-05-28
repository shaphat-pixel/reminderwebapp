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

        <img
        
        className = "header_logo"
        src = "https://th.bing.com/th/id/R.19a8b5ce84b2051d205841d824128dd5?rik=HHcHmN611Tlxuw&riu=http%3a%2f%2fakns-images.eonline.com%2feol_images%2fEntire_Site%2f2014817%2frs_1024x759-140917143531-1024.Tinder-Logo.ms.091714.jpg&ehk=m%2fjNVGWWRGVQ6LxreiEiJg2qPgllG2fwB3kb6mm7di4%3d&risl=&pid=ImgRaw&r=0"
        alt = ""
        />
        <IconButton>
        <Forumicon fontSize="large" className="header_icon"/>
        </IconButton>
        
        
    </div>
  )
}

export default Header