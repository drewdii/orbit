import { Box, Image } from "@chakra-ui/react"

const LinkComponent = ({ image, links }) => {
    return (
        <Box 
            h="500px" 
            w="500px"
            display="grid"
            placeContent="center"
            transform={["scale(0.9)", null, "scale(1)", null]}
        >
            <Box 
                w="200px"
                h="200px"
                display="grid"
                placeContent="center"
                borderRadius="100%" 
                dropShadow="0px 0px 30px rgba(0,0,0,0.5)"
            >
                <Image 
                    w="150px" 
                    h="150px" 
                    src={image} 
                    alt="center image"
                />
            </Box>
            <Box position="absolute" w="100%" h="100%">
                {links.map((link, index) => (
                    <ButtonComponent link={link} index={index} totalCount={links.length}/>
                ))}
            </Box>
        </Box>
    );
};

const ButtonComponent = ({ link, index, totalCount }) => {
    return(
        <Box w="100px" top="200px" left="200px" position="absolute">
            <Box w="100%" h="100%" position="relative" as={motion.div} style={{rotate: '${}'}}>
                <a href={link.url} target="_blank" rel="noferrer">
                    <Box 
                        boxShadow="0px 0px 20px rgbd(0,0,0,0.5)" 
                        display="grid"
                        placeContent="center"
                        w="75px"
                        h="75px"
                        position="absolute"
                        borderRadius="100%"
                        left="-110px"
                        top="-110px"
                        bgGradient={'linear(to-tl, ${linl.color1}, ${link.color2})'}
                    >
                        <Box color="white" fontsize={35}>
                            {link.icon}
                        </Box>
                    </Box>
                </a>
            </Box>
        </Box>
    );
};

export default LinkComponent;