import ListKhodam from "@/resources/ListKhodam";
import { Flex, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Copyright from "@/components/Copyright";
import Riwayat from "@/components/Riwayat";
import Headers from "@/components/Header";
import CekKhodam from "@/components/CekKhodam";
import ModalResult from "@/components/ModalResult";
import ModalWarning from "@/components/ModalWarning";

const CheckKhodam = ({}) => {
  const [name, setName] = useState("");
  const [khodam, setKhodam] = useState("");
  const [gambar, setGambar] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [resultOpen, setResultOpen] = useState(false);
  const [warningOpen, setWarningOpen] = useState(true);
  const toast = useToast();
  const lKhodam = ListKhodam();
  const [trigger, setTrigger] = useState(0);

  const calculateKhodam = async () => {
    if (name === "") {
      return toast({
        title: "Isi nama terlebih dahulu",
        status: "error",
        position: "bottom",
        isClosable: true,
      });
    } else {
      const random = Math.floor(Math.random() * (lKhodam.length - 1));
      setGambar(lKhodam[random].gambar);
      setKhodam(lKhodam[random].khodam);
      localStorage.setItem("name", name);
      setPlaceholder(localStorage.getItem("name"));
      toast({
        title: "Berhasil Check Khodam",
        status: "success",
        position: "bottom",
        isClosable: true,
      });
      setResultOpen(true);
    }
  };

  useEffect(() => {
    const getNamePlaceholder = localStorage.getItem("name");
    setPlaceholder(getNamePlaceholder);
  }, []);

  return (
    <>
      <Flex direction="column">
        <Headers />
        <CekKhodam
          name={name}
          setName={setName}
          calculateKhodam={calculateKhodam}
          placeholder={placeholder}
        />
        <Riwayat
          name={name}
          khodam={khodam}
          setKhodam={setKhodam}
          setName={setName}
        />
        <Copyright />
      </Flex>
      <ModalResult
        resultOpen={resultOpen}
        setResultOpen={setResultOpen}
        name={name}
        khodam={khodam}
        gambar={gambar}
        setName={setName}
        setKhodam={setKhodam}
      />
      <ModalWarning warningOpen={warningOpen} setWarningOpen={setWarningOpen} />
    </>
  );
};
export default CheckKhodam;
