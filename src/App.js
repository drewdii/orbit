import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import LinkComponent from './Components/LinkComponent';
import {AiFillGithub} from 'react-icons/ai'

function App() {

  const links = [
      {url: "https://github.com", icon: <AiFillGithub/>, color1: "gray.200", color2: "blue.400"}
  ]

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Flex w="100%" justifyContent="center">
            <LinkComponent image="./logo512.png" links={index} />
          </Flex>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
