import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
  const [data, setData] = useState([])
  console.log(data)
  
  async function getUsers() {
    const response = await axios.get('http://localhost:5000/users')
    if (response.status === 200) {
      setData(response.data)
    }
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home