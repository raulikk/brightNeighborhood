import { VStack, Center, Box, Text,Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CardList from '../CardList'
import neighborhoodImg from "../../assets/img/brightneighborhood.jpg" ; 

const Home = () => {
  return (
    <VStack  > 
        
        <Center position="relative" maxH="90vh" overflow="hidden"> 

          <Center position="absolute" bg="rgba(244,164,96,0.5)" padding="25px"> 
            <Text  fontSize={{
            xl: "7rem",
            lg: "5rem", 
            md:"3rem", 
            sm: "3rem"
            }} color="white" fontFamily="Raleway"> We Are In This Together </Text>  
          </Center>
        <Image src={neighborhoodImg} 
         objectFit='cover'
        />     
        
        </Center> 
 
        <Box padding={{
          xl: '2rem',
          lg: '1rem 1rem', 
          md: '1rem 1rem', 
          sm: '1rem 1rem'
        }}>     
        <CardList />   
        </Box>

      




    </VStack>
  )
}

export default Home