import React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import theme from './theme.ts'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import router from "./routing/routes.tsx"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
         <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
     <RouterProvider router={router}> 
      
      </RouterProvider>   
    </ChakraProvider>
  </React.StrictMode>,
)
