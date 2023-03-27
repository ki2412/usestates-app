import './App.css';
import { useState } from 'react';

const holidays = [
    'Chirstmas',
    'Tet',
    'Valentine',
]


function AppRandom() {
  const [holiday, setHoliday] = useState()

  const randomHoliday = () => {
    const index = Math.floor(Math.random() * holidays.length)
    setHoliday(holidays[index])
  }

  return (
    <div className="App" style = {{padding:20}}>
      <h1>{holiday}</h1>
      <button onClick={randomHoliday}>Click để nhận quà ngẫu nhiên theo mùa lễ</button>
    </div>
  );
}

export default AppRandom;