import React from 'react'
import CoursesCard from './CoursesCard'
export default function TopCourses() {

    const featuredCourse = [
       {
        stream:'Computer Science',
        name: 'MERN Stack Development',
        image:'https://www.bigscal.com/wp-content/uploads/2022/09/Features-of-Mern-stack-development-services-You-Should-Know.png',
        duration: '4 Months',
        details:
        {
            features: [
                '1 Year Course Access',
                'Live Mentorship by Experts',
                'Internship Certificate',
                '55+ Hours of Live Classes',
                '5 Capstone Projects',
                'Course Completion Certificate'
            ],
            modules: {
                module1: [
                    'Installation of Nodejs',
                    'Introduction to Nodejs'
                ],
                module2: [

                    'Javascript Functions and Operators',
                    'Switches, Loops and Objects',
                    'Arrays',
                    'Important Methods and Miscellaneous Topics ',
                ],
                module3: [
                    'Callbacks',
                    ' Loops',
                    'Events & Processes',
                ],
                module4: [
                    ' Node Modules',
                    'File System',
                    'Node Package Buffer and Errors',
                    'Express',
                    'JSON and Express'
                ],
                module5: [
                    'Mongo DB',
                    'AJAX',
                    'More about Mongo DB',
                    'Module Assignment and Future Aspects'
                ]
            }
        },
       } ,
       {
        stream:'Electronics & Communication',
        name:'Embeded System',duration:'3 Months',
    image:'https://www.einfochips.com/blog/wp-content/uploads/2018/12/how-rtos-for-embedded-systems-powers-the-internet-of-things-featured01.jpg'
},
{
    stream:'Computer Science',
    name: 'Web Development',
    image:'https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg',
    duration: '2 Months',
    details:
    {
        features: [
            '1 Year Course Access',
            'Live Mentorship by Experts',
            'Internship Certificate',
            '55+ Hours of Live Classes',
            '5 Capstone Projects',
            'Course Completion Certificate'
        ],
        modules: {
            module1: [
                'HTML Lists, HTML Boilerplate',
                'HTML Image Elements',
                'HTML Links and Anchor Tags'
            ],
            module2: [
                'HTML Tables',
                'HTML Forms',
                'HTML Tables for Layouts '
            ],
            module3: [
                'Inline CSS, Internal CSS',
                'External CSS, CSS Selectors',
                'How to debug CSS Code'
            ],
            module4: [
                'The Box Model of Website',
                'Styling CSS Display Property',
                'CSS Static and Relative Positioning'
            ],
            module5: [
                ' Installing Bootstrap',
                ' Web Design 101-Wire Framing',
                'Bootstrap Navigation Bar'
            ]
        }
    },

},
{
    stream:'Management',
    name:'Digital Marketing',duration:'2 Months',
image:'https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.webp?b=1&s=170667a&w=0&k=20&c=YTqI2cSSdP3zIJSMSUp76oLM5k7H6HD9PHxCogqezJU='
}
    ]
  return (
    <div className='flex  flex-col gap-2 max-w-[1200px] m-auto mt-10 '>
    <h1 className=' animate-[slideup_0.6s] text-center font-semibold md:text-5xl text-4xl mb-2'>Top Featured Courses</h1>
    <p className=' animate-[slidedown_0.6s] text-center font-semibold md:text-xl text-md'>Choose courses taught by real-world experts.</p>
        <div className='animate-[slideup_0.6s] flex lg:gap-4 md:gap-10 gap-6 md:flex-row  lg:mt-6 mt-[-20px] p-10 flex-col flex-wrap md:mx-auto mx-0'>
        {featuredCourse?.map((course,id)=>(
            <CoursesCard key={id} course={course}/>
        ))}
        
    </div>
    <br />
    </div>
  )
}
