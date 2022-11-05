import { Box, Grid, Heading, Flex, Text, Image, Tag, TagLabel, Button, Icon, position, color } from '@chakra-ui/react'
import { BsGithub, BsLink45Deg } from 'react-icons/bs';
import { Colors } from '../styles/colors';


const style = {
    lvl0: {
        p: '15px',
        boxShadow: 'lg',
        borderRadius:'25px'
    },
    lvl1: {
        direction: ['column-reverse', 'column-reverse', 'column-reverse', 'row'],
        p: ["15px"]
    },
    imgBox: {
        w: ['100%', "95%", "90", '60%'],
        h: 'fit-content',
        alignSelf:'center'
        // mb: '35px',
    },
    img: {
        w: ['100%'],
        boxShadow: 'md',
    },
    descBox: {
        direction: 'column',
        w: ['100%', "90%", "85%", "65%"],
        m:'auto',
        justify:"start",
        align:["center","center","center","start",],
        pl: "3%"
    },
    title: {
        mb: '15px',
        p: '5px 15px',
        fontSize: ['25px', '27px', '30px', '35px', '42px'],
        fontWeight: '700',
        textAlign:["center","center","center","left",]


    },
    desc: {
        mb: '15px',
        p: '5px 15px',
        textAlign:["center","center","center","left",]

    },
    genStack: {
        wrap: 'wrap',
        mb: '10px',
        justify:['center','center','center', "start"],

    },
    lagStack: {

    },
    toolStack: {

    },
    gitButton: {
        bg: '#fff',
        boxShadow: '0px 0px 10px 2px grey',
        // mr: ['20px', '30px', '40px', '50px'],
        mb: ["25px","25px","25px","0"],
        mr: ["0","0" ,"0","25px"],
        w: ['200px']
    },
    netButton: {
        bg: '#05a6f3',
        boxShadow: '0px 0px 10px 2px #80808080',
        w: ['200px', '170px']

    }
}

export const ProjectCard = ({ data, id }) => {
    const color = Colors();
    const i = data;
    return <Box {...style.lvl0} bg={color.bg2} data-aos={+id%2===0?'fade-left':'fade-right' }  data-aos-anchor-placement="top-center">
        <Flex {...style.lvl1}>

            <Box {...style.imgBox}>
                <Image {...style.img} src={i.image[0]} />
                <Flex w={"fit-content"} justify='space-evenly' direction={['column', 'column', 'column', 'row']} align={'center'} m='30px auto'>
                    <Button {...style.gitButton}> <a href={i.github} target='_blank'><Icon as={BsGithub} mr='7px' />{'| Github'}</a></Button>
                    <Button {...style.netButton}> <a href={i.deploy} target='_blank'> <Icon as={BsLink45Deg} mr='7px' />| Deployment </a></Button>
                </Flex>
            </Box>

            <Flex {...style.descBox}>

                <Text {...style.title} color={color.cs}>{i.title}</Text>

                <Flex {...style.genStack}>
                    {i.genStack.map((j, f) => <Tag key={f + id + 'genstack'} mr={["5px", "7px", "10px", '15px']} mb={["7px", "10px", "12px", '15px']} size={["md", "md", 'lg']} bg='#05a6f3' color='#fff' borderRadius='10px'>
                        <TagLabel>{j}</TagLabel>
                    </Tag>
                    )}
                </Flex>

                <Text {...style.desc}>{i.desc}</Text>

                <Flex {...style.genStack}>
                    {i.lagStack.map((j, f) => <Tag key={f + id + 'lagstack'} mr={["5px", "7px", "10px", '15px']} mb={["7px", "10px", "12px", '15px']} size={["md", "md", 'lg']} bg='grey' color='#fff' borderRadius='10px'>
                        <TagLabel ml='10px'>{j.t}</TagLabel>
                        <Image w='25px' ml='15px' h='25px' src={j.i} />
                    </Tag>
                    )}
                </Flex>

                <Flex   {...style.genStack}>
                    {i.toolStack.map((j, f) => <Tag key={f + id + 'toolstack'} mr={["5px", "7px", "10px", '15px']} mb={["7px", "10px", "12px", '15px']} size={["sm", "sm", 'md']} bg='#ccc' color='#fff' borderRadius='10px'>
                        <TagLabel ml='10px'>{j.t}</TagLabel>
                        <Image w='25px' h='25px' ml='15px' src={j.i} />
                    </Tag>
                    )}
                </Flex>

            </Flex>
        </Flex>
    </Box>
}