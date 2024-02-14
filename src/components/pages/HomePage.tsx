import { VStack, Center, Box,Image,Text, Heading, Icon, Button, } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import CardList from '../CardList'
import neighborhoodImg from "../../assets/img/environment.webp" ; 
import { FaAnglesRight } from "react-icons/fa6";
const HomePage = () => {
  return (
    <VStack  > 
        
   
    <Center h="80vh" w="100%" position="relative" > 
    
    
    <Box  
    background="rgba(244,164,96,0.6)" 
    padding={{
      xl:"50px",
      lg:"25px",
      md:"25px", 
      sm:"25px", 
      base:"10px"
    }}
    margin={{
      xl:"inheirt",
      base:"10px"
    }}
    zIndex={20}>
      <Heading 
        size={{
          xl:"4xl", 
          base:'3xl'
        }} 
            
        color="white"> We Are In This Together</Heading>
    </Box>
    <Box position="absolute" w="100%" h="100%" bg="orange" opacity="0.2" zIndex={10}> </Box>
    <Box  h="80vh" position="absolute" w="100%" overflow="hidden" >
      <Image src={neighborhoodImg} 
        objectFit="cover"
        h="80vh"
        w="100%"
      />     
    </Box>

      

    <Box 
    bg="rgba(244,244,244,0.53)" 
    minW="5rem"
     
    zIndex={10}
    position="absolute" 
    padding={{
      xl:"20px",
      lg:"10px",
      md:"10px",
      sm:"10px",
      base:"10px"
    }}
    right={{
      xl:"30px",
      lg:"10px",
      md:"10px", 
      sm:"10px",
      base:"0px"
    }} 
    bottom={{
      xl:"20px",
      base:"10px"
    }}
    borderRadius="25" 
  > 
      <VStack   alignItems="left"> 
          <Text fontSize={{
            xl:"1.3rem",
            base:"1.3rem"
          }}>event:</Text>
          <Heading 
          size={{
            xl: "2xl",
            lg:"lg",
            md:"lg",
            sm:"lg",
            base:"lg"
          }}
          color={"black"}
          >Lead In Water & The Solution</Heading>
          <Text 
          fontSize={{
            xl:"1.5rem",
            lg:"1.4rem", 
            md:"1.4rem", 
            sm:"1.4rem",
            base:"1.4rem"
          }} 
          fontWeight={600}>February 28th, 5pm-6pm</Text>
       
          
          <Button 
          as={Link} 
          to={"/events"} 
          alignSelf="end"   
          borderRadius="25px"  
          variant='outline' 
          _hover={{ border:"1px solid coral", color:"orange"}}> 

            <Text fontSize="1.0rem">More</Text>
            <Icon as={FaAnglesRight} />
          </Button>
    
      </VStack>
    </Box>
    </Center>
   

    <CardList />   







    </VStack>
  )
}

export default HomePage