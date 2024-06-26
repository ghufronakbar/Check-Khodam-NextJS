import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NoData from "@/components/NoData";
import axios from "axios";
import ListRiwayat from "@/components/ListRiwayat";
import { io } from "socket.io-client";

const Riwayat = ({ name, khodam, setName, setKhodam }) => {
  const [socket, setSocket] = useState(null);
  const [riwayatCek, setRiwayatCek] = useState([]);
  const baseURL = typeof window !== 'undefined' ? window.location.origin : '';

  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);
    console.log("Socket initialized:", newSocket);

    newSocket.on("connect", () => {
      console.log("Socket connected:", newSocket.id);
    });

    newSocket.on("disconnect", (reason) => {
      console.log("Socket disconnected:", reason);
    });

    return () => {
      newSocket.close();
      console.log("Socket closed");
    };
  }, []);

  useEffect(() => {
    if (khodam !== "" && socket) {
      const newHistory = `${name} memiliki khodam ${khodam}. Berhati-hatilah!`;
      console.log("Emitting addKhodamCheck with data:", newHistory);
      socket.emit("addKhodamCheck", newHistory);
    }
  }, [khodam, name, socket]);

  useEffect(() => {
    if (socket) {
      console.log("Setting up listener for newKhodamCheck");
      socket.on("newKhodamCheck", (data) => {
        console.log("Received newKhodamCheck with data:", data);
        setRiwayatCek((prev) => [data, ...prev]);
      });

      return () => {
        console.log("Removing newKhodamCheck listener");
        socket.off("newKhodamCheck");
      };
    }
  }, [socket]);

  useEffect(() => {
    console.log("Calling hitIo");
    hitIo();
  }, []);

  const hitIo = async () => {
    try {
      const response = await axios.get(baseURL + "/api/socket");
      console.log("Axios GET response:", response);
      return response;
    } catch (error) {
      console.error("Axios GET error:", error);
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
