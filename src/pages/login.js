import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

import Header from '../components/header';
import Footer from '../components/footer';

  export default function LoginCard() {
    return (
        <Box 
            display       = "flex"
            minHeight     = "100vh"
            flexDirection = "column"
        >
            <Header/>
            <Box 
                flex    = {1}
                py      = {{ base: 18, md: 18 }}
                align   = {'center'}
                justify = {'center'}
                bg      = {useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing = {8} mx = {'auto'} maxW = {'lg'} py = {12} px = {6}>
                <Stack align = {'center'}>
                    <Heading fontSize = {'4xl'}>
                        Sign in to your account
                    </Heading>
                    <Text fontSize = {'lg'} color = {'gray.600'}>
                        to get acccess to all of the <Link color = '#FF006B'>features</Link>
                    </Text>
                </Stack>
                <Box
                    rounded   = {'lg'}
                    bg        = {useColorModeValue('white', 'gray.700')}
                    boxShadow = {'lg'}
                    p         = {8}
                >
                    <Stack spacing = {4}>
                        <FormControl id = "email" >
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id = "password">
                            <FormLabel>Password</FormLabel>
                            <Input type = "password" />
                        </FormControl>
                        <Stack spacing = {10}>
                            <Stack
                                direction = {{ base: 'column', sm: 'row' }}
                                align     = {'start'}
                                justify   = {'space-between'}
                            >
                                <Checkbox colorScheme = 'pink'>Remember me</Checkbox>
                                <Link color = '#FF006B'>Forgot password?</Link>
                            </Stack>
                            <Button
                                bg     = '#FF006B'
                                color  = {'white'}
                                _hover = {{ bg: '#FF006B', }}
                            >
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
                </Stack>
            </Box>
            <Footer/>
        </Box>
    );
}
