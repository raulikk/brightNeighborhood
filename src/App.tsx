import { Stack,} from '@chakra-ui/react'
import Footer from './components/Footer'
import Header from './components/header/Header'

import { Outlet } from 'react-router-dom'

function App() {


  return (
  
    <Stack > 

   <Header /> 

    <Outlet />
  
    <Footer /> 

    </Stack>
   
  )
}

export default App
