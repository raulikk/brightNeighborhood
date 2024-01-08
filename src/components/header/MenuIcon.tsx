import {  } from '@chakra-ui/react'
import { Box, Icon, Text } from '@chakra-ui/react'
import { IoMenu } from "react-icons/io5";

const MenuIcon = () => {
  return (
    <Box position={'fixed'} zIndex={9999}  right={0} margin={5}>
    <Icon boxSize={10} as={IoMenu} />
    </Box>
    
  )
}

export default MenuIcon