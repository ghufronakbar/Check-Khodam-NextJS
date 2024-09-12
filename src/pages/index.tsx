import khodams from "@/data/khodams";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Copyright from "@/components/Copyright";
import Riwayat from "@/components/Riwayat";
import Headers from "@/components/Header";
import CekKhodam from "@/components/CekKhodam";
import ModalResult from "@/components/ModalResult";
import ModalWarning from "@/components/ModalWarning";

export interface Result {
  khodam: string;
  gambar: string;
}

export const initStateResult: Result = {
  khodam: "",
  gambar: "",
};

const CheckKhodam = ({}) => {
  const [name, setName] = useState("");
  const [result, setResult] = useState<Result>(initStateResult);
  const [placeholder, setPlaceholder] = useState("");
  const [resultOpen, setResultOpen] = useState(false);
  const [warningOpen, setWarningOpen] = useState(true);
  const toast = useToast();

  const calculateKhodam = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name === "") {
      return toast({
        title: "Isi nama terlebih dahulu",
        status: "error",
        position: "bottom",
        isClosable: true,
      });
    } else {
      setName((prev) => `<strong>${prev}</strong>`);
      const random = Math.floor(Math.random() * (khodams.length - 1));
      setResult({
        khodam: `<strong>${khodams[random].khodam}</strong>`,
        gambar: khodams[random].gambar,
      });
      localStorage.setItem("name", name);
      setPlaceholder(localStorage.getItem("name") || "");
      toast({
        title: "Berhasil Cek Khodam",
        status: "success",
        position: "bottom",
        isClosable: true,
      });
      setResultOpen(true);
    }
  };

  useEffect(() => {
    const getNamePlaceholder = localStorage.getItem("name");
    setPlaceholder(getNamePlaceholder || "");
  }, []);

  return (
    <>
      <Headers />
      <CekKhodam
        name={name}
        setName={setName}
        calculateKhodam={calculateKhodam}
        placeholder={placeholder}
      />      
      <Riwayat name={name} khodam={result.khodam} />
      <Copyright />
      <ModalResult
        resultOpen={resultOpen}        
        name={name}
        khodam={result.khodam}
        gambar={result.gambar}
        setResult={setResult}
        onClose={() => {setResultOpen(false); setResult(initStateResult);setName("")}}
      />
      <ModalWarning warningOpen={warningOpen} setWarningOpen={setWarningOpen} onClose={() => setWarningOpen(false)} />
    </>
  );
};
export default CheckKhodam;
