import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface UserData {
  id: string,
  name: string,
  email: string,
  phoneNumber: number
}

function Home() {
  const [data, setData] = useState<UserData[]>([])
  console.log(data)

  async function getUsers() {
    const response = await axios.get('http://localhost:5000/users')
    if (response.status === 200) {
      setData(response.data)
    }
  }
  
  const deleteUser =async(id:any)=>{
    const response = await axios.delete(`http://localhost:5000/user/${id}`)
    console.log(response.data)
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='flex justify-center items-center w-[100%] h-[90vh]'>
      <table >
        <thead>
          <tr className='border-[#434242] border-[1px] border-solid flex flex-row text-center'>
            <th className='border-[#434242] border-r-[1px] border-solid p-2'>No.</th>
            <th className='border-[#434242] border-r-[1px] border-solid p-2'>Name</th>
            <th className='border-[#434242] border-r-[1px] border-solid p-2'>Email</th>
            <th className='border-[#434242] border-r-[1px] border-solid p-2'>Phone Number</th>
            <th className='p-2'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item: UserData, index: number) => {
            return (
              <tr className='border-[#434242] border-[1px] border-solid flex flex-row text-center'>
                <td className='border-[#434242] border-r-[1px] border-solid p-2'>{index + 1}</td>
                <td className='border-[#434242] border-r-[1px] border-solid p-2'>{item.name}</td>
                <td className='border-[#434242] border-r-[1px] border-solid p-2'>{item.email}</td>
                <td className='border-[#434242] border-r-[1px] border-solid p-2'>{item.phoneNumber}</td>
                <td className='p-2 flex flex-row gap-2'>
                  <Link to={`/update/${item.id}`}><button className='border-[#434242] border-[1px] border-solid p-1'>Edit</button></Link>
                  <Link to={`/view/${item.id}`}><button className='border-[#434242] border-[1px] border-solid p-1'>View</button></Link>
                  <Link to={`/delete/${item.id}`}><button className='border-[#434242] border-[1px] border-solid p-1' onClick={()=>deleteUser(item.id)}>Delete</button></Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home