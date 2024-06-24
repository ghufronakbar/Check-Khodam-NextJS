import listKhodam from "@/resources/listKhodam";
import {
  Alert, AlertIcon, Box, Button, Center, CloseButton, Flex, FormControl, FormLabel, HStack, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Switch, Text, useDisclosure, useToast, useColorMode
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineDollar } from "react-icons/ai";
import { useBreakpointValue } from "@chakra-ui/react";
import io from "socket.io-client";
import axios from "axios";
import Copyright from "@/components/Copyright";
import Riwayat from "@/components/Riwayat";
import Headers from "@/components/Header";
import CekKhodam from "@/components/CekKhodam";
import ModalResult from "@/components/ModalResult";

const Index = ({ socket }) => {
  const [name, setName] = useState("");
  const [khodam, setKhodam] = useState("");
  const [gambar, setGambar] = useState("");
  const [resultOpen, setResultOpen] = useState(false);
  const toast = useToast();
  const lKhodam = listKhodam();

  const calculateKhodam = async () => {
    if (name === "") {
      return toast({
        title: "Isi nama terlebih dahulu",
        status: "error",
        position: "bottom",
        isClosable: true
      });
    } else {
      const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/api/hello");
      console.log(response);
      const random = Math.floor(Math.random() * (lKhodam.length - 1));
      setGambar(lKhodam[random].gambar);
      setKhodam(lKhodam[random].khodam);
      toast({
        title: response?.data?.message,
        status: "success",
        position: "bottom",
        isClosable: true
      });
      setResultOpen(true);
    }
  };

  return (
    <>
      <Flex direction="column">
        <Headers />
        <CekKhodam name={name} setName={setName} calculateKhodam={calculateKhodam} />
        <Riwayat name={name} khodam={khodam} setKhodam={setKhodam} setName={setName} socket={socket} />
        <Copyright />
      </Flex>
      <ModalResult resultOpen={resultOpen} setResultOpen={setResultOpen} name={name} khodam={khodam} gambar={gambar} setName={setName} setKhodam={setKhodam} />
    </>
  );
};
export default Index;