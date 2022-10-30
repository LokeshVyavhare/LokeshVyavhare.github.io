import GitHubCalendar from 'react-github-calendar'
import { Box, Flex, Heading } from '@chakra-ui/react'

const style = {
    lvl0: {

    },
    lvl1: {
        m:'100px auto',
        w:'80%',
        direction:['column'],
        align:'center'
    },
    box1:{
        boxShadow:'lg',
        m:'25px auto',
        p:'25px 35px'
    },
    box2:{
        boxShadow:'lg',
        m:'25px auto',
        p:'25px 35px'

    },
    heading:{

    },
    subHeading:{

    }
}
const url = {

}

export const GitHub = () => {

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
    

    return <Flex {...style.lvl1}>
        <Heading {...style.heading}>Github Statistics</Heading>
        <Box {...style.box1}>
            <img src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=LV-23&theme=default"/>
            <GitHubCalendar username="LV-23" transformData={selectLastHalfYear} style={{ width: '100%', margin: '25px auto' }}></GitHubCalendar>
        </Box>
        <Flex  {...style.box2}>
        <img src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=LV-23&theme=default" mr='25px'/>
        <img src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=LV-23&theme=default&utcOffset=8" />
        </Flex>
    </Flex>
}