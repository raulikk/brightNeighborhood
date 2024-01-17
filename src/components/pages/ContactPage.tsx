import { Flex, Stack, Heading, Text,Box } from '@chakra-ui/react'
import React from 'react'

const ContactPage = () => {
  return (
    <Flex direction={{
      xl:"row",
      lg: "row",
      md:"column", 
      sm: "column",
      base:"column"
    }}
     padding="6rem 6rem"> 

    <Stack>
      <Heading> Contact us </Heading>

      <Text> phone: 989999--9999</Text>
      <Text> email: brightNeighborhood@gmail.com</Text>

      <Text maxW="60ch"> This temporary camp, where the tents have retractable roofs for stargazing, is a luxurious placeholder for a more permanent property from the operator Wilderness that is due to open in 2026.Mainly I need  about and the mission parts , these are the most important sections.  All they care is  What is Bright Neighborhood and What it does Mainly I need  about and the mission parts , these are the most important sections.  All they care is  What is Bright Neighborhood and What it does </Text>

    </Stack>
    
    
    <Box boxSize={100}  bg="coral"> 
      
    </Box>      
    </Flex>
  )
}

export default ContactPage