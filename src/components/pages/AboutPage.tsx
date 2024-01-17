import { HStack, VStack, Flex, Stack, Image, Box, Heading, Text, Accordion, AccordionButton,AccordionItem,AccordionPanel, AccordionIcon, SimpleGrid, } from '@chakra-ui/react'
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
    <VStack position="relative" marginTop={{
        xl:"90px",
        lg: "80px", 
        md: "inherit",
        sm:"inherit",
        base:"inherit"

    }}
     
     padding={{
        xl:"0 5rem",
        lg:"0 4rem",
        md:"inherit", 
        sm:"inherit"
     }}
     > 

       <SimpleGrid columns={{
        xl:2,
        lg:2, 
        md:1,
        sm:1,
        base:1
       }} 
       
       spacing={1}> 

            <Box bg="50"> 
            <Image src={aboutImage} /> 
            </Box>

            <VStack  padding="1rem">
               {
                aboutContent.paragraphs.map( (paragraph) => (
                    <Box key={paragraph.id}  maxW="50ch"> 
                        <Heading > {paragraph.heading}</Heading>
                        <Text> {paragraph.text}</Text>
                    </Box> 


                ))


               }
            </VStack>
        
        </SimpleGrid> 

          
    



        
  



    





    </VStack>
  )
}

export default AboutPage