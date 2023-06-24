import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function View() {
  const [state, setState] = useState<any>({})
  const { id } = useParams()
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
  return (
    <div className='flex flex-row justify-center items-center w-[100%] mt-[100px]'>
      <div className=' flex flex-col border-[1px] border-[#4b4848] border-solid p-6'>
        <span>id: {id}</span>
        <span>Name: {state.name && state.name}</span>
        <span>Email: {state.email && state.email}</span>
        <span>Phone Number: {state.phoneNumber && state.phoneNumber}</span>
        <div className='flex justify-center items-center'>
          <Link to={'/'}><button className='bg-[#444242]'>Go Back</button></Link>
        </div>
      </div>
    </div>
  )
}

export default View