import { Flex ,Text, HStack, Box, Stack } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import { wrap } from 'framer-motion'

interface Props { 

  visibility: boolean; 


}

const NavBar = ({visibility}: Props) => {

  return (<Flex  
    transform= {visibility ? "translateY(-100vh )" : "translateY(0)"}
    bg= {{ 
    xl:"inherit", 
    lg:"inherit",  
    md: "rgba(244,244,244,244)",
    sm:"gray",
    base:"gray"


    }}
    
     position="fixed" 
       h= {{ xl: "inherit", 
    lg:"inherit", 
     md: "100vh",
     sm:"100vh", 
     base:"100vh"}} 
     w="100vw"
     
    alignContent= {{ 
      xl:"inherit", 
      lg: "inherit", 
      md: "center",
      sm: "center",
      base: "center"
    }}
    justifyContent= {{ 
      lg:"end", 
      md:"center", 
      sm:"center", 
      base:"center"

    }}
    overflow=   {{
      xl:"inherit", 
      lg:"inherit", 
      md:"scroll",
      base:"scroll"

     }} 
    padding={{ 
    
      lg:"1rem 2.5rem",
      md:"9rem 0", 
      sm:"9rem 0", 
      base:"9rem 0"
   
    }}         
     > 


      <Flex 
      

  
      direction={{
        xl:"row", 
        lg: "row",  
        md:"column", 
        sm:"column", 
        base:"column"
      }}
      alignItems="center"
       gap={6}>  
        <Text fontSize="1rem"> Home </Text>
        <Text fontSize="1rem"> About </Text>
        <Text fontSize="1rem"> Contact </Text>
      </Flex>
  
    </Flex> )
}

export default NavBar