import { Box,
    Heading,
    Text,
    Flex,
    Image
 } from "@chakra-ui/react"
import { ThemeContext } from "@emotion/react"
import { useContext, useRef } from "react"
import {useDispatch} from 'react-redux';
import { AddRef } from '../Store/Scroll/scroll.action';

const style = {
    lvl0:{
        w:'100%',
        minH:'90vh',
        boxSizing:'border-box',
        background:'radial-gradient(circle farthest-side at bottom right, #220040, #29023f, #37034e, #6c0570)',
        backgroundSize:'100%',
        zIndex:'-1',
        direction:['column', 'column', 'row', 'row']
    },
    lvl1:{
        w:['80%', '70%','40%','40%'],
        h:'fit-content',
        m:'auto'
    },
    textBox:{
        p:['20px 10px', '40px 10px','70px 10px'],
        textAlign:['center', 'center','left'],
        w:['90%','87%','60%'],
        m:'auto',

    },
    head1:{
        size:'xl',
        mb:['25px','35px','75px']
    },
    head2:{
        size:'xl',
        pl:['0','0','25px'],
        mb:'40px',
    },
    head3:{
        size:['3xl', '3xl', '2xl'],
        pl:['0','0','45px','75px'],
    }
}

export const HerOCover = () => {
    const theme_ = useContext(ThemeContext)
    const {theme} = theme_

    const ThisRef = useRef(null);
    const dispatch = useDispatch();
    dispatch(AddRef({key:'heroImageScroll', ref:ThisRef}))

    return <Flex {...style.lvl0} ref={ThisRef}>
        <Box  {...style.lvl1}>
            <Image src='https://i.postimg.cc/9f7pN7yC/banner.png' w='100%' h='100%'/>

        </Box>
        <Box {...style.textBox}>
            <Text {...style.head1}>#CodeWithCreativity</Text>
            <Heading {...style.head2}>Hello I'm,</Heading>
            <Heading {...style.head3}>Lokesh Vyavhare</Heading>

        </Box>

    </Flex>
}