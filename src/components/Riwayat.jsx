import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NoData from "@/components/NoData";
import { io } from "socket.io-client";

const Riwayat = ({ name, khodam, setName, setKhodam }) => {
  const socket = io();
  const [riwayatCek, setRiwayatCek] = useState([]);

  useEffect(() => {
    if (khodam !== "") {
      const newHistory = `${name} memiliki khodam ${khodam}. Berhati-hatilah!`;
      socket.emit("addKhodamCheck", newHistory);
    }
  }, [khodam]);

  useEffect(() => {
    socket.on("newKhodamCheck", (data) => {
      setRiwayatCek((prev) => [data, ...prev]);
    });

    return () => {
      socket.off("newKhodamCheck");
    };
  }, []);

  return (
    <Box p={8} borderWidth="1px" mx={4} borderRadius={8} mt={4} flex={1}>
      <Text>Riwayat Check Khodam :</Text>
      <Box
        maxHeight="200px"
        overflowY="auto"
        p={4}
        borderRadius={8}
        mt={4}
        borderWidth="1px"
      >
        <NoData riwayatLength={riwayatCek.length} />
        {riwayatCek.map((item, index) => (
          <Box key={index} p={4} borderWidth="1px" mt={2} borderRadius={8}>
            <Text>{item}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Riwayat;
