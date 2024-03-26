import React from 'react'
import BookingForm from './components/BookingForm'

export default function BookingPage({availableTimes, dispatch, submitForm}) {

  return (
    <div className='container mx-auto box'>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    </div>
  )
}
