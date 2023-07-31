import { Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate()
    
    return (
        <Flex bg={"#3884ff"} justifyContent={"center"} alignItems={"center"} padding={"30px"} flexDir={"row"} mTop={"20px"} marginBottom={"20px"}>
            <Flex flexDirection={"column"}>
                <Heading color={"white"}>What are you waiting for?</Heading>
                <Heading bgGradient={[
    'linear(to-r, teal.300, green.400)',
    'linear(to-r, blue.200, teal.500)',
    'linear(to-r, green.100, purple.300)',
  ]} bgClip={"text"} paddingBottom={"7px"}>Be a part of the future of podcasting</Heading>
            </Flex>
            <Spacer/>
            <Button bgGradient={'linear(to-r, #ff00d4, #00ddff)'} borderRadius={"20"} _hover={{ bgGradient: "linear(to-r, pink, #009dff)" }} size={{base: "xs", md: "md", lg: "lg"}} padding={"17px"} onClick={() => {navigate("/signin")}}>
                Get Started
            </Button>
        </Flex>
    )
}