import { HStack, VStack, Flex, Stack, Image, Box, Heading, Text, Accordion, AccordionButton,AccordionItem,AccordionPanel, AccordionIcon, SimpleGrid, } from '@chakra-ui/react'
import React from 'react'
import aboutImage from "../../assets/img/economics.webp"
const AboutPage = () => {
    
    const aboutContent= { 
        paragraphs : [ 
            {id:1 ,
            heading: "Mission", 
            text: `The Mission of the Bright Neighborhood Community Development Corporation is to build community and enhance the quality of life for underserved residents. We are a place-based community development organization serving primarily low-income neighborhoods. We are a community development organization with many roles - as neighborhood advocates, organizers and planners, and economic developers. 

            We believe in a comprehensive vision of community, a quality environment, a healthy neighborhood economy, and active voluntary associations. We are committed to the empowerment of low-income residents, diversity and coalition building, and social and economic justice.
            `
        }, 

        {id:2 ,
            heading: "Values",   
            text: "The values of respect, compassion, empowerment, and teamwork represent the core principles we stand for and believe in at Bright Neighborhood CDC. Ours is a place-based organization that treats each person with compassion and respect. We build a powerful coalition of advocates and supporters who contribute their own voices in the community. We strengthen community through teamwork and encourage people to learn, and to share ideas and knowledge across all communities and within Bright Neighborhood CDC."
        },

        {id:3 ,
        heading: "Environment",   
            text: ` 
            Established in 2020, Chicago Water Alliance(CWA) seeks to advocate for clean and affordable water in low-income neighborhoods. Also, we would like to create economic and job-creating potential while urging greater care of our precious supply of water. 
            `
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
                        <Heading color="#F4A460" > {paragraph.heading}</Heading>
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