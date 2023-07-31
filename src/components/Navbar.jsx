import { Button, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"

export default function Navbar() {
    let navigate = useNavigate();
    
    return (
        <Flex alignItems={"center"}>
            <Heading m={"10px"} onClick={() => {navigate("/")}}>SynthPod</Heading>
            <Spacer/>
            <HStack spacing={"25px"} marginRight={"7px"}>
                <Button variant={"ghost"} onClick={() => {
                    navigate("/")
                }}>
                    Home
                </Button>
                <Button variant={"ghost"} onClick={() => {
                    navigate("/pricing")
                }}
                >
                    Pricing
                </Button>
                <Button variant={"ghost"} onClick = {() => {
                    navigate("/contact")
                }}>
                    Contact Us
                </Button>
                <Button bgGradient='linear(to-r, #ff00d4, #00ddff)' borderRadius={"20"} _hover={{ bgGradient: "linear(to-r, pink, #009dff)" }} onClick = {() => {
                    navigate("/signin")
                }}>
                    Get Started
                </Button>
            </HStack>
        </Flex>
    )
}