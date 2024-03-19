import React from 'react'

export default function Nav() {
  return (
  <nav className='bg-white'>
    <div className='container flex between box'>
      <img src='/assets/Logo.svg' alt='logo'/>
      <ul className='flex gap'>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Reservations</a></li>
        <li><a href="/">Order Online</a></li>
        <li><a href="/">Login</a></li>
      </ul>
    </div>
  </nav>
)}
