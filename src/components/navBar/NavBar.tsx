import { Box, HStack, Image,Text, Stack, Flex } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'

const NavBar = () => {
  return (
    <HStack justifyContent="space-between"> 
    <Logo /> 

    <Flex bg="pink" gap="4">
      <Text> Home</Text> 
      <Text> About</Text>  
      <Text> Contact</Text>
    </Flex >  
    

    </HStack>
  )
}

export default NavBar