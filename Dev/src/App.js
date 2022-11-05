import './App.css';
import { Nav } from './components/Nav';
import {Home} from './pages/Home'
import {Box} from '@chakra-ui/react'
import { Colors } from './styles/colors';
import { useEffect, useRef } from 'react';
import {HerOCover} from './components/HerOCover'
import Aos from 'aos'
import 'aos/dist/aos.css';

function App() {

  const color = Colors();

  useEffect(()=>{
    Aos.init({duration:300});
  }, []);

  return (<Box bg={color.bg1} color={color.c1} className='App'>
    {/* <Box  w='50px' h='50px' position={'fixed'} top='250px' left={'50px'} zIndex='100' backgroundColor={['red', 'orange', 'yellow', 'green', 'skyblue']}> */}

    {/* </Box> */}
    <HerOCover />
    <Nav/>
    <Home/>
    </Box>
  );
}

export default App;
