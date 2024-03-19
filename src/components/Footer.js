import React from 'react'

export default function Footer() {
  return (
    <footer className='flex'>
        <img src="/assets/Logo.svg" alt="logo" />
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li><a href="#">Address</a></li>
                <li><a href="#">Phone number</a></li>
                <li><a href="#">Email</a></li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li><a href="#">Address</a></li>
                <li><a href="#">Phone number</a></li>
                <li><a href="#">Email</a></li>
            </ul>
        </nav>
    </footer>
  )
}
