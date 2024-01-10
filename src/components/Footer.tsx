import { Flex, VStack, Text, Stack, Image, Box } from '@chakra-ui/react'
import React from 'react'
import Logo from './header/Logo'
import footerLogo from '../assets/logo/bnLogoHorizontal.svg'
const Footer = () => {
  return (
   <Flex
    bg="green"  
    position="relative" 
    direction={{
    lg:"row", 
    md: "column",
    sm:"column",
    base:"column"
   }}  
   
   justifyContent={'space-between'} w="100vw" h="250px">
    

    <Box position="absolute" left="20px" border="1px solid gray" padding="5px" > 
    <Text>Move Up  </Text>  </Box> 
    <Image src={footerLogo} h="70px" w="auto" position="absolute" border="2px solid coral" top="50px"  left="10px"/> 
    <Stack > 



    </Stack>
   </Flex>
  )
}

export default Footer