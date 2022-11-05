import { Box, Heading } from "@chakra-ui/react"
import {About} from '../components/About'
import {HerOCover} from '../components/HerOCover'
import { Projects } from "../components/Projects"
import { GitHub } from "../components/Github"
import { SkillSet } from "../components/SkillsSet"
import { Contact } from "../components/Contacts"

export const Home = () =>{
    return <Box minH='100vh'>
            <About />
            <Projects/>
            <GitHub/>
            <SkillSet/>
            <Contact />
        </Box>
}