import { useState } from 'react';
import { Box, Icon, Text } from '@chakra-ui/react'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

interface Props { 
  visibility : boolean
  onClick : () => void;
}

const MenuIcon = ( {visibility,onClick} : Props) => {

 

  
  return (
    <Box position={'fixed'} zIndex={9999}  right={0} margin={5} 
     onClick={onClick}
    >
    <Icon boxSize={10} as={visibility? IoMdClose : IoMenu} />
    </Box>
    
  )
}

export default MenuIcon