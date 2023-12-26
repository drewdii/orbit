import { Box, Image } from "@chakra-ui/react"

const LinkComponent = ({image}) => {
    return (
        <Box h="500px" w="500px" display="grid" placeContent="center" transform={["scale(0.9)", null, "scale(1)", null]}>
        <Box w="200px" h="200px" display="grid" placeContent="center" borderRadius="100%" dropShadow="0px 0px 30px rgba(0,0,0,0.5)">
            <Image w="150px" h="150px" src={image} alt="center image"/>
        </Box>
        </Box>
    )
}

export default LinkComponent