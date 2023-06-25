import {useState} from "react";
import { Heading, VStack, Box, FormLabel, Input, Button, FormControl, Select  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
    const navigate = useNavigate();
    
    const [fullname, setFullname] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [programStudy, setProgramStudy] = useState('');

    const getFacultyByProrgamStudy = (programStudy) => {
        let faculty = "";

        switch (programStudy) {
            case "Ekonomi":
            case "Manajemen":
            case "Akuntansi":
                faculty = "Fakultas Ekonomi"
                break;
            case "Administrasi Publik":
            case "Administrasi Bisnis":
            case "Hubungan Internasional":
                faculty = "Fakultas Ilmu Sosial dan Politik"
                break;
            case "Teknik Sipil":
            case "Arsitektur":
                faculty = "Fakultas Teknik"
                break;
            case "Matematika":
            case "Fisika":
            case "Informatika":
                faculty = "Fakultas Teknologi Informasi dan Sains"
                break;

            default:
                faculty = ""
                break;
        }
        return faculty;
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch("http://localhost:3001/student", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }, 
                body: JSON.stringify({
                    fullname: fullname,
                    profilePicture: profilePicture,
                    address: address,
                    phoneNumber: phoneNumber,
                    birthDate: birthDate,
                    gender: gender,
                    faculty: (getFacultyByProrgamStudy(programStudy)),
                    programStudy: programStudy
                })
            })
            
            navigate("/student")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <VStack spacing={4} w="100%">
            <Heading as="h2" size="xl">
                Add New Students
            </Heading>
            <Box w="80%">
                <form onSubmit={handleSubmit}>
                    <VStack>
                        <FormControl>
                            <FormLabel>Fullname</FormLabel>
                            <Input type="text" placeholder="Please Enter Your Fullname" w="100%" onChange={(e) => setFullname(e.target.value)} value={fullname} isRequired="true" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Profile Picture</FormLabel>
                            <Input type="text" placeholder="Please Enter Profile Picture" w="100%" onChange={(e) => setProfilePicture(e.target.value)} value={profilePicture} isRequired="true"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Address</FormLabel>
                            <Input type="text" placeholder="Please Enter Address" w="100%" onChange={(e) => setAddress(e.target.value)} value={address} isRequired="true"/>
                        </FormControl>
                        
                        <FormControl>
                            <FormLabel>Phone Number</FormLabel>
                            <Input type="text" placeholder="Please Enter Your Phone Number" w="100%" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} isRequired="true"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Birth Date</FormLabel>
                            <Input type="date" placeholder="Please Enter Gender" w="100%" onChange={(e) => setBirthDate(e.target.value)} value={birthDate} isRequired="true"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <Select isRequired="true" placeholder="Please Select Your Gender" onChange={(e) => setGender(e.target.value)} value={gender}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Program Study</FormLabel>
                            <Select isRequired="true" onChange={(e) => setProgramStudy(e.target.value)} value={programStudy} placeholder="Please Input Your Program Study">
                                <option value="Ekonomi">Ekonomi</option>
                                <option value="Manajemen">Manajemen</option>
                                <option value="Akuntansi">Akuntansi</option>
                                <option value="Administrasi Publik">Administrasi Publik</option>
                                <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                                <option value="Hubungan Internasional">Hubungan Internasional</option>
                                <option value="Teknik Sipil">Teknik Sipil</option>
                                <option value="Arsitektur">Arsitektur</option>
                                <option value="Matematika">Matematika</option>
                                <option value="Fisika">Fisika</option>
                                <option value="Informatika">Informatika</option>
                            </Select>
                        </FormControl>
                        <Button colorScheme="blue" w="100%" type="submit" my={4}>Add Credential</Button>
                    </VStack>
                </form>
            </Box>
        </VStack>
        </>
    );
};

export default AddStudent;
