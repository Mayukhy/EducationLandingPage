import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Divider from '@mui/joy/Divider';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function Navber({ishover,setIshover}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
 const [cateName,setCateName] = React.useState(null)
 const [catetag,setCatetag] = React.useState()
console.log(cateName)
  const category = [
    {name:'Computer Science',tag:'cse',
      course:[
        'Web Development',
        'MERN Stack Development',
        '.Net Development',
        'React Js Development',
        'C++/C Development',
        'Game Development',
        'Java Full Stack Development'  
      ]},
   { name:'Electronics & Communication',tag:'ece',
     course:[
      'Embeded System',
      'Internet of Things',
      'Robotics',
      'Electric Vehicle'
     ]
  
  },
  {name:'Management',tag:'com',
  course:[
    'Digital Marketing',
    'Finance',
    'HR Management',
    'Operation Management',
    'Buisness Analytics'
  ]}
  ]


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setIshover(false)
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setIshover(false)
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setIshover(false)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setIshover(false)
  };

  return (
    <AppBar sx={{background:'white'}} position="static">
      <Container  maxWidth="xl">
        <Toolbar sx={{color:'black'}} disableGutters>
        {    ishover && 

<div className=' md:hidden flex gap-1'>
<div style={{zIndex:99}}
 className=' bg-indigo-500 gap-2 fixed w-[200px] left-0 top-[56px] animate-[slideup_0.6s]'>
                {category?.map((item,id)=>(
                  <div key={id}>
                  <div  onMouseEnter={()=>{{
                    setCateName(item?.course)
                    setCatetag(item?.tag)
                    }}}  className= {catetag === item?.tag ?`text-yellow-300 font-semibold hover:text-yellow-300 transition-all duration-200 cursor-pointer`:`text-slate-100 font-semibold hover:text-yellow-300 transition-all duration-200 cursor-pointer`}>
                 <div className='flex justify-between p-3' >
                   <p>{item?.name}</p>
                  <ChevronRightIcon/>
                  </div>
                  <Divider sx={{color:'white',width:'100%'}}/>
                  </div>
                  </div>
                ))}
                              { cateName && <div style={{zIndex:99}} className='bg-indigo-600 gap-2 absolute left-[200px] top-0 w-[200px] animate-[slideright_0.6s]'>
                 {  cateName?.map((item,id)=>(
                  <div key={id}  className='  text-slate-100 font-semibold hover:text-yellow-300 transition-all duration-200 cursor-pointer'>
                 <div className='flex justify-between p-3' >
                   <p>{item}</p>
                  <ChevronRightIcon/>
                  </div>
                  <Divider sx={{color:'white',width:'100%'}}/>
                  </div>
                 ))}
                 </div>
}
              </div>


              </div>
              }
          <ImportContactsIcon className=' text-indigo-600' sx={{ display: { xs: 'none', md: 'flex', }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              textDecoration: 'none',
              color:'#4d2f80'
            }}
          >
            CouserShala
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
             
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography  sx={{color:'black'}} textAlign="center">Home</Typography>
                </MenuItem>

                <MenuItem onClick={()=>{{
  setIshover(!ishover)
  setAnchorElNav(null);
  }}}>
                  <Typography  sx={{color:'black'}} textAlign="center">Courses</Typography>
                </MenuItem>


                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography  sx={{color:'black'}} textAlign="center">About Us</Typography>
                </MenuItem>

                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography  sx={{color:'black'}} textAlign="center">Contact Us</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
          <ImportContactsIcon className=' text-indigo-600' sx={{ display: {xs:'flex',md:'none'}, mr: 1 }}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 800,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CourShala
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Home
              </Button>
              <div  onMouseEnter={()=>{{
  setIshover(true)}}}
   onMouseLeave={()=>{{
    setIshover(false)
    setCateName(null)}}} className=' relative'>
              <Button
                
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Courses
              </Button>

{    ishover && 

<div  className=' flex gap-1'>
<div
 className=' bg-indigo-500 gap-2 absolute w-[300px] animate-[slideup_0.6s]'>
                {category?.map((item,id)=>(
                  <div key={id}>
                  <div  onMouseEnter={()=>{{
                    setCateName(item?.course)
                    setCatetag(item?.tag)
                    }}}  className= {catetag === item?.tag ?`text-yellow-300 font-semibold hover:text-yellow-300 transition-all duration-200 cursor-pointer`:`text-slate-100 font-semibold hover:text-yellow-300 transition-all duration-200 cursor-pointer`}>
                 <div className='flex justify-between p-3' >
                   <p>{item?.name}</p>
                  <ChevronRightIcon/>
                  </div>
                  <Divider sx={{color:'white',width:'100%'}}/>
                  </div>
                  </div>
                ))}
                              { cateName && <div className='bg-indigo-600 gap-2 absolute w-[300px] left-[300px] border-l-4 border-white animate-[slideright_0.6s] top-0'>
                 {  cateName?.map((item,id)=>(
                  <div key={id}  className='  text-slate-100 font-semibold hover:text-yellow-300 transition-all duration-200 cursor-pointer'>
                 <div className='flex justify-between p-3' >
                   <p>{item}</p>
                  <ChevronRightIcon/>
                  </div>
                  <Divider sx={{color:'white',width:'100%'}}/>
                  </div>
                 ))}
                 </div>
}
              </div>


              </div>
              }
              </div>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                About Us
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Contact Us
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Mayukh Das" src='https://media.licdn.com/dms/image/D5603AQExGdgfAEzIbQ/profile-displayphoto-shrink_800_800/0/1680539630166?e=1699488000&v=beta&t=1v73In2Sf5meBF5xSw3IE5PmMs1rn7T-K2oB8xMUZ34' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navber;