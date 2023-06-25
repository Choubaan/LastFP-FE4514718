import { React } from "react";
import { Box, Flex, Heading, Spacer, Link as ChakraLink, Button, Link } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";

const NavBar = () => {
    const navigate = useNavigate();
    
    
    return (
        <Box bg='blue.500' px={4} py={3} w='100%'>
        <Flex>
            <ChakraLink  _hover={{textDecoration: "none"}}>
                <Heading as="h1" size="lg" color="white">
                    Student Data
                </Heading>
            </ChakraLink>
            <Spacer/>
            <Box mx={4}>
                    <Link href="/" id="home-page">
                        Home Page
                    </Link>
                    <Link href="/student" id="student-page" mx={5}>
                        Student Page
                    </Link>
                    <Link href="/add" id="add-student">
                            Add Student
                    </Link>
            </Box>
        </Flex>
    </Box>
    );
};

export default NavBar;
