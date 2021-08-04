import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Image,
  Box,
} from '@chakra-ui/react';
  
import { 
  ABOUT_PAGE_SUBTITLE,
  ABOUT_PAGE_TEXT,
} from '../constants';
import Header from '../components/header';
import Footer from '../components/footer';


  export default function CallToActionWithIllustration() {

    return (
      <Box>
        <Header/>
        <Container maxW = {'5xl'}>
          <Stack
            textAlign = {'center'}
            align     = {'center'}
            spacing   = {{ base: 5}}
            py        = {{ base: 10, md: 18 }}>
            <Heading
              fontWeight = {600}
              fontSize   = {{ base: '4xl', md: '5xl' }}
              lineHeight = {'110%'}>
                About{' '}
              <Text as = {'span'} color = '#FF006B' fontWeight = {800}>
                forward
              </Text>
              <Text as = {'span'} color = '#FF006B' fontWeight = {10}>
                43
              </Text>
            </Heading>
            <Text color = {'gray.600'} maxW = {'3xl'} >
              {ABOUT_PAGE_SUBTITLE}
            </Text>
            <Flex w = {{base: '90%', md: '50%'}}>
              <Image src = "images/thoughts.svg"/>
            </Flex>
            <Text 
              maxW     = {'4xl'} 
              align    = "left" 
              fontSize = {'xl'} 
              style    = {{ whiteSpace: 'pre-wrap' }}
            >
              {ABOUT_PAGE_TEXT}
            </Text>
          </Stack>
        </Container>

        <Footer/>
      </Box>
    );
  }
  