import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [activeTab, setActiveTab] = useState('Home')
    return (
        <div className='flex flex-row justify-between w-[100%] bg-slate-400 items-center py-5 px-10'>
            <h1 className='text-[24px] text-[#3b2715]'>User Management App</h1>
            <div>
                <ul className='flex flex-col md:flex-row gap-4 text-[20px] text-[#fff]'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'> <li>About</li></Link>
                    <Link to='/add'><li>Add</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header