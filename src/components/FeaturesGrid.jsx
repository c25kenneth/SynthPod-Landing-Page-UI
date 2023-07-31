import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import StepBox from "./StepBox"
import { MdSummarize, MdTranslate, MdTranscribe,  } from "react-icons/md"
import transcribe from "../assets/transcribe.png"
import Translate from "../assets/Translate.png"
import undraw_personal_file from "../assets/undraw_personal_file.svg"
import { BsSpotify, BsFillPersonCheckFill, BsUpload } from "react-icons/bs";
import GettingStartedSteps from "./GettingStartedSteps"
import Spotify_icon from "../assets/Spotify_icon.png"
import Cheering_Podcaster from "../assets/Cheering_Podcaster.png"
import SignUpImage from "../assets/SignUpImage.svg";

export default function FeaturesGrid() {

    const features = [
        {
            "id":1,
            "title":"Transcribe",
            "description":"With state-of-the-art AI transcription technology, transcribing your podcast has never been easier. Simply upload your podcast through your Spotify account or as an audio file and receive accurate, high-quality transcriptions in just minutes. Try it out and take your podcast to the next level. ",
            "icon" : MdTranscribe,
            "img": transcribe
        },
         {
            "id":2,
            "title":"Translate",
            "description":"Expanding your podcast's reach beyond your native language is made possible by our podcast translation service. By accurately translating your podcast into other languages, you can connect with new audiences and grow your listeners worldwide. Try it out and start reaching a broader audience today.",
            "icon" : MdTranslate,
            "img": Translate
        },
         {
            "id":3,
            "title":"Summarize",
            "description":"With our podcast summarization service, you can quickly and easily create bite-sized summaries of your podcast episodes. These summaries can be used as teasers to entice new listeners, shared on social media, or even repurposed into blog posts or articles. Try it out and start making your podcast content more accessible and shareable today.",
            "icon": MdSummarize,
            "img": undraw_personal_file
        },
    ]

    const steps = [
        {
            "id":1,
            "title":"1. Sign Up",
            "description":"Signing up for our podcast transcription, translation, and summarization service is quick, easy, and free. With just a few clicks, you'll have access to our powerful suite of tools that will help you take your podcast to the next level. See how our service can help you save time and reach more listeners.",
            "icon" : BsFillPersonCheckFill,
            "img": SignUpImage
        },
         {
            "id":2,
            "title":"2. Connect your Spotify Account or podcast link",
            "description":"Connect your Spotify Account to directly access all your podcasts or simply attach a link to your podcast. It's as simple as that.",
            "icon" : BsUpload,
            "img": Spotify_icon
        },
         {
            "id":3,
            "title":"3. Transcribe, summarize, and translate!",
            "description":"You're good to go! Change your podcasting experience forever!",
            "icon": MdSummarize,
            "img": Cheering_Podcaster
        },
    ]
    return (
        <div>
            <Flex bgGradient={'linear(to-l, #5EFCE8, #736EFE)'} flexDirection={"column"} marginBottom={"15px"}>
                <Heading padding={"15px"} color={"gray.200"}>What do we do?</Heading>
                <SimpleGrid marginTop={"5px"} minChildWidth={"300px"} spacing={"10px"} marginBottom={"25px"}>
                    {features.map(feature => (
                        <StepBox stepTitle={feature.title} description={feature.description} icon={feature.icon} image={feature.img}/>
                    ))}
                </SimpleGrid>
            </Flex>

            <Flex flexDirection={"column"} marginBottom={"20px"}>
                <Heading padding={"10px"} color={"gray.600"}>Getting Started</Heading>
                <SimpleGrid marginTop={"5px"} minChildWidth={"300px"} spacing={"10px"}>
                    {steps.map(step => (
                        <GettingStartedSteps stepTitle={step.title} description={step.description} icon={step.icon} image={step.img}/>
                    ))}
                </SimpleGrid>
            </Flex>
        </div>
        
        
    )
}