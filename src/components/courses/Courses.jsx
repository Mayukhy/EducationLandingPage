import React, { useState } from 'react'
import Button from '@mui/material/Button'
import ComputerIcon from '@mui/icons-material/Computer';
import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CoursesCard from '../CoursesCard';
export default function Courses() {
    const [name,setName] = useState('Computer Science')
    const category = [
        {
            name: 'Computer Science', tag: <ComputerIcon  className='btn'  sx={{color:name==='Computer Science'?'white':'#e8c602'}} />,
            course: [
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
                },
                {   stream:'Computer Science',
                    name: 'Advance Cyber Security', duration: '3 Months',
                  image:'https://img.freepik.com/premium-photo/technology-security-concept-safety-digital-protection-system_142243-71.jpg'     
            },
                {   stream:'Computer Science',
                    name: 'Data Structure & Algorithms', duration: '3 Months',
                image:'https://camo.githubusercontent.com/1bd98e45001a7de67aa7775fa05174a730011ba2ba233ae401d8c988bdbbbd15/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f323030302f312a32724b474a366831726567776d664d63747933534c772e706e67'
            },
                {    stream:'Computer Science',
                     name: 'C++/C Development', duration: '2 Months',
                image:'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230703144619/CPP-Language.png'
            },
                {   stream:'Computer Science',
                    name: 'Game Development', duration: '5 Months',
                image:'https://www.arenaparkstreet.com/blog/wp-content/uploads/2021/05/Game-Development.png'
            },
                {   stream:'Computer Science',
                    name: 'Java Full Stack Development', duration: '2 Months',
                image:'https://thumbs.dreamstime.com/b/java-programming-concept-virtual-machine-server-room-background-java-programming-concept-virtual-machine-server-room-148684554.jpg'
            }
            ]
        },
        {
            name: 'Electronics & Communication', tag: <ElectricRickshawIcon className='icon'  sx={{color:name==='Electronics & Communication'?'white':'#fc81f6'}} />,
            course: [
                {
                    stream:'Electronics & Communication',
                    name:'Embeded System',duration:'3 Months',
                image:'https://www.einfochips.com/blog/wp-content/uploads/2018/12/how-rtos-for-embedded-systems-powers-the-internet-of-things-featured01.jpg'
            },
                {
                    stream:'Electronics & Communication',
                    name:'Internet of Things',duration:'2 Months',
            image:'https://community.nasscom.in/wp-content/uploads/2020/11/2-Copy-1024x539.png'},
                {
                    stream:'Electronics & Communication',
                    name:'Robotics',duration:'3 Months',
                 image:'https://t4.ftcdn.net/jpg/03/86/07/83/360_F_386078374_WDOvxzHmUCsg0h3AufqbhtuWkBKz8XpU.jpg'
            },
                {
                    stream:'Electronics & Communication',
                    name:'Electric Vehicle',duration:'4 Months',
                 image:'https://e-vehicleinfo.com/wp-content/uploads/2022/06/Top-EV-Software-Companies-in-India-1.jpg'}
            ]

        },
        {
            name: 'Management', tag: <AccountBalanceIcon className='icon'  sx={{color:name==='Management'?'white':'#fc8803'}} />,
            course: [
                {
                    stream:'Management',
                    name:'Digital Marketing',duration:'2 Months',
                image:'https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.webp?b=1&s=170667a&w=0&k=20&c=YTqI2cSSdP3zIJSMSUp76oLM5k7H6HD9PHxCogqezJU='
            },
                {
                    stream:'Management',
                    name:'Finance',duration:'2 Months',
                image:'https://img.freepik.com/free-vector/illustration-data-analysis-graph_53876-20423.jpg'    
            },
                {
                    stream:'Management',
                    name:'HR Management',duration:'2 Months',
                image:'https://img.freepik.com/premium-photo/human-resources-manpower-planning_101984-184.jpg'
            },
                {
                    stream:'Management',
                    name:'Operation Management',duration:'2 Months',
                image:'https://thumbs.dreamstime.com/b/operations-management-business-technology-concept-virtual-screen-operations-management-business-technology-concept-113495331.jpg'
            },
                {
                    stream:'Management',
                    name:'Buisness Analytics',duration:'2 Months',
                image:'https://www.simplilearn.com/ice9/free_resources_article_thumb/Business_Analytics_Tools_Used_By_Companies_Today.jpg'
            }
            ]
        }
    ]

    const [selectcourses,setSelectcourses] = useState(category[0]?.course)


    return (
        <div className=' bg-[#fafafe] flex  flex-col gap-2 max-w-[1200px] m-auto md:pb-7 pb-0 mt-16 '>
            <h1 className=' animate-[slideup_0.6s] text-center font-semibold md:text-5xl text-4xl mb-2'>Trending Courses</h1>
            <p className=' animate-[slidedown_0.6s] text-center font-semibold md:text-xl text-md'>Choose from 100+ courses with new additions published every month</p>
            <div className=' flex lg:flex-row flex-col gap-2'>
                <div className=' animate-[slideleft_0.6s] flex flex-col px-10 py-6 gap-2'>
                    {category?.map((item, id) => (
                        <Button className=' btn hover:text-zinc-950 '
                         onClick={()=>
                         {
                            setSelectcourses(item?.course)
                            setName(item?.name)
                            }} sx={{ display: 'flex', justifyContent: 'start', color:name===item?.name?'white':'#574563' ,minWidth:'320px', background:name===item?.name?'#0b6bcbde':'white' }} variant="outlined" color="primary">
                           <p className='flex gap-2 hover:text-slate-50'> {item?.tag} {item?.name}</p>
                        </Button>
                    ))}
                </div>
                <div className=' animate-[slideleft_0.6s] flex lg:gap-4 md:gap-10 gap-6 md:flex-row lg:mt-6 mt-[-30px] lg:p-0 p-10 flex-col flex-wrap md:justify-start justify-center'>
                {selectcourses?.map((course,id)=>(
                    <CoursesCard key={id} course={course}/>
                ))}
                </div>
                
            </div>
        </div>
    )
}
