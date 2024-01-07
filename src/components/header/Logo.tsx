import { Box, Center,Image,  Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../../assets/logo/bnIconColor.svg"; 

const Logo = () => {
  return (
    <Center> 
      <Image boxSize="120px" src={logo} /> 
    </Center>
  )
}

export default Logo