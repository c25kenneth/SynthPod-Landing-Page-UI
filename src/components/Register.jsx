import { Grid, GridItem, Image, FormControl, FormHelperText, FormLabel, Input, Link, Textarea, Button, Box, Checkbox, Heading, Center, InputGroup, InputRightElement } from "@chakra-ui/react";
import PodcastListening from "../assets/PodcastListening.svg"
import { useState } from "react";

export default function Register() {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    
    return (
        <Grid templateColumns={"repeat(6, 1fr)"} bg={"gray.100"}>
            <GridItem
                as="aside"
                colSpan={{base: 4, lg: 3, xl: 2}}
                minHeight={{lg: "100vh"}}
                p={{base: "10px", lg: "10px"}}
            >
                <Image src={PodcastListening}/>
            </GridItem>
            <GridItem
                as="main"
                colSpan={{base: 2, lg: 3, xl: 4}}
                p="40px"
            >
                <Center>
                    <Box flex={1}>
                        <Heading as={"h1"} marginBottom={"25px"}>Create an Account</Heading>
                        <form>
                            <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type={"text"} name="email" placeholder="awesomepodcaster@gmail.com"/>
                            </FormControl>

                            <FormControl marginTop={"35px"}>
                                <FormLabel>Password</FormLabel>
                                <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                            </InputGroup>
                                <FormHelperText>At least 12 characters long</FormHelperText>
                            </FormControl>

                            <FormControl mt={"35px"} display="flex" alignItems={"center"} mb={"40px"} >
                                <Link color={"purple.400"} href={"/signin"}>Returning User? Sign In</Link>
                            </FormControl>

                            <Button bg={"green.400"} type={"submit"} onClick={() => toast({title: "Task Added!", duration: 5000, isClosable: true, status: "success"})}>
                                Create Account
                            </Button>
                        </form>
                    </Box>
                </Center>
            </GridItem>
        </Grid>
    )
}