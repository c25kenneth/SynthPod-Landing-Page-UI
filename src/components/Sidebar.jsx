import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from "./NavItem"
import { MdDashboard, MdLock, MdMic, MdSummarize, MdTranscribe, MdTranslate } from 'react-icons/md'

export default function Sidebar() {
    const isSubscribed = false; 
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Kenneth Choi</Heading>
                    </Flex>
                </Flex>
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={MdDashboard} title="Dashboard" description="This is the description for the dashboard."/>
                <NavItem navSize={navSize} icon={MdMic} title="Transcribe"/>
                {isSubscribed ? <NavItem navSize={navSize} icon={MdTranslate} title="Translate"/> : <NavItem navSize={navSize} icon={MdLock} title="Translate" description="Upgrade your account to premium to translate podcasts!"/>}
                {isSubscribed ? <NavItem navSize={navSize} icon={MdSummarize} title="Summarize"/> : <NavItem navSize={navSize} icon={MdLock} title="Summarize" description="Upgrade your account to premium to summarize podcasts!"/>}
                
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
            </Flex>
        </Flex>
    )
}
