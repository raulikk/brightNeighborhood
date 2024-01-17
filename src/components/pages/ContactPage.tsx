import { Flex, Stack, Heading, Text,Box, Highlight } from '@chakra-ui/react'

const ContactPage = () => {
  return (
    <Flex direction={{
      xl:"row",
      lg: "row",
      md:"column", 
      sm: "column",
      base:"column"
    }}
     padding={{

      base:"5rem 2rem"


     }}
     h="70vh"
     > 

    <Stack>
      <Heading color='#F4A460'> Contact us </Heading>

    
   <Text> <Highlight query="phone" styles={{ px: '2', py: '1', rounded: 'full', bg: '#F4A460' }}> phone: +1 (999)-9999 </Highlight> </Text>
    <Text> 
        <Highlight query="email" styles={{ px: '2', py: '1', rounded: 'full', bg: '#F4A460' }}> 
        email: brightneighborhood@gmail.com
        </Highlight>  
        </Text>

        

      <Text maxW="50ch"> Thank you for visiting our website and learning more about our organization. As  Bright Neighborhood family, we are dedicated to making a positive impact in our community and we couldn't do it without the support of people like you. </Text>

    </Stack>
    
    
    <Box boxSize={100}  > 
      
    </Box>      
    </Flex>
  )
}

export default ContactPage