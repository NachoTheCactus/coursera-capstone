import React from 'react'
import Header from './Header'

export default function Main() {

  return (
    <main>
      <Header/>
      <div className='container mt-[80px] mx-auto box'>
        <div className='flex justify-between mb-8'>
          <h3 className='h1 font-bold'>This weeks specials!</h3>
          <button className='btn'>Online Menu</button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap'>
          <SpecialItem imgSrc={"/assets/greek salad.jpg"} alt={"greek salad"} title={"Greek salad"} price={"12.99"} description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."}/>
          <SpecialItem imgSrc={"/assets/bruchetta.svg"} alt={"bruschetta"} title={"Bruschetta"} price={"5.99"} description={"Our Bruschetta is made from grilled bread that has been smoared with garlic and seasoned with salt and olive oil."}/>
          <SpecialItem imgSrc={"/assets/lemon dessert.jpg"} alt={"lemon dessert"} title={"Lemon Dessert"} price={"5.00"} description={"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}/>
        </div>
      </div>
    </main>
  )
}

function SpecialItem({imgSrc, alt, title, price, description}){
  return(
    <div className='flex flex-col rounded-lg bg-[#EDEFEE]'>
      <img className='w-full h-[160px] object-cover rounded-t-lg' src={imgSrc} alt={alt} width={300} height={300}/>
      <div className='box flex flex-col justify-between gap h-full'>
        <div className='flex flex-col gap'>
          <div className='flex justify-between txt-normal'>
            <p className='font-bold'>{title}</p>
            <p className='text-orange-400'>${price}</p>
          </div>
          <p className='txt-normal'>{description}</p>
        </div>
        <p className='flex gap-3 font-bold items-center justify-self-end'>Order a delivery <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M280 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h57.7l16.4 30.3L256 192l-45.3-45.3c-12-12-28.3-18.7-45.3-18.7H64c-17.7 0-32 14.3-32 32v32h96c88.4 0 160 71.6 160 160c0 11-1.1 21.7-3.2 32h70.4c-2.1-10.3-3.2-21-3.2-32c0-52.2 25-98.6 63.7-127.8l15.4 28.6C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L418.2 128H480c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H459.6c-7.5 0-14.7 2.6-20.5 7.4L391.7 78.9l-14-26c-7-12.9-20.5-21-35.2-21H280zM462.7 311.2l28.2 52.2c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-28.2-52.2c2.3-.3 4.7-.4 7.1-.4c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-15.5 5.5-29.7 14.7-40.8zM187.3 376c-9.5 23.5-32.5 40-59.3 40c-35.3 0-64-28.7-64-64s28.7-64 64-64c26.9 0 49.9 16.5 59.3 40h66.4C242.5 268.8 190.5 224 128 224C57.3 224 0 281.3 0 352s57.3 128 128 128c62.5 0 114.5-44.8 125.8-104H187.3zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg></p>
      </div>
    </div>
  )
}
