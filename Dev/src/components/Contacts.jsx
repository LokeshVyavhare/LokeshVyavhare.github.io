import {
    Box,
    Heading,
    Text,
    Flex,
    Button
} from '@chakra-ui/react';
import resume from '../Media/resume.pdf'

import {BsWhatsapp, BsGithub, BsLinkedin} from 'react-icons/bs'
import {MdOutlineMarkEmailRead} from 'react-icons/md'

import { Icon } from '@chakra-ui/react'
import { Colors } from '../styles/colors';

const style = {
    heading:{
        mt:['40px', '55px'],
        pb:'35px'
    },
    lvl0:{

    },
    lvl1:{
        w:['97%','92%','85%','80%'],
        m:'auto',
        p:'25px 35px',
        borderRadius:'25px'
    },
    c1Box:{

    },
    c2Box:{

    }
}


export const Contact = () => {
    const colors = Colors();
    return <Box>

        <Box bg={colors.bg2} {...style.lvl1}>
        <Heading color={colors.cs} {...style.heading} size='xl'>Connect With Me</Heading>
            <Text >Email:- lokeshvyavhare23@gmail.com</Text>
            <Text >Phone:- +91 9405502002</Text>

            <Box display='flex' w='fit-content' m='auto'>
                <a href='https://github.com/LV-23'><Icon as={BsGithub} w='35px'  m='25px 35px'/></a>
                <a href='https://wa.me/9405502002'><Icon as={BsWhatsapp} w='35px' m='25px 35px'/></a>
                <a href='https://www.linkedin.com/in/lokesh-vyavhare-b242b2243/'><Icon w='35px' as={BsLinkedin} m='25px 35px'/></a>
                <a href='mailto:lokeshvyavhare23@gmail.com'><Icon w='35px' as={MdOutlineMarkEmailRead} m='25px 35px'/></a>
            </Box>

        <Heading color={colors.cs} {...style.heading} size='xl'>Get My Resume</Heading>
        <Flex w={['200px', '250px', '300px']} m='auto' className='resume' justify='space-around' align={'center'}>
        <a href="https://drive.google.com/file/d/1zkl4wgyDgXtR7s0FEwTmb-13es4u0AEi/view?usp=share_link" target='_blank'><Button className='button' bg='#00000022' w={['80px', '110px', '120px']}>View</Button></a>
        <a href={resume} download><Button className='button' bg='#00000022' w={['80px', '110px', '120px']}>Download</Button></a>
        
        </Flex>

        </Box>

    </Box>
}