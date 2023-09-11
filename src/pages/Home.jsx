import React from 'react'
import Hero from '../components/Hero'
import Courses from '../components/courses/Courses'
import TopCourses from '../components/TopCourses'
import Mentors from '../components/Mentors'
import Button from '@mui/material/Button'
import Comments from '../components/Comments'
import img1 from '../assets/imgs/img1.png'
import img2 from '../assets/imgs/img2.png'
export default function Home({setIshover}) {
  return (
    <div onClick={()=>setIshover(false)}>
      <Hero/>

      <div className=' flex flex-col md:mt-28 mt-20 max-w-[1200px] m-auto '>
      <h1 className='animate-[slideup_0.6s] text-center font-semibold md:text-5xl text-4xl mb-14 px-4'>Our Past and Present College & Club Partners</h1>
      <div className=' animate-[slideup_0.6s] flex m-auto mb-6 flex-wrap justify-center '>
      <img className=' md:w-[600px] w-[100%] px-5 ' src={img1} alt="" />
      <img className=' md:w-[600px] w-[100%] px-5 ' src={img2} alt="" />
      </div>

      </div>

      <div className='bg-[#fafafe] pt-1'>
      <Courses/>
      </div>

      <div className=' flex flex-col md:mt-14 mt-7 max-w-[1200px] m-auto '>
      <h1 className='animate-[slideup_0.6s] text-center font-semibold md:text-5xl text-4xl mb-2'>How it works</h1>
      <img className='animate-[slideright_0.6s] lg:w-[900px] m-auto px-10 mt-[-10px]' src="https://yhills.com/wp-content/uploads/2022/11/HowItWorks-01-1536x768.webp" alt="" />
      
      </div>
      <TopCourses/>
      <div className='bg-[#fafafe]'>
      <Mentors/>
      </div>
<div className='bg-[#0b6bcbde]'>
      <div className=' flex flex-col md:mt-20 mt-12 max-w-[1200px] m-auto gap-4 px-10 '>
      <h1 className='animate-[slideup_0.6s] text-white md:justify-start justify-center md:text-left text-center font-semibold md:text-5xl text-4xl mt-10 mb-2'>Connecting Learning To Life</h1>
      <div className='relative flex gap-2 md:justify-between justify-center'>
        <div className='flex gap-2 '>
        <Button variant='contained' color="warning">
          Trending Courses
        </Button>
        <Button variant='outlined' sx={{color:'#fcd703', border:'#fcd703 1px solid'}} color="warning">
          Talk to Us
        </Button>
        </div>
        <img className=' absolute md:flex hidden right-0 w-[370px] top-[-285px]' src="https://yhills.com/wp-content/uploads/2022/09/editable.webp" alt="" />
        </div>
        </div>
        <br />
        <br />
      </div>
      <Comments/>
      <br />

      <div className='bg-[#fafafe]'>
      <div className=' flex flex-col md:mt-20 mt-12 max-w-[1200px] m-auto gap-4 px-10 '>
      <h1 className='animate-[slideup_0.6s] text-center  font-semibold md:text-5xl text-4xl mt-10 mb-2'>Still Have a Doubt?</h1>
      <p className=' animate-[slidedown_0.6s] text-center font-semibold md:text-xl text-md mb-2'>Get in touch with us anytime if you have any questions or concerns.</p>
      <div className='relative flex gap-2 justify-center'>
        <div className='flex gap-2 '>
        <Button variant='contained' size='large' color="primary">
          Trending Courses
        </Button>
        <Button variant='outlined' size='large'  color="primary">
          Talk to Us
        </Button>
        </div>
        </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  )
}
