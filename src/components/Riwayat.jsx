import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NoData from "@/components/NoData";
import axios from "axios";
import ListRiwayat from "@/components/ListRiwayat";
import { io } from "socket.io-client";

const Riwayat = ({ name, khodam, setName, setKhodam }) => {
  const [socket, setSocket] = useState(null);
  const [riwayatCek, setRiwayatCek] = useState([]);

  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (khodam !== "" && socket) {
      const newHistory = `${name} memiliki khodam ${khodam}. Berhati-hatilah!`;
      socket.emit("addKhodamCheck", newHistory);
    }
  }, [khodam, name, socket]);

  useEffect(() => {
    if (socket) {
      socket.on("newKhodamCheck", (data) => {
        setRiwayatCek((prev) => [data, ...prev]);
      });

      return () => {
        socket.off("newKhodamCheck");
      };
    }
  }, [socket]);

  useEffect(() => {
    hitIo();
  }, []);

  const hitIo = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/socket"
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  };

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
          <ListRiwayat key={index} itemRiwayat={item} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default Riwayat;
