import { Flex, Text, Stack, Image, Heading, Link as ChakraLink } from '@chakra-ui/react'
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

   
    <Image src={footerLogo} h="70px" w="auto"/> 
    
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
    <ChakraLink href='https://www.facebook.com/groups/1044398359989116'  _hover={{textDecoration:'none', color:'white'}}>
    <Text>Facebook</Text>
    </ChakraLink>
    <ChakraLink href='https://twitter.com/brightn2020' _hover={{textDecoration:'none', color:'white'}}>
      <Text >Twitter / X</Text>
    </ChakraLink>
    
    

    </Stack>
   </Flex>
  )
}

export default Footer