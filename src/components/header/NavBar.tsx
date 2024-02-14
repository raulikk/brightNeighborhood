import { Flex ,Text, Box, Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink, useLocation} from "react-router-dom"; 



interface Props { 

  visibility: boolean; 
  onClick: () => void; 

}

const NavBar = ({visibility, onClick}: Props) => {


  const navRoutes = [ 
    {id:1, name:"Home", to:"/"},
    {id:3, name:"Events", to:"/events"},
    {id:2, name:"About", to:"/about"},
    {id:3, name:"Contact", to:"/contact"},
    ]

  
    const location = useLocation();
    console.log(location)
  return (<Flex  
    transform= { 
      { 
     xl:"inherit",
     lg:" inherit",
     md:visibility ? "translateY(0)" : "translateY(-100vh)",
     sm: visibility ? "translateY(0)" : "translateY(-100vh)",
     base: visibility ? "translateY(0)" : "translateY(-100vh)"
      }}

    bg= {{ 
    xl:"inherit", 
    lg:"inherit",  
    md:  "#F4A460",
    sm:"#F4A460",
    base:"#F4A460"


    }}
    
     position="fixed" 
     h= {{ xl: "inherit", 
  
     lg:"inherit", 
     md: "100vh",
     sm:"100vh", 
     base:"100vh"}} 
     w="100vw"
     
    alignContent= {{ 
      xl:"inherit", 
      lg: "inherit", 
      md: "center",
      sm: "center",
      base: "center"
    }}
    justifyContent= {{ 
      xl:"end",
      lg:"end", 
      md:"center", 
      sm:"center", 
      base:"center"

    }}
    overflow=   {{
      xl:"inherit", 
      lg:"inherit", 
      md:"scroll",
      sm:"scroll",
      base:"scroll"

     }} 
    padding={{ 
    
      lg:"1rem 5.5rem",
      md:"9rem 0", 
      sm:"9rem 0", 
      base:"9rem 0"
   
    }}         
     > 


      <Flex 
      direction={{
        xl:"row", 
        lg: "row",  
        md:"column", 
        sm:"column", 
        base:"column"
      }}
      alignItems="center"
      gap={6}>  

      {navRoutes.map( route => ( 

    <ChakraLink  as={ReactRouterLink}  
    key={route.id} 
    to={route.to}
    
    onClick={onClick}

    _hover={
     
      { textDecoration: "none"}}
    > 

<Box padding="10px 20px" 

bg={ {
  xl: location.pathname===route.to ? "#F4A460": ""  ,
  lg: location.pathname===route.to ? "#F4A460": "" , 
  base: location.pathname===route.to ? "white": "" 
}}

borderRadius="50px"
_hover={ { 
  bg:"coral"
}}
> 
<Text 

fontSize={{ 
  xl:"1rem",
  lg:"1rem", 
  md: "3rem",
  sm:"3rem",
  base:"2rem"

}}
 
fontFamily="Raleway" 
fontWeight="regular"
color="black"

 > {route.name}</Text>
  </Box>
    </ChakraLink>

      ))}



      </Flex>
  
    </Flex> )
}

export default NavBar