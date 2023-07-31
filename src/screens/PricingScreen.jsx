import { Box, SimpleGrid, useColorModeValue, Text, Heading, Center, Flex } from '@chakra-ui/react'
import PricingCard from '../components/PricingCard'

export default function PricingScreen() {
    const data = [
        {
          id: 1,
          price: 'Free',
          name: 'Free Plan',
          features: [
            "Basic Access to Synthpod",
            "1000 word max transcription",
            "Max 10 minute podcast",
            "Upgrade anytime", 
          ]
        },
        {
          id: 2,
          price:'$9.99',
            name: 'Premium Plan',
            features:[
                "Unlimited transcriptions",
                "Unlimited translations",
                "Unlimited summarizations",
                "14 day free trial"
            ]
        } 
      ]
    return (
                <SimpleGrid marginTop={"5px"} minChildWidth={"190px"} spacing={"10px"} margin={"25px"}
                >   
                    {data.map(data => (
                            <PricingCard name={data.name} price={data.price} features={data.features}/>
                    ))}
                </SimpleGrid>
    )
}