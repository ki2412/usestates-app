import './App.css';

import { useState } from 'react';

const orders = [100, 200, 300]

function AppOrder () {
  const total = orders.reduce((total, cur) => total + cur)

  const [counter, setCounter] = useState(total)

  const handleTotal = () => {
    setCounter(prevState => prevState +1)
    setCounter(prevState => prevState +1)
    setCounter(prevState => prevState +1)
  }

  return (
    <div className="AppOrder" style = {{padding:20}}>
      <h1>{counter}</h1>
      <button onClick={handleTotal}>Total</button>
    </div>
  )
}

export default AppOrder;