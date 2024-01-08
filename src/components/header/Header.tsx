import { Box, HStack, Image,Text, Stack, Flex } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import MenuIcon from './MenuIcon'

const Header = () => {
  return (
    <Box position="fixed" h="80px" w="100%" bg="rgba(255, 255,255,0.9)" zIndex="99"  > 
   
    <Logo /> 
    <NavBar /> 
    
     <MenuIcon /> 
    </Box>
  )
}

export default Header