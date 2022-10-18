import {
    Box,
    Text,
    Flex,
    Image,
} from '@chakra-ui/react';
import { Ham } from './Hamburger';
import {ThemeContext} from '../contexts/ThemeContext';
import { useContext } from 'react';


const styles={
        main:{
            w:{base:'100%'},
            bg:'#000',
            color:"#fff",
            p:["15px 30px", "15px 35px", "15px 5px", "15px 50px"],
            position:'sticky',
            top:'0',
            zIndex:'5'
        },
        theme_button:{
                w:'50px',
                h:'50px',
                justify:'space-evenly',
                align:'center',
                mx:'20px',
        },
        tabs:{
            mx:'20px',
            cursor:'pointer',
            className:'tab_nav',
        },
        profile:{
            borderRadius:'50%',
            p:'2px',
            border:'1px solid grey'
        },
        nav0:{
            justify:'space-between',
            align:'center',
        },
        nav1:{
            justify:'space-evenly',
            align:'center',
            display:{base:'none', sm:"none", md:"flex", lg:"flex"}
        },
        nav2:{
            justify:'space-evenly',
            align:'center',    
        },
        trigger:{
            display:["block", "block", "none"]
        }

}


export const Nav = () => {
    const ThemeToken = useContext(ThemeContext);

    const {theme, toggleTheme} = ThemeToken;

    return<Box {...styles.main}>

        <Flex  {...styles.nav0}>
            <Flex align='center'><Image w='40px' h="40px" src="https://img.icons8.com/doodle/2x/cottage.png" /><Text {...styles.tabs}>Home</Text></Flex>
            <Flex {...styles.nav1}>
            
            <Text {...styles.tabs}>About Me</Text>
            <Text {...styles.tabs}>Skills</Text>
            <Text {...styles.tabs}>Projects</Text>
            <Text {...styles.tabs}>Contact</Text>
            <Text {...styles.tabs}>Resume</Text>
            </Flex>

            <Flex {...styles.nav2}>


                <Box title="Change Theme" onClick={()=>{toggleTheme()}}>{theme?<Image {...styles.theme_button}src="https://img.icons8.com/doodle/2x/sun.png" alt='Light' />:<Image {...styles.theme_button} src="https://img.icons8.com/doodle/344/bright-moon--v1.png" alt='dark' />}</Box>
                
                <Image {...styles.theme_button} {...styles.profile} src="https://img.icons8.com/doodle/2x/user.png" alt='Light' />

            </Flex>

            <Box {...styles.trigger}>
                <Ham toggle={()=>{}}/>
            </Box>
            
        </Flex>
    </Box>
}