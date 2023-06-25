import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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

function CreateAndEdit() {
  const [state, setState] = useState(initialState)
  console.log(state)
  const navigate = useNavigate()
  const { id } = useParams()
  console.log(id)

  // const { name, email, phoneNumber } = initialState

  function handleInputChange(e: any) {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  async function postUserData(data: IUserData) {
    const response = await axios.post('http://localhost:5000/user', state)

    if (response.status === 200) {
      console.log(response)
      navigate('/')
    }
    else (
      alert('sorry not able to store user data!')
    )
  }

  async function updateUserData(state: IUserData, id: string) {
    const response = await axios.put(`http://localhost:5000/user/${id}`, state)
    console.log(response)
    navigate('/')
  }

  const getSingleUser = async (id: string) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`)
    console.log(response)
    setState({ ...response.data[0] })
  }

  useEffect(() => {
    if (id) {
      getSingleUser(id)
    }
  }, [id])

  function handleSubmit(e: any) {
    e.preventDefault()
    if (!id) {
      postUserData(state)
    }
    else {
      updateUserData(state, id)
    }
  }

  return (
    <div className="flex flex-col  items-center mt-[120px] w-full leading-10">
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
        <button className='border-[1px] border-[#b7b5b5] border-solid w-[100%] mt-7 px-1 rounded text-[16px] bg-[#764293] text-slate-50'>{id ? 'Update' : 'Add'}</button>
      </form>
    </div>

  )
}

export default CreateAndEdit