import { Container, Flex, Heading, Spacer, Text, VStack, Box, Image, Button, Divider, Fade, ScaleFade, Slide, SlideFade, Collapse, useDisclosure} from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';
import Vibin from '../assets/Vibin.png'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

export default function Intro() {
    const navigate = useNavigate()    
    const {isOpen, onToggle} = useDisclosure();

      useEffect(() => {
        onToggle()
      }, []);

    return (
        <ScaleFade initialScale={0.7} in={isOpen}>     
            <Box display={"flex"} alignItems={"center"}>
                <Flex alignItems={"center"}>
                    <VStack alignItems={"center"} justifyContent={"flex-end"} >
                        <Box paddingLeft={"55px"} >
                            <Text bgGradient='linear(to-r, #5680e9, #84CEEB, #5AB9EA, #C1C8E4, #8860D0)'
                                bgClip='text'
                                fontSize={{base: "md", md: "3xl", lg: '6xl', xl: "7xl"}}
                                fontWeight='extrabold'
                            >
                                SynthPod
                            </Text>
                            
                            <Box maxWidth={{base: "120px", md: "190px", lg: "275px", xl: "480px"}} noOfLines={4}>
                                <Text marginTop={"20px"} marginBottom={"20px"} fontWeight={"bold"} color={"gray.600"}>
                                    Revolutionize your podcast experience with our all-in-one tool that transcribes, translates, and summarizes your content in minutes. For audiences and podcasters alike. 
                                </Text>
                            </Box>

                            <Button bgGradient='linear(to-r, #ff00d4, #00ddff)' borderRadius={"20"} _hover={{ bgGradient: "linear(to-r, pink, #009dff)" }} size={{base: "xs", md: "md", lg: "lg"}} padding={"17px"} marginBottom={"15px"} onClick={() => {navigate("/signin")}}>
                                Get Started
                            </Button>
                            {/* <Text alignItems={"flex-start"}
                                fontSize={{base: "sm", md: "xl", lg: '3xl', xl: "4xl"}}
                                color={"gray.700"}
                            >
                                The perfect place to: 
                            </Text> */}
                            
                            {/* <Container fontSize={{base: "xs", md: "sm", lg: 'xl', xl: "2xl"}} >
                                <Typewriter
                                    options={{
                                        loop: true, 
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString('Grow Your Audience')
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString("Summarize Your Podcasts")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString("Transcribe Your Podcasts")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString("Translate Your Podcasts")
                                        .pauseFor(2000)
                                        .start();
                                    }}
                                />
                            </Container> */}
                        </Box>
                    </VStack>

                    

                </Flex>
                <Spacer/>
                <Image src={Vibin} width={{base: "125px", md: "200px", lg: "400px", xl: "500px"}} height={{base: "125px", md: "200px", lg: "400px", xl: "500px"}} marginRight={"85px"} />
            </Box>
        </ScaleFade>
    
    )
}