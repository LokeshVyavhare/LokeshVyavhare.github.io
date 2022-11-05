import { Box, Grid, Heading, Flex, Text, Image, Tag, TagLabel } from '@chakra-ui/react'
import {data} from '../data/Projects'
import { ProjectCard } from './ProjectCard';
import { Colors } from '../styles/colors';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AddRef } from '../Store/Scroll/scroll.action';

const style = {
    lvl0: {
        w: '100%',
        pt: '100px'

    },
    lvl1: {
        w: '100%',
    },

    lvl2: {
        p: ["5px",'30px 20px'],
        m: "auto",
        w: ["100%", "95%", "90%", "87%", "85%"],

    },
    heading: {
        mb:'50px',
        textAlign:'center'
    },
    grid:{
       gap:'2%'
    }
}

export const Projects = () => {
    const color = Colors();
    const ThisRef = useRef(null);
    const dispatch = useDispatch();
    dispatch(AddRef({key:'projectScroll', ref:ThisRef}))
    return <Box {...style.lvl0} ref={ThisRef}>

        <Box {...style.lvl1}>
            <Box {...style.lvl2} >
            <Heading {...style.heading} color={color.ch}>MY PROJECTS</Heading>

                <Grid {...style.grid}>
                    {data.map((i, e)=>
                        <ProjectCard key = {e+'projectcard'} data={i} id={e} />
                    )}
                    
                </Grid>
            </Box>

        </Box>
    </Box>
}