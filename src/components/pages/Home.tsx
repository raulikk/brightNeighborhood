import { VStack, Center, Box, Text,Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CardList from '../CardList'
import neighborhoodImg from "../../assets/img/brightneighborhood.jpg" ; 

const Home = () => {
  return (
    <VStack border="3px solid purple"  > 
        
        <Center position="relative" maxH="90vh" overflow="hidden"> 

            <Center position="absolute" bg="rgba(244,164,96,0.5)" padding="25px"> 
            <Text  fontSize="7rem" color="white" fontFamily="Raleway"> We Are In This Together </Text>  
            </Center>
        <Image src={neighborhoodImg} 
         objectFit='cover'
        />     
        
        </Center> 
        
        <Box padding="20px 100px">     
        <CardList />   


        </Box>

      




    </VStack>
  )
}

export default Home