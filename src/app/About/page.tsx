import Navbar from '@/components/Navbar';
import UserClass from '@/components/User';
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar />
    <div className='m-37 p-37 bg-red-600 bold text-3xl'>
      <UserClass />
    </div>
    </>
    
  )
}

export default page;