import { Box, Button, Heading, Text, Image, Flex } from '@chakra-ui/react'

const color={
    bg_color1:"#eee",
    bg_color2:"#fff",
    bg_color3:"#ddd",
    color1:"#000",
    color2:"grey",
    color3:"#fff",
    color4:"#ddd",
    color5:"#333",

};

const style = {
    
    about:{
        lvl0:{
            mt:'100px',
            p:'50px 20px',
            w:'100%',
            p:'15px 20px'
        },
        lvl1:{
            align:"center",
            justify:"space-between",
            direction:["column","column", "column","row-reverse","row-reverse"],
            m:"auto",
            w:["100%", "95%", "85%", "85%", "70%"],
            // border:'10px solid',
            // borderColor:['red', 'orange', 'yellow', 'green', 'blue']
        },
        txtBox:{
            w:["100%","90%","85","70%","60%"],
            
        },
        picBox:{
            w:{base:"200px"},
            mb:'35px'
        },
        heading0:{
            textAlign:["center", "center", "center", "left", "left"],
            mb:"50px",
            fontFamily:"'Silkscreen', cursive",
        },
        heading1:{
            fontSize:"42px",
            mb:"30px",
        },
        heading2:{
            fontSize:'32px',
        },
        desc:{
            fontSize:'18px',
            mb:'25px',
            textAlign:'justify',
        },
        buttonBox:{
            w:'100%',
            m:"15px auto",
            display:'flex',
            justifyContent:'space-evenly',
            alignItems:"center",
            

        },
        buttonA:{
            border:'1px solid',
            borderColor: color.bg_color1,
            backgroundColor: color.bg_color3,           

        },
        image:{
            borderRadius:"25% 15% 25% 15%"
        }
    }
}


export const About = () => {
    return <Box {...style.about.lvl0} bg={color.bg_color1} color={color.color1}>

        <Flex {...style.about.lvl1}>

        <Box {...style.about.picBox}>
            <Image src='https://avatars.githubusercontent.com/u/107460761?v=4' {...style.about.image}/>
        </Box>

        <Box {...style.about.txtBox}>

            <Heading  {...style.about.heading0}>
                <Text {...style.about.heading1}> Hello World</Text>
                <Text {...style.about.heading2}>Full Stack Web developer</Text>
            </Heading>

            <Text {...style.about.desc} color={color.color2}>
                I'm Lokesh Vyavhare, software developer in Web Development. Expert in creating user-priotized UI and optimum Frontend. Also have excellence in Backend with Node, express and MongoDB.
                Problem solving mindset, hustler and lifelong learner. Good with communication and interested in work collaborative projects.
            </Text>

            <Box {...style.about.buttonBox}>
                <Button {...style.about.buttonA}>See My Projects</Button>
                <Button {...style.about.buttonA}>Github</Button>
            </Box>
        </Box>

        

        </Flex>
    </Box>
}