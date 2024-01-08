import { Box, Center,Image,  Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../../assets/logo/bnIconColor.svg"; 

const Logo = () => {
  return (
    <Box  position="fixed" zIndex={999} boxSize={20} margin={2}>
    
    <Image src={logo} /> 

    </Box>
    
  )
}

export default Logo