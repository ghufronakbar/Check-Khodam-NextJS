import { Box, Text } from "@chakra-ui/react";

const ListRiwayat = ({ itemRiwayat, index }) => {
  return (
    <Box key={index} p={4} borderWidth="1px" mt={2} borderRadius={8}>
      <Text>{itemRiwayat}</Text>
    </Box>
  );
};

export default ListRiwayat;
