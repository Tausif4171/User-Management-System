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
      <div className=' flex flex-col border-[1px] border-[#4b4848] border-solid'>
        <div className='flex justify-center items-center mb-4 py-2 text-[#ffffff] text-[20px] bg-[#474545] font-bold'>
          <h1>User Contact Detail</h1>
        </div>

        <div className='p-6 flex flex-col text-[16px]'>
          <span className='font-medium'>Id: <span className='text-[#343232] font-normal'>{id}</span></span>
          <span className='font-medium'>Name: <span className='text-[#343232] font-normal'>{state.name && state.name}</span></span>
          <span className='font-medium'>Email: <span className='text-[#343232] font-normal'>{state.email && state.email}</span></span>
          <span className='font-medium'>Phone Number: <span className='text-[#343232] font-normal'>{state.phoneNumber && state.phoneNumber}</span></span>
        </div>

        <div className='flex justify-center items-center'>
          <Link to={'/'}><button className='bg-[#764293] px-4 rounded-[4px] h-8 text-slate-50 text-[14px] mb-4'>Go Back</button></Link>
        </div>
      </div>
    </div>
  )
}

export default View