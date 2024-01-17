import { VStack, Center, Box, Text,Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CardList from '../CardList'
import neighborhoodImg from "../../assets/img/brightneighborhood.jpg" ; 

const HomePage = () => {
  return (
    <VStack  > 
        
   
    <Center bg="green" h="80vh" w="100%" position="relative" > 
    
    
    <Box  background="pink" zIndex={20}><Text> We are In the Together</Text> </Box>
    <Box position="absolute" w="100%" h="100%" bg="white" opacity="0.3" zIndex={10}> </Box>
    <Box  h="80vh" position="absolute" w="100%" overflow="hidden" >
      <Image src={neighborhoodImg} 
        objectFit="cover"
        h="80vh"
        w="100%"
          />     
    </Box>


    </Center>




        {/* <Center position="relative" maxH="90vh" overflow="hidden"> 

          <Center position="absolute" bg="rgba(244,164,96,0.5)" 
          
           padding={{
            xl:"25px",
           lg:"25px",
           md:"10px",
           sm: "5px",
           base:"inherit"
           
           
           }}> 
            <Text  fontSize={{
            xl: "7rem",
            lg: "5rem", 
            md:"3rem", 
            sm: "3rem", 
            base:"2rem"
            }} color="white" fontFamily="Raleway"> We Are In This Together </Text>  
          </Center>
      
       <Box h="80vh"
          overflow="hidden"
      
       >   
        <Image src={neighborhoodImg} 
         
         objectFit="cover"
        />     
         </Box>
        </Center> 
 
        <Box padding={{
          xl: '2rem',
          lg: '1rem 1rem', 
          md: '1rem 1rem', 
          sm: '1rem 1rem'
        }}>     
        <CardList />   
        </Box> */}

      




    </VStack>
  )
}

export default HomePage