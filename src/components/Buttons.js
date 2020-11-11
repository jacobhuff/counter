import React from 'react'

const Buttons = ({ increment, decrement, handleSubmit, clear }) => {
  return (
    <div>
      <button id='decrease' onClick={decrement}>-</button>
      <button id='increase' onClick={increment}>+</button>
      <form onSubmit={handleSubmit}>
        <input id="custom-input" type='number' name="customNumber" placeholder='Custom Amount' />
        <input id='submit-button' type='submit' value='Submit' />
      </form>
      <button id='clear' onClick={clear}>Clear</button>
    </div>
  )
}

export default Buttons
