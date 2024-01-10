import { Flex, VStack, Text, Stack, Image, Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Logo from './header/Logo'
import footerLogo from '../assets/logo/bnLogoHorizontal.svg'
const Footer = () => {
  return (
   <Flex
    bg="#F4A460"  
    position="relative"
    
    padding={"2.5rem 20px"}
    direction={{
    lg:"row", 
    md: "column",
    sm:"column",
    base:"column"
   }}  
   
   justifyContent={'space-between'} 
   
   alignItems={{
    md:"start",
    sm:"start", 
    base:"start"

   }}
   
   w="100vw" h="250px">
    
    <Box position="absolute" right="2.5rem" top="0" border="1px solid gray" padding="5px" > 
    <Text>Move Up  </Text>  
    </Box> 
    <Image src={footerLogo} h="50px" w="auto"  border="2px solid coral" bg="white" /> 
    
    <Stack > 
    <Heading > 
        Follow Us 
    </Heading>
    <Text>Facebook</Text>
    <Text>Twitter</Text>
    <Text>Instagram</Text>

    </Stack>
   </Flex>
  )
}

export default Footer