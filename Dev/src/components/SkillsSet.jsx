import { Box,
    Grid,
    Heading,
    Text,
 } from "@chakra-ui/react"
import { Colors } from "../styles/colors"
import { skillsData } from "../data/SkillData"
import { SkillIcon } from "./SkillIcon"
import { useRef } from "react";
import {useDispatch} from 'react-redux';
import { AddRef } from '../Store/Scroll/scroll.action';


 const style = {
    lvl0:{
        pb:'50px'

    },
    lvl1:{
        p:'30px 20px',
        w:['97%','92%','85%','80%'],
        m:' 25px auto',
        borderRadius:'25px'
    },
    heading:{
        textAlign:'center',
        mt:['25px', '40px', '55px'],
        pb:"50px",
        size:'2xl'
    },
    subHead:{
        textAlign:'center',
        pb:"30px",
        size:'xl',
        mb:'35px'

    },
    grid:{
        gridTemplateColumns:['1fr 1fr', '1fr 1fr 1fr' ,'1fr 1fr 1fr 1fr'],
        gap:['50px 10px'],
        justify:'space-evenly',
        align:'center',
    }
 }

export const SkillSet = () => {
    const color = Colors();

    const ThisRef = useRef(null);
    const dispatch = useDispatch();
    dispatch(AddRef({key:'skillsScroll', ref:ThisRef}))

    return <Box {...style.lvl0} >
        <Heading {...style.heading} ref={ThisRef} color={color.ch}>My Skills</Heading>

        <Box {...style.lvl1} bg={color.bg2}>
            <Heading {...style.subHead} color={color.cs}>Tech Skills & Languages</Heading>
            <Grid  {...style.grid}>
                {skillsData.hard.map((skill)=><SkillIcon data={skill} />)}
            </Grid>
        </Box>

        <Box {...style.lvl1} bg={color.bg2}>
            <Heading {...style.subHead} color={color.cs}>Tools I know</Heading>
            <Grid  {...style.grid}>
                {skillsData.tools.map((skill)=><SkillIcon data={skill} />)}
            </Grid>
        </Box>
        
    </Box>
}