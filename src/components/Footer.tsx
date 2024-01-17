import { Flex, Text, Stack, Image, Heading, Icon, HStack } from '@chakra-ui/react'
import { IoIosArrowUp } from "react-icons/io";
import footerLogo from '../assets/logo/brightNeighborhoodHorizontalWhite.svg'
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
    
    <HStack  position="absolute" right="2.5rem" top="-1"  border="1px solid white" color="white"padding="5px" opacity="0.8" > 
    <Text >Move Up  </Text>  
    <Icon as={IoIosArrowUp} />
    </HStack> 
    <Image src={footerLogo} h="70px" w="auto"   /> 
    
    <Stack marginRight={{
      xl:"5rem",
      lg:"5rem", 
      md:"inherit",
      sm:"inherit",
      base:"inherit"
    }}> 
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