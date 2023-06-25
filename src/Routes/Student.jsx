import { useEffect, useState } from "react";
import { Link, Heading, Flex, Button, Spacer, Select, Table, TableContainer, Thead, Tr, Th, Tbody, Td} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const Student = () => {
    const navigate = useNavigate();

    const [students, setStudents] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/student")
            const data = await response.json()
            
            setStudents(data)
        } catch (error) {
            console.log(error); 
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    const handleClickDelete = async (id) => {
        try {
            await fetch(`http://localhost:3001/student/${id}`, {
                method: "DELETE"
            });
            fetchData()
        } catch (error) {
            console.log(error);
        }
    }

    

    return (
        <>
            <Flex my={4} mx={4}>
                <Heading>All Students</Heading>
                <Spacer/>
                <Select placeholder="Select Faculty" width="20%" >
                    <option value="all" >All</option>
                    <option value="Fakultas Ekonomi" >Fakultas Ekonomi</option>
                    <option value="Fakultas Ilmu Sosial dan Politik" >Fakultas Ilmu Sosial dan Politik</option>
                    <option value="Fakultas Teknik" >Fakultas Teknik</option>
                    <option value="Fakultas Teknologi Informasi dan Sains" >Fakultas Teknologi Informasi dan Sains</option>
                </Select>
            </Flex>
            <Table variant="simple">
                <TableContainer display="block" width="100%">
                    <Thead>
                        <Tr>
                            <Th>No</Th>
                            <Th>Full Name</Th>
                            <Th>Faculty</Th>
                            <Th>Program Study</Th>
                            <Th>Option</Th>
                        </Tr>
                    </Thead>
                    {students.length > 0 && students.map((student) => {
                    
                    return <>
                    <Tbody>
                        <Tr>
                            <Td>{student.id}</Td>
                            <Td>
                                <Link onClick={() => navigate(`/student/${student.id}`)}>{student.fullname}</Link>
                            </Td>
                            <Td>{student.faculty}</Td>
                            <Td>{student.programStudy}</Td>
                            <Td>
                                <Button colorScheme="red"  >
                                    Delete
                                </Button>
                            </Td>
                        </Tr>
                    </Tbody>
                    </>
                })}
                </TableContainer>
            </Table>
        </>
    );
};

export default Student;
