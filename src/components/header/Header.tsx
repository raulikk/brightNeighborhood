import { Box, HStack, Image,Text, Stack, Flex } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'

const Header = () => {
  return (
    <Box position="fixed" w="100%" bg="rgba(255, 255,255,0.5)" zIndex="9999"  padding="20px 10%"> 
   

     <NavBar /> 
    
  
    </Box>
  )
}

export default Header