import { useNavigate } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";
import { React } from "react";
import Footer from "../components/Footer";

const Home = () => {
    const navigate = useNavigate();

    const handleClickButton = (e) => {
        e.preventDefault();

        navigate("/student")
    }
    
    return (
    <>
        <Box>
            <Button id="student-btn" mx="45%" my="20" colorScheme="blue" boxShadow="lg" onClick={handleClickButton}>
                student-btn
            </Button>
        </Box>
    </>
    );
};

export default Home;
