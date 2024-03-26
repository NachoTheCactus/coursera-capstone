import React, { useState } from 'react'

export default function BookingForm({availableTimes, dispatch, submitForm}) {

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedGuests, setSelectedGuests] = useState("")
    const [selectedOccasion, setSelectedOccasion] = useState("")

    const handleChange = (e) => {
        dispatch(e);
        setSelectedDate(e)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(e);
    }

  return (
    <>
        <h1>Book now!</h1>
        <form onSubmit={handleSubmit} className='grid max-w-52 gap-5'>
            <label htmlFor="res-date">Choose date</label>
            <input value={selectedDate} onChange={(e) => handleChange(e.target.value)} type="date" id="res-date"/>
            <label htmlFor="res-time">Choose time</label>
            <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} id="res-time">
                {availableTimes.availableTimes.map((obj, index)=>{
                    return <option key={obj+index}>{obj}</option>
                })}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input value={selectedGuests} onChange={(e) => setSelectedGuests(e.target.value)} type="number" placeholder="1" min="1" max="10" id="guests"/>
            <label htmlFor="occasion">Occasion</label>
            <select value={selectedOccasion} onChange={(e) => setSelectedOccasion(e.target.value)} id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <div className='btn'>
                <input aria-label="On Click" type="submit" value={"Make your reservation"} />
            </div>
        </form>
    </>
  )
}
