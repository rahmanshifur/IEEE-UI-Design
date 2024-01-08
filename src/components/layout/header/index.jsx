import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, InputAdornment, OutlinedInput, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from "../../../assets/header-logo/INSB-main-logo.png";
const Menu = [
   {
      name: 'Home',
      url: '/'

   },
   {
      name: 'Activities',
      submenu: [
         {
            name: 'Events',
            url: '/event'
         },
         {
            name: 'News',
            url: '/news'
         },
         {
            name: 'Achievements',
            url: '/news'
         }
      ]
   },
   {
      name: 'Societies & AG',
      submenu: [
         {
            name: 'IEEE NSU RAS SBC',
            url: '#'
         },
         {
            name: 'IEEE NSU PES SBC',
            url: '#'
         },
         {
            name: 'IEEE NSU IAS SBC',
            url: '#'
         },
         {
            name: 'IEEE NSU WIE SBC',
            url: '#'
         }
      ]
   },
   {
      name: 'Members',
      submenu: [
         {
            name: 'Panels',
            url: '#'
         },
         {
            name: 'Officers',
            url: '#'
         },
         {
            name: 'Core Volunteers',
            url: '#'
         },
         {
            name: 'Exemplary Members',
            url: '#'
         },
         {
            name: 'All Members',
            url: '#'
         }
      ]
   },
   {
      name: 'About',
      submenu: [
         {
            name: 'IEES',
            url: '#'
         },
         {
            name: 'IEES Region 10',
            url: '#'
         },
         {
            name: 'IEES Bangladesh Section',
            url: '#'
         },
         {
            name: 'IEES NSU Students Branch',
            url: '#'
         },
         {
            name: 'FAQ',
            url: '#'
         }
      ]
   },
   {
      name: 'Publications',
      submenu: [
         {
            name: 'Blogs',
            url: '#'
         },
         {
            name: 'Research Papers',
            url: '#'
         },
         {
            name: 'Magazines',
            url: '#'
         },
         {
            name: 'Gallery',
            url: '#'
         },
         {
            name: 'Toolkit',
            url: '#'
         }
      ]
   },
   {
      name: 'Contact',
      url: '/contact'

   },
   {
      name: 'get Involved',
      class: { backgroundColor: '#13aff0', color: '#fff', padding: '10px 22px', borderRadius: '5px' },
      submenu: [
         {
            name: 'Events',
            url: '#'

         },
         {
            name: 'News',
            url: '#'
         },
         {
            name: 'Achievements',
            url: '#'
         }
      ]
   },
]
const Header = () => {
   return (
      <BoxWraper boxShadow={4}>
         <Container sx={{}}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
               <Box>
                  <a href='/'><img style={{ width: '50px', display: 'block' }} src={Logo} /></a>
               </Box>
               <Mainmenu>
                  {Menu.map((item) => <MainmenuList >
                     <MainmenuLink style={item.class} to={item.url}>{item.name}</MainmenuLink>

                     <Submenu >
                        {item.submenu?.map((item) => <SubmenuList><SubmenuLink to={item.url}>{item.name}</SubmenuLink> </SubmenuList>)}
                     </Submenu>
                  </MainmenuList>)}
                  <Box paddingLeft={'20px'}>
                     <SearchBar
                        placeholder='Search..'
                        startAdornment={<InputAdornment position="start"><SearchIcon style={{ color: "#fff" }} /></InputAdornment>}
                     />

                  </Box>
               </Mainmenu>
            </Box>
         </Container>
      </BoxWraper>
   )
}
export default Header


const BoxWraper = styled(Box)(() => ({
   backgroundColor: '#141414',
}))
const Mainmenu = styled('ul')(() => ({
   display: 'flex',
   flexDirection: 'row',
   listStyle: 'none',
   padding: '0',
   margin: '0',
   alignItems: 'center',
   ':hover': {
      // color: '#fcb900'
   }

}))
const MainmenuList = styled('li')(({ }) => ({
   display: 'flex',
   flexDirection: 'column',
   position: 'relative',
   padding: "12px 20px",

   '& .css-fy1tyv': {
      display: 'none ',
      zIndex: '100'
   },
   ':hover': {
      '& .css-fy1tyv': {
         display: 'block',
         borderColor: '#D4CDCD',
         boxShadow: '2px 1px rgba(0, 0, 0, 0.2)'
      }
   },
}))
const MainmenuLink = styled(Link)(() => ({
   display: 'block',
   textDecoration: 'none',
   color: 'white',
   fontSize: '14px',
   fontWeight: '600',
   ":hover": {
      color: '#ffc938',
      borderBottom: '2px solid #ffc938 ',
      '-webkit-transition': 'all .25s ease-out',
      // transform: translateY('-10px')

   },
}))
// Sub menu
const Submenu = styled('ul')(() => ({
   display: 'flex',
   flexDirection: 'column',
   listStyle: 'none',
   padding: '0',
   position: 'absolute',
   top: '99%',
   left: '0',
   minWidth: "200px",
   margin: '0',

}))
const SubmenuList = styled('li')(() => ({
   display: 'flex',
   flexDirection: 'column',
   background: 'rgba(0,0,0,0)',
   position: 'relative',

   ':last-child': {
      '.css-tfg8d7': {
         borderBottom: 'none',
      }
   },
}))
const SubmenuLink = styled(Link)(() => ({
   display: 'block',
   textDecoration: 'none',
   color: '#555',
   padding: "12px 16px",
   fontSize: '16px',
   fontWeight: 400,
   textTransform: 'capitalize',
   borderBottom: '1px solid #585858',
   borderColor: '#D4CDCD',
   fontFamily: 'inherit',
   ":hover": {
      color: '#333',
      backgroundColor: "#ffc938"
   }
}))

const SearchBar = styled(OutlinedInput)(({ theme }) => ({
   background: '#141414',
   color: '#fff',
   height: '35px',
   borderRadius: '25px',
   border: '1px solid #fff',
   width: '100%',
   "& fieldset": { border: 'none' },
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 0),
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
         width: '10ch',
         '&:focus': {
            width: '18ch',
         },
      },
   },
}));