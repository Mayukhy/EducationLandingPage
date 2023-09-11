import React from 'react'
import Button from '@mui/material/Button'

export default function Hero() {
  return (
    <div className=' flex lg:flex-row flex-col gap-2 max-w-[1200px] m-auto lg:mt-4 mt-0'>
      <div className='animate-[slideup_0.6s] flex flex-col p-10 lg:mt-[-20px] mt-0 gap-5 justify-center'>
        <p className='animate-[slidedown_0.6s] font-bold lg:text-left text-center lg:text-6xl md:text-5xl text-4xl'>
        Learn In-Demand Skills on Your Schedule
        </p>
        <p className=' font-normal lg:text-left text-center text-md text-violet-900'>
        Meet top industry professionals and learn the skills you need to get ahead in your career with Yhills.
        </p>
        <div className=' flex gap-2 lg:justify-start justify-center'>
        <Button variant='contained' color="primary">
          Trending Courses
        </Button>
        <Button variant='outlined' color="primary">
          Talk to Us
        </Button>
        </div>
      </div>

      <img className='lg:h-[600px] animate-[slideright_0.6s] h-auto lg:w-auto md:w-[500px] w-[400px] m-auto' src="https://yhills.com/wp-content/uploads/2022/10/Yhills-Collage-final-1.webp" alt="" />


    </div>
  )
}
