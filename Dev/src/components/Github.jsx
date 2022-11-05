import GitHubCalendar from 'react-github-calendar'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { Colors } from '../styles/colors';
import {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'

const style = {
    lvl0: {

    },
    lvl1: {
        m:'100px auto',
        w:['100%', '90%','80%'],
        direction:['column'],
        align:'center'
    },
    box1:{
        boxShadow:'lg',
        m:'25px auto',
        p:'35px 35px',
        borderRadius:'20px'
    },
    box2:{
        boxShadow:'lg',
        m:'25px auto',
        p:'25px 35px',
        borderRadius:'20px',
        direction:['column', 'column', 'column', 'row']
        
    },
    heading:{
        mt:['25px', '40px', '55px'],
        pb:'35px'
    },
    subHeading:{

    }
}
const url = {

}

export const GitHub = () => {
    const color = Colors();

    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };
      const theme_ = useContext(ThemeContext);
      const {theme} = theme_


    return <Flex {...style.lvl1} >
        
        <Heading {...style.heading} color={color.ch}>GITHUB STATISTICS</Heading>
        <Box {...style.box1} bg={color.bg2}>
            <img src={"http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=LV-23&theme="+(theme?'default':'tokyonight')}/>
            <GitHubCalendar username="LV-23" transformData={selectLastHalfYear} style={{ width: '100%', margin: '25px auto' }}></GitHubCalendar>
        </Box>
        <Flex  {...style.box2} bg={color.bg2}>
        <img src={"http://github-profile-summary-cards.vercel.app/api/cards/stats?username=LV-23&theme="+(theme?'default':'tokyonight')} mr='25px'/>
        <img src={"http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=LV-23&theme="+(theme?'default':'tokyonight')} />
        </Flex>
    </Flex>
}