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

    }} gap="4"  border={"2px solid green"}> 
    
    <EventItem /> 
    <EventItem />   
    <EventItem /> 
    
    
   


    </SimpleGrid>
    <Text> https://www.eventbrite.com/e/lets-discuss-lead-in-our-water-tickets-817558317937?aff=oddtdtcreator</Text>
   
   
   
    </VStack>
  )
}

export default EventPage