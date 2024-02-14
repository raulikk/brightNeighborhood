import React from 'react'
import { SimpleGrid, Text, VStack, Box } from '@chakra-ui/react'
import EventItem from '../EventItem'

const EventPage = () => {
  return (
     <VStack margin={
      {
        xl: "80px 40px", 
      }

     }
     padding={{
      base:"1rem"
     }}
     
     > 
    <SimpleGrid columns={{
      xl: 3,
      lg:3, 
      md:2, 
      sm: 1, 
      base:1

    }} gap="4" > 
    
    <EventItem /> 
    
 
    
    
   


    </SimpleGrid>
   
   
   
   
    </VStack>
  )
}

export default EventPage