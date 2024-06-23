import listKhodam from "@/resources/listKhodam";
import { Alert, AlertIcon, Box, Button, Center, CloseButton, Flex, FormControl, FormLabel, HStack, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineDollar } from "react-icons/ai";
import { useBreakpointValue } from "@chakra-ui/react";


const CheckKhodam = () => {
  const [name, setName] = useState("");
  const [khodam, setKhodam] = useState("");
  const [gambar, setGambar] = useState("");
  const [resultOpen, setResultOpen] = useState(false);
  const [riwayatCek, setRiwayatCek] = useState([]);
  const toast = useToast();
  const lKhodam = listKhodam();
  const direction = useBreakpointValue({ base: 'column', md: 'row' });

  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })


  useEffect(() => {
    if (khodam !== "") {
      setRiwayatCek([...riwayatCek, `${name} memiliki khodam ${khodam}. Berhati-hatilah!`]);
      setName("")
    }
  }, [khodam]);

  const calculateKhodam = async () => {
    if (name === "") {
      return toast({
        title: "Isi nama terlebih dahulu",
        status: "error",
        position: "bottom",
        isClosable: true
      });
    } else {
      const random = Math.floor(Math.random() * (lKhodam.length - 1));
      setGambar(lKhodam[random].gambar);
      setKhodam(lKhodam[random].khodam);
      toast({
        title: "Berhasil Check Khodam",
        status: "success",
        position: "bottom",
        isClosable: true
      });
      setResultOpen(true);
    }
  }

  const NoData = () => {
    if (riwayatCek.length == 0) {
      return isVisible ? (<Alert status='info' mt={4}>

        <AlertIcon />
        <Text fontSize='sm'>
          Belum ada riwayat! Ayo check khodam kamu!
        </Text>
        <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert>
      )
        : null
    }
  }

  const CopyRight = () => {
    return <>
      <Box p={8} borderWidth="1px" mx={4} mt={4} borderRadius={8} flex={1}>
        <Text fontSize='sm' as='cite'>Check Khodam Online By lanstheprodigy</Text>
        <Stack direction={direction} mt={4}>
          <a href="https://www.instagram.com/ghufronakbar_" target="_blank">
            <Box p={2} borderWidth="1px" borderRadius={8} mt={1}>
              <Center>
                <AiOutlineInstagram />
                <Text ml={2} fontSize='sm'>ghufronakbar_</Text>
              </Center>
            </Box>
          </a>
          <a href="https://www.github.com/lanstheprodigy" target="_blank">
            <Box p={2} borderWidth="1px" borderRadius={8} mt={1}>
              <Center>
                <AiOutlineGithub />
                <Text ml={2} fontSize='sm'>lanstheprodigy</Text>
              </Center>
            </Box>
          </a>
          <a href="https://www.saweria.co/lanstheprodigy" target="_blank">
            <Box p={2} borderWidth="1px" borderRadius={8} mt={1}>
              <Center>
                <AiOutlineDollar />
                <Text ml={2} fontSize='sm'>lanstheprodigy</Text>
              </Center>
            </Box>
          </a>
        </Stack>
      </Box>
    </>
  }

  return (
    <>
      <Box p={8} borderWidth="1px" mx={4} mt={4} borderRadius={8} flex={1}>
        <Heading>Check Khodam Online!</Heading>
      </Box>
      <Flex direction='column'>
        <Box p={8} borderWidth="1px" mx={4} borderRadius={8} mt={4} flex={1}>
          <FormControl>
            <FormLabel>Ketik Nama Kamu:</FormLabel>
            <Input value={name} onChange={(e) => { setName(e.target.value) }} />
            <Center mt={4}>
              <Button colorScheme='blue' onClick={calculateKhodam}>
                Cek
              </Button>
            </Center>
          </FormControl>
        </Box>
        <Box p={8} borderWidth="1px" mx={4} borderRadius={8} mt={4} flex={1}>
          <Text>Riwayat Check Khodam :</Text>
          <Box
            maxHeight="200px"
            overflowY="auto"
            p={4}
            borderRadius={8}
            mt={4}
          >
            <NoData />

            {riwayatCek.length === 0 ? null : (
              riwayatCek.map((item, index) => (
                <Box key={index} p={4} borderWidth="1px" mt={2} borderRadius={8}>
                  <Text>{item}</Text>
                </Box>
              ))
            )}
          </Box>
        </Box>
        <CopyRight />
      </Flex>
      <ModalResult resultOpen={resultOpen} setResultOpen={setResultOpen} name={name} khodam={khodam} gambar={gambar} />
    </>
  );
}

const ModalResult = ({ resultOpen, setResultOpen, name, khodam, gambar }) => {
  return (
    <Modal isOpen={resultOpen} onClose={() => setResultOpen(false)}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>Hasil Khodam Kamu</ModalHeader>
          <ModalCloseButton onClick={() => { setResultOpen(false) }}></ModalCloseButton>
          <ModalBody>
            <Text>Khodam {name} adalah {khodam}</Text>
            <Image mt={2} src={gambar} width="fit-content" height="fit-content" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={() => setResultOpen(false)}>
              Cek Lagi
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}

export default CheckKhodam;
