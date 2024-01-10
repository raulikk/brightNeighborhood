import { Box, HStack, Image,Text, Stack, Flex, Hide } from '@chakra-ui/react'
import { useState } from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import MenuIcon from './MenuIcon'

const Header = () => {
   
  const  [menuVisibility, setMenuVisibility] = useState(false)


  return (
    <Box position="fixed" h="80px" w="100%" bg="rgba(255, 255,255,0.6)" zIndex="99"  > 
   
    <Logo /> 
    <NavBar visibility={menuVisibility} onClick= {() => setMenuVisibility(false)} /> 
    
  <Hide above='lg'>
    <MenuIcon  visibility={menuVisibility} onClick={() => setMenuVisibility(!menuVisibility)} /> 
  </Hide>  
    </Box>
  )
}

export default Header