import React from 'react'

function About() {
  return (
    <div className='flex flex-col justify-center items-center mt-[60px]'>
      <div className='w-[50%]'>
        <h1 className='text-[26px] font-medium mb-[15px]'>About</h1>
        <p className='mb-3 text-[18px]'>Welcome to the User Management System Application! Powered by ReactJS, NodeJS, and ExpressJS, this cutting-edge application offers seamless user management capabilities, all wrapped up with efficient routing.</p>
        <p className='mb-3 text-[18px]'>With intuitive routing functionality, you can effortlessly navigate through various features, granting you complete control over user profiles and data. </p>
      </div>
    </div>
  )
}

export default About