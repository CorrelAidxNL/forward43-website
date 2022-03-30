import React from "react";
import {
    Box,
    Flex,
    Stack,
    Text,
  } from '@chakra-ui/react';
  
  
  export default function Footer() {
    return (
      <Flex
        bg    = "#3A3A3A"
        color = "white"
        width = {"full"}
        >
        <Box
          flex      = {1}
          as        = {Stack}
          py        = {1}
          width     = "100%"
          direction = {{ base: 'column', md: 'row' }}
          spacing   = {4}
          justify   = "center"
          align     = {{ base: 'center', md: 'center' }}
        >
          <Text>© 2022 MasterPeace Global</Text>
        </Box>
      </Flex>
    );
  }
  