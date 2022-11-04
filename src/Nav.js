import React, { useState, useEffect } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const [show, handleShow] = useState(false)
    const history = useNavigate()

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar)
        return () => window.removeEventListener('scroll', transitionNavbar)
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
                <img src='https://s01.pic4net.com/di-XOJ1XU.png' alt='Logo' className='nav__logo' onClick={() => history('/')} />
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Avatar' className='nav__avatar' onClick={() => history('/profile')} />
            </div>
        </div>
    )
}

export default Nav