import { Grid, GridItem, Stack } from '@chakra-ui/react'

import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/header/Header'
import Home from './components/pages/Home'

function App() {


  return (
  
    <Stack > 

    <Header/> 

    <Home/> 

    <Footer /> 

    </Stack>
   
  )
}

export default App
