import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import "./Header.css"
const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large'  className='header__icon'/>
            </IconButton>
            <img className="header__logo" src='https://toppng.com/uploads/preview/tinder-logo-transparent-tinder-logo-11563243301zivc1sx84c.png' alt='tinder'/>
            <IconButton>
                <ForumIcon fontSize='large' className='header__icon' />
            </IconButton>
        </div>
    )
}

export default Header
