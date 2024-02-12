import {Card, CardHeader,CardBody,CardFooter, Stack, Heading, Text, Image, HStack, Icon, Divider, VStack, Button, Flex } from "@chakra-ui/react"
import Temporary from '../assets/img/environment.webp'
import { FaLocationDot } from "react-icons/fa6";
import { SiEventbrite } from "react-icons/si";

const EventItem = () => {
  return (
    <Card bg="#F4A460"  
    overflow="hidden"
    minWidth={"20rem"}
    maxWidth={"40rem"}
    borderRadius={"25px"}
    > 
    <CardBody padding={0}> 
        <Image src={Temporary} overflow="hidden"   />
    <Stack padding="10px"> 
        <Heading   
            size={{
                xl:"lg",
                lg:"lg",
                sm:"xl", 
                base:"lg"
            }}
       > Lead In Water & The Solution 
       </Heading>
        <Text 
        fontSize={{
            xl:"2rem",  
            lg:"1.5rem",
            md:"1.3rem",
            sm:"1.2rem", 
            base:"1.5rem" 
        }}
        >February 28th, 5pm- 6pm </Text>
        <HStack> 
            <Icon as={FaLocationDot} />
            <Text> 8560 South Cottage Grove Avenue Chicago, IL 60619</Text>
        </HStack>
        <Divider  />
        <CardFooter padding="10px" > 
           <Flex w="100%"  justifyContent={"end"}> 
                <HStack> 
                   
                    <Button 
                        bg="none"  
                        border="1px solid white"
                        borderRadius={"25px"
                    }
                    > Learn More 
                        <Icon as={SiEventbrite}  marginLeft="5px" />
                    </Button>
                </HStack>
            </Flex>


        </CardFooter>
    </Stack>


        </CardBody>


    </Card>
  )
}

export default EventItem