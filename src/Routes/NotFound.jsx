import { useNavigate } from "react-router-dom";
import { Box, Text, Button, Spacer, Flex} from "@chakra-ui/react";

const NotFound = () => {
    const navigate = useNavigate();

    const handleClickButton = (e) => {
        e.preventDefault();

        navigate("/")
    }
    
    return (
        <>
            <Flex alignItems='center' mx='25%' my='20%'>
                <Box>
                    <Text as="b" >404 | Not Found</Text>
                </Box>
                <Spacer/>
                <Box>
                    <Button onClick={handleClickButton}>Back to Home</Button>
                </Box>
            </Flex>
           
        </>
    );
};

export default NotFound;
