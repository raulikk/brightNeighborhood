import { SimpleGrid, Card, CardBody, Text,Image, Heading, Divider } from '@chakra-ui/react'
import React from 'react'

import educationImg from "../assets/img/education.jpg"
import economicsImg from "../assets/img/economics.jpg"
import environmentImg from "../assets/img/environment.jpg" 

const CardList = () => {
  return (
    <SimpleGrid columns={{ 
        xl: 3,
        lg: 3, 
        md: 2,
        sm: 1,
        
    }}  border="3px solid red" spacing="8"> 
        <Card>
            <CardBody>
            <Image src={educationImg} /> 
            <Heading> Education</Heading>
            <Text> We strongly believe in developing residents  to be agents of change for themselves and their communities. To do this we engage residents in neighborhood discussions on safety, neighborhood planning projects, and public policy measures. We assist residents in developing independent neigborhood associations/block clubs. We support their democratic elections as well as provide trainings for newly-elected  neighborhood associations/block club members. In partnership with Bright Neighborhood CDC’s Organizing Team, we offer grassroots leadership trainings for emerging leaders.</Text>
             </CardBody>
             <Divider /> 
        </Card>

        <Card>
            <CardBody>
            <Image src={economicsImg} /> 
            <Heading> Economics & Arts</Heading>
            <Text>Our goal is to used the Main Street model where we can create a place where people work, live, and play. We know that economic life serves as an entry-point to fulfill the daily needs of local residents, and helps catalyze tourism. Bright Neighborhood CDC’s strategic support revolves around a comprehensive, culturally specific and creative approach that integrates people, place, and storytelling that promotes a healthy, economically and culturally vibrant neighborhood.</Text>
             </CardBody>
             <Divider /> 
        </Card>

        <Card>
            <CardBody>
            <Image src={environmentImg} /> 
            <Heading>Environment</Heading>
            <Text>
            We strongly believe in developing residents  to be agents of change for themselves and their communities. To do this we engage residents in neighborhood discussions on safety, neighborhood planning projects, and public policy measures. We assist residents in developing independent neigborhood associations/block clubs. We support their democratic elections as well as provide trainings for newly-elected  neighborhood associations/block club members. In partnership with Bright Neighborhood CDC’s Organizing Team, we offer grassroots leadership trainings for emerging leaders.
            </Text>
             </CardBody>
             <Divider /> 
        </Card>





    </SimpleGrid>
  )
}

export default CardList