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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Flex w="100%" justifyContent="center">
            <LinkComponent image="./logo512.png" />
          </Flex>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
