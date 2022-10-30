import { Box, Grid, Heading, Flex, Text, Image, Tag, TagLabel } from '@chakra-ui/react'
import {data} from '../data/Projects'
import { ProjectCard } from './ProjectCard';


const color = {
    bg_color1: "#eee",
    bg_color2: "#fff",
    bg_color3: "#ddd",
    color1: "#000",
    color2: "grey",
    color3: "#fff",
    color4: "#ddd",
    color5: "#333",

};

const style = {
    lvl0: {
        w: '100%',
        pt: '100px'

    },
    lvl1: {
        w: '100%',
        bg: 'radial-gradient(circle at 50% 50%, #dddddd, #dedede, #e0e0e0, #e3e3e3, #e7e7e7, #ebebeb, #efefef, #f3f3f3, #f7f7f7, #fafafa, #fcfcfc, #fdfdfd)'    },

    lvl2: {
        p: ["5px",'30px 20px'],
        m: "auto",
        w: ["100%", "95%", "90%", "87%", "85%"],

    },
    heading: {
        // fontFamily: "'Silkscreen', cursive",
        textDecoration:"underline",
        fontWeight: '1000',
        mb:'50px'
    },
    grid:{
       gap:'2%'
    }
}

export const Projects = () => {
    return <Box {...style.lvl0}>

        <Box {...style.lvl1}>
            <Box {...style.lvl2} >
                <Heading {...style.heading}>
                    My Projects
                </Heading>

                <Grid {...style.grid}>
                    {data.map((i, e)=>
                        <ProjectCard key = {e+'projectcard'} data={i} id={e} />
                    )}
                    
                </Grid>
            </Box>

        </Box>
    </Box>
}