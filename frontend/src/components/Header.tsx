import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const [activeTab, setActiveTab] = useState('Home')
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveTab('Home')
        }
        else if (location.pathname === '/about') {
            setActiveTab('About')
        }
        else if (location.pathname === '/create') {
            setActiveTab('Create')
        }
    }, [location])

    return (
        <div className='flex flex-row justify-between w-[100%] bg-slate-400 items-center py-5 lg:px-10 xl:px-[50px] 2xl:px-[100px] 3xl:px-[200px] 4xl:px-[300px] 5xl:px-[400px] 6xl:px-[500px] 7xl:px-[800px] 8xl:px-[1500px] 9xl:px-[2200px]'>
            <Link to={'/'}><h1 className='text-[22px] text-[#4b4848]'>User Management App</h1></Link>
            <div>
                <ul className='flex flex-col md:flex-row gap-4 text-[18px] text-[#fff]'>
                    <Link to='/'><li className={`${activeTab === 'Home' ? 'text-[#000]' : ''}`} onClick={() => setActiveTab('Home')}>Home</li></Link>
                    <Link to='/about'> <li className={`${activeTab === 'About' ? 'text-[#000]' : ''}`} onClick={() => setActiveTab('About')}>About</li></Link>
                    <Link to='/create'><li className={`${activeTab === 'Create' ? 'text-[#000]' : ''}`} onClick={() => setActiveTab('Create')}>Create</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header