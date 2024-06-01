import React from 'react'
import './Header.css'
import logo from '../../resources/whitesmalllogo.png'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='header-container'>
        <Link to='/'><img src={logo} className='h-10' /></Link>
        <div className='navigate-container'>
            <div className='header-text'><Link to='/work'>Work</Link></div>
            <div className='header-text'><Link to='/about'>About</Link></div>
            <div className='header-text'><Link to='/events'>Events</Link></div>
            <div className='header-text'><Link to='/press'>Press</Link></div>
            <div className='header-text'><Link to='/socialimpact'>Social Impact</Link></div>
        </div>
    </div>
  )
}
