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
            w:'100%',
            pt:'100px'
            
        },lvl01:{
            w:'100%',
            bg: 'radial-gradient(circle at 50% 50%, #dddddd, #dedede, #e0e0e0, #e3e3e3, #e7e7e7, #ebebeb, #efefef, #f3f3f3, #f7f7f7, #fafafa, #fcfcfc, #fdfdfd)'
        },
        lvl1:{
            p:'30px 20px',
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
            borderRadius:"25% 15% 25% 15%",
            p:'5px',
            bg: 'radial-gradient(circle at 50% 50%, #6cd4dd, #6fd5de, #78d7e0, #85dbe3, #94e0e7, #a3e5eb, #b3eaf0, #c1eff4, #cef3f7, #d8f7fa, #dff9fc, #e1fafd)',
            w:{base:"200px"},
            mb:'35px',
            boxShadow:'md'
        },
        image:{
            borderRadius:"25% 15% 25% 15%"
        },
        heading0:{
            textAlign:["center", "center", "center", "left", "left"],
            mb:"50px",
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
            boxShadow:'md'           
            
        },
    }
}


export const About = () => {
    return <Box {...style.about.lvl0}>

        <Box {...style.about.lvl01}>
        <Flex {...style.about.lvl1} >

<Box {...style.about.picBox}>
    <Image src='https://avatars.githubusercontent.com/u/107460761?v=4' {...style.about.image}/>
</Box>

<Box {...style.about.txtBox}>

    <Heading  {...style.about.heading0}>
        <Text {...style.about.heading1}>About Me</Text>
    </Heading>

    <Text {...style.about.desc} color={color.color2}>
        I'm Lokesh Vyavhare, software developer in Web Development. Expert in creating user-priotized UI and optimum Frontend. Also have excellence in Backend with Node, express and MongoDB.
        Problem solving mindset, hustler and lifelong learner. Good with communication and interested in work collaborative projects.
    </Text>

    <Box {...style.about.buttonBox}>
        <Button {...style.about.buttonA}>Linkedin</Button>
        <Button {...style.about.buttonA}>Github</Button>
    </Box>
</Box>



</Flex>

        </Box>
    </Box>
}