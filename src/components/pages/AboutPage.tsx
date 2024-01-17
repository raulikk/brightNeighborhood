import { HStack, VStack, Flex, Stack, Image, Box, Heading, Text, Accordion, AccordionButton,AccordionItem,AccordionPanel, AccordionIcon, } from '@chakra-ui/react'
import React from 'react'
import aboutImage from "../../assets/img/economics.jpg"
const AboutPage = () => {
    
    const aboutContent= { 
        paragraphs : [ 
            {id:1 ,
            heading: "Who we are( about us)", 
            text: "This temporary camp, where the tents have retractable roofs for stargazing, is a luxurious placeholder for a more permanent property from the operator Wilderness that is due to open in 2026.Mainly I need  about and the mission parts , these are the most important sections.  All they care is  What is Bright Neighborhood and What it does Mainly I need  about and the mission parts , these are the most important sections.  All they care is  What is Bright Neighborhood and What it does "
        }, 

        {id:2 ,
            heading: "What we do ( our mission)",   
            text: "This temporary camp, where the tents have retractable roofs for stargazing, is a luxurious placeholder for a more permanent property from the operator Wilderness that is due to open in 2026.Mainly I need  about and the mission parts , these are the most important sections.  All they care is  What is Bright Neighborhood and What it does Mainly I need  about and the mission parts , these are the most important sections.  All they care is  What is Bright Neighborhood and What it does "
        }],

        
        questions:  [ 
            {id:1} ,
        ]


    }

 
 
 
    return (
    <VStack > 

 
      <Flex direction={{
        xl:"row", 
        md:"column",
        sm:"column", 
        base:"column"
      }}> 
        <Box overflow="hidden" w="100%"> 
        <Image src={aboutImage}    /> 
        </Box> 
        <Stack> 
           { aboutContent.paragraphs.map( (paragraph) => ( 
                <Box key={paragraph.id}>  
                    <Heading > 
                        {paragraph.heading} 
                    </Heading>

                    <Text> 

                        {paragraph.text}
                    </Text>
                
                </Box>


            ) )  
           }
        </Stack>

      </Flex>

 {/* Faq Here */}


        
  



    





    </VStack>
  )
}

export default AboutPage