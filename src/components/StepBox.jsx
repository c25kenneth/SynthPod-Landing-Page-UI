import { Box, Text, Heading, Card, CardHeader, CardBody, Icon, Flex, Spacer, CardFooter, Image } from "@chakra-ui/react";

export default function StepBox({stepTitle, description, image, icon}) {
    return (
        <Card bg={"white"} margin={"10px"} marginBottom={"15px"}>
            <CardHeader>
                <Flex alignItems={"center"} justifyContent={"center"}>
                    <Heading bgGradient='linear(to-r, #E2B0FF, #9F44D3)' bgClip={"text"}>{stepTitle}</Heading>
                    <Spacer/>
                    <Icon as={icon} boxSize={{sm: "5", md: "10", lg: "15", xl: "18", "2xl": "20"}} color={"green.300"}/>
                </Flex>
            </CardHeader>

            <CardBody>
                <Text color={"gray.600"}>{description}</Text>
            </CardBody>

            <CardFooter justifyContent={"center"}>
                <Image src={image} width={{base: "125px", md: "150px", lg: "200px", xl: "250px"}} height={{base: "125px", md: "150px", lg: "200px", xl: "250px"}}/>
            </CardFooter>
        </Card>
    )
}