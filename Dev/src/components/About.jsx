import { Box, Button, Heading, Text, Image, Flex } from '@chakra-ui/react'
import React from 'react';
import { Colors } from '../styles/colors';
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { AddRef } from '../Store/Scroll/scroll.action';




const style = {

    about: {
        lvl0: {
            w: '100%',
            pt: '100px'

        },
         lvl01: {
            w: ['100%','100%','95%','90%' ],
            m: 'auto',
            borderRadius: '25px'
        },
        lvl1: {
            p: '30px 50px',
            align: "center",
            // bg: color.bg6,
            justify: "space-between",
            align: 'center',
            direction: ["column", "column", "column", "row-reverse", "row-reverse"],
            m: "auto",
            w: ["100%"],

            // border:'10px solid',
            // borderColor:['red', 'orange', 'yellow', 'green', 'blue']
        },
        txtBox: {
            w: ["100%", "90%", "85%", "60%"],

        },
        picBox: {
            borderRadius: "25% 15% 25% 15%",
            p: '5px',
            bg: 'radial-gradient(circle at 50% 50%, #6cd4dd, #6fd5de, #78d7e0, #85dbe3, #94e0e7, #a3e5eb, #b3eaf0, #c1eff4, #cef3f7, #d8f7fa, #dff9fc, #e1fafd)',
            w: { base: "300px" },
            mb: '35px',
            boxShadow: 'md'
        },
        image: {
            borderRadius: "25% 15% 25% 15%"
        },
        heading0: {
            textAlign: ["center"],
            m: "0 auto",
            py: '25px'
        },
        heading1: {
            fontSize: "42px",
        },
        heading2: {
            fontSize: '32px',
        },
        desc: {
            fontSize: '16px',
            pb: '45px',
            textAlign: 'justify',
        },
        buttonBox: {
            w: '100%',
            m: "15px auto",
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: "center",


        },
        buttonA: {
            border: '1px solid #ffffff',
            boxShadow: 'md',


        },
    }
}


export const About = () => {
    const color = Colors();
    const ThisRef = useRef(null);
    const dispatch = useDispatch();
    dispatch(AddRef({ key: 'aboutScroll', ref: ThisRef }))


    return <Box {...style.about.lvl0} ref={ThisRef}>

        <Heading  {...style.about.heading0} >
            <Text {...style.about.heading1} color={color.ch}>ABOUT ME</Text>
        </Heading>
        {/* bg={color.bg2} */}
        <Box {...style.about.lvl01}  data-aos='fade-up'>
            <Flex {...style.about.lvl1} >

                <Box  {...style.about.picBox}>
                    <Image src='https://avatars.githubusercontent.com/u/107460761?v=4' {...style.about.image} />
                </Box>

                <Box {...style.about.txtBox} >
                    <Text {...style.about.desc} /*color={color.color2}*/>
                        Mern Stack Developer. Expert in creating user-priotized UI and optimum Frontend. Also have excellence in Backend with Node, express and MongoDB.
                        Problem solving mindset, hustler and lifelong learner. Good with communication and interested in work collaborative projects.
                    </Text>

                    <Box {...style.about.buttonBox} className='req'>
                        <Button {...style.about.buttonA} className='light_skyblue_button'>Linkedin</Button>
                        <Button {...style.about.buttonA} className='dark_skyblue_button'>Github</Button>
                    </Box>
                </Box>



            </Flex>

        </Box>
    </Box>
}