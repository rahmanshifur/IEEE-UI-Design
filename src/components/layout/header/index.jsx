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
      class: { backgroundColor: '#13aff0', color: '#fff', padding: '10px 22px', borderRadius: '5px', borderBottom: '0px' },
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
                  {Menu.map((item) => <MainmenuList subMenu={item.submenu}>
                     <MainmenuLink style={item.class} to={item.url}>{item.name}</MainmenuLink>

                     <Submenu className='sub-menu-ul' >
                        {item.submenu?.map((item) => <SubmenuList><SubmenuLink to={item.url}>{item.name}</SubmenuLink> </SubmenuList>)}
                     </Submenu>
                  </MainmenuList>)}
                  <Box>
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
   listStyle: 'none',
   display: 'flex',
   alignItems: 'center',
   gap: '20px',
   margin: '0',
   padding: '0',
}))
const MainmenuList = styled('li')(({ subMenu }) => ({
   position: (subMenu ? 'relative' : ''),
   padding: '18px 10px',
   ':hover': {
      '.sub-menu-ul': {
         display: 'block',
         transition: 'all .5s'

      }
   }
}))
const MainmenuLink = styled(Link)(() => ({
   textDecoration: 'none',
   color: 'white',
   fontSize: '14px',
   fontWeight: '600',
   borderBottom: '2px solid transparent ',

   ':hover': {
      paddingBottom: '6px',
      borderBottom: '2px solid #ffc938 ',
      color: '#ffc938',
      transition: 'all .2s'
   }
}))

// Sub menu
const Submenu = styled('ul')(() => ({
   position: 'absolute',
   background: '#fff',
   listStyle: 'none',
   minWidth: '200px',
   color: '#333',
   margin: '0',
   padding: '0',
   top: '100%',
   left: '0',
   display: 'none',
   zIndex: '100',
   boxShadow: '1px 2px 6px rgba(0,0,0,.1)',
   borderTop: '3px solid #ffc938'

}))
const SubmenuList = styled('li')(() => ({
   borderBottom: '1px solid #f2f0f0',
   ':hover': {
      background: '#ffc938',
   },
   ':last-child': {
      borderBottom: "0px"
   }

}))
const SubmenuLink = styled(Link)(() => ({
   textDecoration: 'none',
   padding: '10px 20px',
   display: 'inline-block',
   color: '#333'
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

