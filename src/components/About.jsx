import { Box, Button, Heading, Text, Image } from '@chakra-ui/react'

const style = {
    
}


export const About = () => {
    return <Box>
        <Box>
            <Heading><Text>  &#8220; Hello World</Text><Text> I'm Lokesh Vyavhare &#8221;</Text></Heading>
            <Text>I'm Lokesh Vyavhare, software developer in Web Development. Expert in creating user-priotized UI and optimum Frontend. Also have excellence in Backend with Node, express and MongoDB.
                Problem solving mindset, hustler and lifelong learner. Good with communication and interested in work collaborative projects.
            </Text>
            <Button>See My Projects</Button>
            <Button>Github</Button>
        </Box>
        <Box>
            <Image src='https://avatars.githubusercontent.com/u/107460761?v=4'/>
        </Box>
    </Box>
}