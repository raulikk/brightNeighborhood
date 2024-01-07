import { Flex ,Text, HStack } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
const NavBar = () => {
  return (  
   

    <HStack justifyContent="space-between" > 
     <Logo /> 

   <Flex bg="pink" gap={5}>
    <Text> Home</Text> 
    <Text> About</Text>  
    <Text> Contact</Text>
  </Flex >  
  </HStack>
    )
}

export default NavBar