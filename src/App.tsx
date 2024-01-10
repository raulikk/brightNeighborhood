import { Grid, GridItem, Stack } from '@chakra-ui/react'

import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/header/Header'

import { Outlet } from 'react-router-dom'

function App() {


  return (
  
    <Stack > 

   <Header/> 

    <Outlet />

    <Footer /> 

    </Stack>
   
  )
}

export default App
