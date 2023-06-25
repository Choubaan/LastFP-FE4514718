import { React } from "react";
import { Box, Flex, Heading, Spacer, Link as ChakraLink, Button } from "@chakra-ui/react";


const Footer = () => {
    return (
    <> 
    <Box bg='blue.500' px={3} py={2} w='100%' className="footer" position="relative">
        <Flex >
            <p className="studentName">Theodore Raphaello Giovanni Arden Widjaja</p>
            <Spacer/>
            <p className="studentId">FE4514718</p>
        </Flex>
    </Box>
    </>
    )
};

export default Footer;
