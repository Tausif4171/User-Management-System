import React, { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  phoneNumber: ''
}

function AddEdit() {
  const [state, setState] = useState(initialState)
  const { name, email, phoneNumber } = initialState
  function handleInputChange() {

  }

  function handleSubmit() {

  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='w-[100%]'>
        <label>Name</label>
        <input type='text' name='name' value={name} placeholder='Please enter your name' onChange={handleInputChange} />

        <label>Email</label>
        <input type='email' name='email' value={email} placeholder='Please enter your email' onChange={handleInputChange} />

        <label>Phone Number</label>
        <input type='number' name='phoneNumber' value={phoneNumber} placeholder='Please enter your phoneNumber' onChange={handleInputChange} />

      </form>
    </div>
  )
}

export default AddEdit