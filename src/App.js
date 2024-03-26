import './App.css';
import BookingPage from './BookingPage';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
import {Route, Routes, useNavigate} from 'react-router-dom'
import { useReducer } from 'react';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {

  //GIVEN SCRIPT (the one that was required to be put in index.html) DOESN'T WORK

  const seedRandom = function(seed){
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function(){
      return (s = s * a % m)/m;
    }
  }

  const fetchAPI = function(date){
    let result = [];
    let rand = seedRandom(date.getDate());
    for(let i = 17; i <= 23; i++){
      if(rand() < 0.5){
        result.push(i+':00');
      }
      if(rand() > 0.5){
        result.push(i+ ':30');
      }
    }
    return result;
  }

  const submitAPI = function(formData){
    return true;
  }

  const initialState = {availableTimes: fetchAPI(new Date())}
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date){
    return {availableTimes: fetchAPI(new Date())}
  }

  const navigate = useNavigate();
  function submitForm(formData){
    if(submitAPI(formData)){
      navigate("/confirmed")
    }
  }

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/book" element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/confirmed" element={<ConfirmedBooking/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
