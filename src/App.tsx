import{Container,Box,Image,Text} from "@chakra-ui/react"
function App() {

  return (
    <Container height="100vh" maxWidth='1366px' bg="blue.200" display="flex" alignItems="center" justifyContent="center">
      <Box bg="white" h="350px" borderRadius="lg" w="230px" display="flex" alignItems="center" flexDir="column">
        <Container  w="220px" mt="20px"><Image borderRadius="lg"  src="/public/images/image-qr-code.png" alt="" /></Container>
        <Box w="200px" textAlign="center">
        <Text fontSize="md" m="3px" color="blue.900" fontWeight="bold">Improve your front-end skills by building projects</Text>
        <Text fontSize="smaller" color="blue">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Text>
        </Box>
      </Box>

    </Container>
  )
}

export default App
