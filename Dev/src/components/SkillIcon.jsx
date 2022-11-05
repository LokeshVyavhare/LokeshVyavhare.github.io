import { Box, Text, Image } from "@chakra-ui/react"
import { Icon } from '@chakra-ui/react'
import *as MDICONS from 'react-icons/md'
import *as FaICONS from 'react-icons/fa'
import *as SiICONS from 'react-icons/si'
import *as TbICONS from 'react-icons/tb'
import *as AiICONS from 'react-icons/ai'
import *as DiICONS from 'react-icons/di'
import { useSelector } from "react-redux"
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { useState } from "react"

const style={
    lvl0:{
        w:'100px',
        h:'100px',
        p:'20px',
        m:'auto',
        position:'relative',
        overflow:'hidden'
    },
    lvl1:{

    },
    icon:{

    }, 
    title:{

    },
    iconName:{
        fontSize:'18px',
        color:'#111111',
        fontWeight:'700'
    }
}

const iconSet = {
    'Fa':FaICONS,
    '':FaICONS,
    'Si':SiICONS,
    'Tb':TbICONS,
    'Ai':AiICONS,
    'Di':DiICONS,
}

export const SkillIcon = ({data}) => {

    const theme_ = useContext(ThemeContext);
    const {theme} = theme_

    const [status, setStatus] = useState(false);

    const {img, img1, type, name} = data
    const url = !theme?'https://i.postimg.cc/YS6t04PD/icon.gif':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjey5hvwmSmYI5QlmADv_4-1belSNMZxYDGg&usqp=CAU';


    return <Box {...style.lvl0} backgroundImage={`url(${url})`} className='icon'

            onMouseEnter={()=>{
                setStatus(true)
            }}
            onMouseLeave={()=>{
                setStatus(false)
            }}
            onClick = {(()=>{
                setStatus(!status);
            })}>
            
            
            
            {type==='img'?<Image src={theme?img1:img}/>:<Icon as={iconSet[type][img]} w={55} h={55}  color={theme?'#000000':'rgb(252,252,252, 0.8)'}/>}


            {status?<Box className='iconName' display={'flex'}>
                <Text className="icontext">{name}</Text>
            </Box>:null}
        </Box>
}