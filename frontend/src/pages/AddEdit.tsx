import React, { useState } from 'react'

interface IUserData {
  name: string,
  email: string,
  phoneNumber: string
}

const initialState = {
  name: '',
  email: '',
  phoneNumber: ''
}

function AddEdit() {
  const [state, setState] = useState(initialState)
  console.log(state)

  // const { name, email, phoneNumber } = initialState

  function handleInputChange(e: any) {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  async function postUserData(data:IUserData) {

  }

  function handleSubmit(e: any) {
    e.preventDefault()
    postUserData(state)
  }

  return (
    <div className="flex flex-col  items-center mt-[120px] w-full h-screen leading-10">
      <form onSubmit={handleSubmit} className="flex flex-col w-1/5">
        <div className='mb-[5px] flex flex-col'>
          <label>Name</label>
          <input type='text' name='name' value={state.name} placeholder='Please enter your name' onChange={handleInputChange} className='border-[1px] border-[#706e6e] border-solid rounded-[4px] text-[12px] px-2 outline-none' />
        </div>

        <div className='mb-[5px] flex flex-col'>
          <label>Email</label>
          <input type='email' name='email' value={state.email} placeholder='Please enter your email' onChange={handleInputChange} className='border-[1px] border-[#706e6e] border-solid rounded-[4px] text-[12px] px-2 outline-none' />
        </div>

        <div className='mb-[5px] flex flex-col'>
          <label>Phone Number</label>
          <input type='text' name='phoneNumber' value={state.phoneNumber} placeholder='Please enter your phoneNumber' onChange={handleInputChange} className='border-[1px] border-[#706e6e] border-solid rounded-[4px] text-[12px] px-2 outline-none' />

        </div>
        <button className='border-[1px] border-[#b7b5b5] border-solid w-[100%] mt-7 px-1 rounded text-[16px] bg-[#764293] text-slate-50'>Add</button>
      </form>
    </div>

  )
}

export default AddEdit