import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const CekKhodam = ({ name, setName, calculateKhodam, placeholder }) => {
  return (
    <Box p={8} borderWidth="1px" mx={4} borderRadius={8} mt={4} flex={1}>
      <FormControl>
        <FormLabel>Ketik Nama Kamu:</FormLabel>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={placeholder}
        />
        <Center mt={4}>
          <Button colorScheme="blue" onClick={calculateKhodam}>
            Cek
          </Button>
        </Center>
      </FormControl>
    </Box>
  );
};

export default CekKhodam;
