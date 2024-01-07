import { Flex, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from './header/Logo'

const Footer = () => {
  return (
   <Flex justifyContent="space-between" padding="200px 100px">
    <Logo/> 

    <VStack> 
  <Text> Something</Text>
  <Text> Something2</Text>
  <Text> Something3</Text>

    </VStack>

   </Flex>
  )
}

export default Footer