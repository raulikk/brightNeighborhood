import { Flex ,Text, HStack, Box, Stack } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import { wrap } from 'framer-motion'
const NavBar = () => {
  return (<Flex  
    
    bg="green" 
     opacity="1.2" 
     position="fixed" 
     h="100vh" 
     w="100vw"
    alignContent="center"
    justifyContent="center"
    overflow="scroll"
    paddingTop="9rem"         
     > 


      <Flex bg="coral" direction="column" alignContent="center" gap={6}>  
        <Text fontSize="2rem"> Home </Text>
        <Text fontSize="2rem"> About </Text>
        <Text fontSize="2rem"> Contact </Text>
      </Flex>
  
    </Flex> )
}

export default NavBar