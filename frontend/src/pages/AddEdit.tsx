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
    <div className="flex flex-col  items-center mt-[120px] w-full h-screen leading-10">
      <form onSubmit={handleSubmit} className="flex flex-col w-1/5">
        <div className='mb-[5px] flex flex-col'>
          <label>Name</label>
          <input type='text' name='name' value={name} placeholder='Please enter your name' onChange={handleInputChange} className='border-[1px] border-[#706e6e] border-solid rounded-[4px] text-[12px] px-2' />
        </div>

        <div className='mb-[5px] flex flex-col'>
          <label>Email</label>
          <input type='email' name='email' value={email} placeholder='Please enter your email' onChange={handleInputChange} className='border-[1px] border-[#706e6e] border-solid rounded-[4px] text-[12px] px-2' />
        </div>

        <div className='mb-[5px] flex flex-col'>
          <label>Phone Number</label>
          <input type='text' name='phoneNumber' value={phoneNumber} placeholder='Please enter your phoneNumber' onChange={handleInputChange} className='border-[1px] border-[#706e6e] border-solid rounded-[4px] text-[12px] px-2' />

        </div>
      </form>
    </div>

  )
}

export default AddEdit