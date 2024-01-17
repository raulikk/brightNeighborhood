import { VStack, Center, Box,Image, Heading } from '@chakra-ui/react'

import CardList from '../CardList'
import neighborhoodImg from "../../assets/img/brightneighborhood2.webp" ; 

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
    <Box position="absolute" w="100%" h="100%" bg="white" opacity="0.3" zIndex={10}> </Box>
    <Box  h="80vh" position="absolute" w="100%" overflow="hidden" >
      <Image src={neighborhoodImg} 
        objectFit="cover"
        h="80vh"
        w="100%"
          />     
    </Box>

    </Center>

    <CardList />   







    </VStack>
  )
}

export default HomePage