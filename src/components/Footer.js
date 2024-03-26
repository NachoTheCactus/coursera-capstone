import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-secondary'>
        <div className='flex container gap box mx-auto text-white'>
            <img src="/assets/Logo.svg" alt="logo" />
            <nav>
                <ul>
                    <li><p className='font-bold'>Doormat Navigation</p></li>
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
                    <li><p className='font-bold'>Contact</p></li>
                    <li><a href="/">Address</a></li>
                    <li><a href="/">Phone number</a></li>
                    <li><a href="/">Email</a></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><p className='font-bold'>Social Media links</p></li>
                    <li><a href="/">Address</a></li>
                    <li><a href="/">Phone number</a></li>
                    <li><a href="/">Email</a></li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}
