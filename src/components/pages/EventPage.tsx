
import { SimpleGrid,VStack} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const EventPage = () => {
  return (
     <VStack margin={
      {
        xl: "80px 40px", 
      }

     }
     padding={{
      base:"6rem"
     }}
     minH='80vh'
     > 
    <SimpleGrid columns={{
      xl: 3,
      lg:3, 
      md:2, 
      sm: 1, 
      base:1

    }} gap="4" > 
    
   

   <Text>No event currently</Text>
    
 
    
    
   


    </SimpleGrid>
   
   
   
   
    </VStack>
  )
}

export default EventPage