import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-secondary w-full'>
      <div className='flex justify-between box container mx-auto'>
        <div className='flex flex-col gap-4'>
          <div>
            <h1 className='text-primary h1'>Little Lemon</h1>
            <h2 className='text-white h2'>Chicago</h2>
          </div>
          <p className='txt-normal text-white max-w-xs'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to={"/book"} className='btn'>Reserve a Table</Link>
        </div>
        <img className='-mb-[200px] w-[320px] h-[320px] object-cover rounded-lg' width={400} height={400} src="/assets/restauranfood.jpg" alt="food" />
      </div>
    </header>
  )
}
