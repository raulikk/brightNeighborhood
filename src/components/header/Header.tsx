import { Box, Show } from '@chakra-ui/react'
import { useState } from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import MenuIcon from './MenuIcon'

const Header = () => {
   
  const  [menuVisibility, setMenuVisibility] = useState(false)


  return (
    <Box position="fixed" h="90px" w="100%" bg="rgba(255, 255,255, 0.5)" zIndex="99"   
   
    > 
   
    <Logo menuOn={menuVisibility} /> 
    <NavBar visibility={menuVisibility} onClick= {() => setMenuVisibility(false)} /> 
    
  <Show below='lg'>
    <MenuIcon  visibility={menuVisibility} onClick={() => setMenuVisibility(!menuVisibility)} /> 
  </Show>  
    </Box>
  )
}

export default Header