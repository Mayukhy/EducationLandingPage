import { Card } from '@mui/joy';
import { Avatar, Box, Grid} from '@mui/material';
import React, { useRef } from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IconButton from '@mui/material/IconButton'



export default function Comments() {

    const feedback = [
        {name:'Marish Sha',
         img:'https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE=',
         msg:"I developed an interest in HR Management and came across CourseShala Trainings, the courses were affordable with great content. The best part was that they provided me with a lot of practical projects to work on, which landed me my first internship! I'll be forever grateful to CourseShala!",
        time:'2 Months ago'},
         {name:'Rajesh Khanna',
         img:'https://media.istockphoto.com/id/1359179129/photo/young-man-stock-photo.jpg?s=612x612&w=0&k=20&c=988FdfMWmJurJt9UT00e481xNW8yGPHuXTsiRyJEy2Q=',
         msg:"I took Angular course in 2nd year of my engineering degree. The tutor explained conecepts using proper examples and implementation. After this course, I worked as a full stack developer and I am currently working as a software engineer at Persistent Systems.",
         time:'3 Months ago'},
         {name:'Mayukh Das',
         img:'https://media.licdn.com/dms/image/D5603AQExGdgfAEzIbQ/profile-displayphoto-shrink_800_800/0/1680539630166?e=1699488000&v=beta&t=1v73In2Sf5meBF5xSw3IE5PmMs1rn7T-K2oB8xMUZ34',
         msg:"The course helped me get my first Internship at a well-known start-up in just a month and I also got the job before even completing my internship. Courses are well structured, easy to understand, and helped me land my first job. I am thankful to the founder of CourseShala, Sarvesh Agarwal, for building such a good platform.",
         time:'1 Months ago'},
         {name:'Nibeduta Chaudury',
         img:'https://media.istockphoto.com/id/1301397300/photo/portrait-of-young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=Xvgo-k58_woBTuQaRNZ4JXP2SQsw_RSbrlSbt7XbQlU=',
         msg:"I learnt skills required to enter into a job. Suraj helped me in framing my resume in such a way that it could highlight my skillset. He also guided me on how to write emails, create LinkedIn profile, approach people, and talk in a professional way. These things really helped me a lot. As I was in teaching profession, I didn't know the industry culture. He guided me best possible way. Thank you so much Suraj and Arjun.",
         time:'2 weeks ago'}
    ]

    const divRef = useRef()
  return (

    <div className='flex pt-6  flex-col gap-2 max-w-[1200px] m-auto md:mt-16 mt-10 relative  '>
     <h1 className='animate-[slidedown_0.6s] text-center font-semibold md:text-5xl text-4xl mb-2'>Our students, making us proud everyday!</h1>
    
    <div ref={divRef} className=' flex gap-3 md:overflow-x-auto scroll-smooth overscroll-none md:p-10 lg:mt-6 mt-[-10px]    p-10'>
    <div  className='animate-[slideleft_0.6s] flex md:flex-nowrap flex-wrap   gap-3'>
        {feedback?.map((thaught,id)=>(
        <Card variant='soft' sx={{width:{md:500,xs:'100%'},boxShadow:'lg'}} className=' p-8  md:hover:scale-100 hover:scale-105 cursor-pointer duration-200 transition-all hover:border-2 border-violet-600'  spacing={2}>
        <Grid item>
          <Avatar sx={{ width: 56, height: 56 }} src={thaught?.img} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 className=' font-bold text-2xl' style={{ margin: 0, textAlign: "left" }}>{thaught?.name}</h4>
          <p style={{ textAlign: "left" }}>
          {thaught?.msg}{" "}
          </p>
          <p style={{ textAlign: "left", color: "gray" }}>
            posted {thaught?.time}
          </p>
        </Grid>
        <img className=' w-[50px] rotate-180 absolute right-0 mr-3' src="https://trainings.internshala.com/cached_uploads/home/sections/alumni/quotes.png" alt="" />
      </Card>
        ))}
       
    </div>
    </div>
    <Box sx={{flexDirection:'row',gap:'10px',display:{md:'flex',xs:'none'},position:'absolute',right:0 ,bottom:'-50px',zIndex:9999}} >

<IconButton aria-label="" onClick={()=>{divRef.current.scrollLeft -=450}}>
  <NavigateBeforeIcon className=' border-none' />
</IconButton>
<IconButton  aria-label="" onClick={()=>{divRef.current.scrollLeft +=450 }}>
  <NavigateNextIcon/>
</IconButton>
</Box>
    </div>
  )
}
