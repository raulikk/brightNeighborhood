import { Grid, GridItem, Stack } from '@chakra-ui/react'

import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/header/Header'
import HomePage from './components/pages/HomePage'

function App() {


  return (
  
    <Stack > 

<Header/> 

    <HomePage/> 

    <Footer /> 

    </Stack>
   
  )
}

export default App
