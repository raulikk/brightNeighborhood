import { Grid, GridItem } from '@chakra-ui/react'

import Main from './components/Main'
import Footer from './components/Footer'
import NavBar from './components/navBar/NavBar'

function App() {


  return (
  
    <Grid  templateAreas={`"nav" "main" "footer"`} w="100vw">
      <GridItem area="nav" bg="coral">
        <NavBar /> 
      </GridItem>
      
      <GridItem area="main" bg="green">
        <Main /> 
      </GridItem>
      
      <GridItem area="footer" bg="yellow">
        <Footer/>
      </GridItem>
  
    </Grid>
   
  )
}

export default App
