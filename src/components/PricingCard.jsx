import {
    Flex,
    Heading,
    Icon,
    List,
    ListIcon,
    ListItem,
    Text,
    useColorModeValue,
    Card, 
    VStack,
    CardFooter,
    CardHeader,
    CardBody,
    Center, 
  } from '@chakra-ui/react'
import { HiCheckCircle } from 'react-icons/hi'

export default function PricingCard({ name, price, features }) {
    return <div>
          <Card>
            <CardHeader>
              <VStack spacing={6}>
                <Heading size="md" fontWeight="extrabold">
                  {name}
                </Heading>
              </VStack>
              <Flex align="flex-end" justify="center" fontWeight="extrabold" my="8">
                <Heading size="3xl" fontWeight="inherit" lineHeight="0.9em" color={"blue.600"}>
                  {price}
                </Heading>
                <Text fontWeight="inherit" fontSize="2xl">
                  / month
                </Text>
              </Flex>
            </CardHeader>
            <CardBody>
              <List spacing="4" mb="8" maxW="28ch" mx="auto">
                {features.map((feature) => (
                  <ListItem fontWeight="medium">
                    <ListIcon fontSize="xl" as={HiCheckCircle} marginEnd={2} color={"green"}/>
                    {feature}
                  </ListItem>
                ))}
              </List>
            </CardBody>
        </Card>
    </div>
}