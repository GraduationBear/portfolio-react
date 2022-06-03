import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='header'>
        <a className='title'>Portfolio</a>
        <ul className='nav--links'>
            <li><span><a className='nav--link'>Formation</a></span></li>
            <li><span><a className='nav--link'>Expériences</a></span></li>
            <li><span><a className='nav--link'>Me contacter</a></span></li>
        </ul>
    </nav>
  )
}
