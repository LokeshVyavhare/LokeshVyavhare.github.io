import {
    Box,
    Text,
    Flex,
    Image,
} from '@chakra-ui/react'


const styles={
        main:{
            w:{base:'100%'},
            bg:'#000',
            color:"#fff",
            p:{base:"30px 50px"},
            position:'sticky',
            top:'0'
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
        },
        profile:{
            borderRadius:'50%',
            p:'2px',
            border:'1px solid grey'
        }

}


export const Nav = () => {
    return<Box {...styles.main}>

        <Flex justify='space-between' align='center'>
            <Flex justify='space-evenly' align='center'>
            <Text {...styles.tabs}>Home</Text>
            <Text {...styles.tabs}>About Me</Text>
            <Text {...styles.tabs}>Skills</Text>
            <Text {...styles.tabs}>Resume</Text>
            <Text {...styles.tabs}>Contact</Text>
            <Text {...styles.tabs}>Resume</Text>
            </Flex>
            <Flex>
                <Image {...styles.theme_button}src="https://img.icons8.com/doodle/2x/sun.png" alt='Light' />
                <Image display='none' {...styles.theme_button} src="https://img.icons8.com/doodle/344/bright-moon--v1.png" alt='Light' />
                <Image {...styles.theme_button} {...styles.profile} src="https://img.icons8.com/doodle/2x/user.png" alt='Light' />

            </Flex>
        </Flex>
    </Box>
}