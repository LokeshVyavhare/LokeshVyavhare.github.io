import { Box, Heading } from "@chakra-ui/react"
import {About} from '../components/About'
import { Projects } from "../components/Projects"
import { GitHub } from "../components/Github"

export const Home = () =>{
    return <Box minH='100vh'>
            <About />
            <Projects/>
            <GitHub/>
        </Box>
}