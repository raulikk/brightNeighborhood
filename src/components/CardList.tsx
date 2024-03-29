import { SimpleGrid, Card, CardBody, Text,Image,Heading, Stack, } from '@chakra-ui/react'
import educationImg from "../assets/img/education.webp"
import economicsImg from "../assets/img/economics.webp"
import environmentImg from "../assets/img/environment.webp" 

const CardList = () => {
  const cardsContents= [
     {
    id:1, 
    imageUrl: educationImg ,
    heading: 'Education', 
    text:'We strongly believe in developing residents to be agents of change for themselves and their communities. To do this we engage residents in neighborhood discussions on safety, neighborhood planning projects, and public policy measures. We assist residents in developing independent neigborhood associations/block clubs. We support their democratic elections as well as provide trainings for newly-elected neighborhood associations/block club members. In partnership with Bright Neighborhood CDC’s Organizing Team, we offer grassroots leadership trainings for emerging leaders.'
   }, 

   {
    id:2, 
    imageUrl: economicsImg ,
    heading: 'Economics & Arts', 
    text:'Our goal is to used the Main Street model where we can create a place where people work, live, and play. We know that economic life serves as an entry-point to fulfill the daily needs of local residents, and helps catalyze tourism. Bright Neighborhood CDC’s strategic support revolves around a comprehensive, culturally specific and creative approach that integrates people, place, and storytelling that promotes a healthy, economically and culturally vibrant neighborhood.' ,
   }, 


   {
    id:3, 
    imageUrl: environmentImg ,
    heading: 'Environment', 
    text:'Established in 2020, Chicago Water Alliance(CWA) seeks to advocate for clean and affordable water in low-income neighborhoods. Also, we would like to create economic and job-creating potential while urging greater care of our precious supply of water.' ,
   }
  
  
  

  ]



  return (
    <SimpleGrid 
    columns={{ 
        xl: 3,
        lg: 3, 
        md: 2,
        sm: 2,    
        base:1, 
    }}  
    spacing={{ 
      xl:7,
      lg:3,
      md:5,
      sm:2,
      base:3
    }}
    padding={{
      xl: "3rem 3rem", 
      lg: "2rem 1rem", 
      md: "1rem 1rem", 
      sm: "1rem 1rem", 
      base:"1rem 1rem"
    }}
    > 



    {  cardsContents.map( (content) => (
      <Card key={content.id} bg="#F4A460" overflow='hidden' borderRadius="20px"> 

        <CardBody overflow="hidden" padding='0'> 

          <Image src={content.imageUrl}  w="100%" /> 

          <Stack mt="4" spacing={2} padding='1rem'> 
          <Heading color="white">{content.heading} </Heading>
          <Text fontSize={{
            xl:"1.2rem",
            lg:"1.1rem",
            md:"1.1rem",
            sm:"1rem",
            base:"1rem"
          }}
          >{content.text}</Text>

          </Stack>
    
        </CardBody>
     
          

      </Card>


    )
    
    )}


     

      
        




    </SimpleGrid>
  )
}

export default CardList