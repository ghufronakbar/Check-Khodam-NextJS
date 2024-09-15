import khodams from "@/data/khodams";
import { useEffect, useState } from "react";
import Copyright from "@/components/Copyright";
import Riwayat from "@/components/Riwayat";
import Headers from "@/components/Header";
import CekKhodam from "@/components/CekKhodam";
import ModalResult from "@/components/ModalResult";
import ModalWarning from "@/components/ModalWarning";
import { useToast } from "@/components/Toast";

export interface Result {
  khodam: string;
  gambar: string;
}

export const initStateResult: Result = {
  khodam: "",
  gambar: "",
};

const CheckKhodam = () => {
  const [name, setName] = useState<string>("");
  const [result, setResult] = useState<Result>(initStateResult);
  const [placeholder, setPlaceholder] = useState<string>("");
  const [resultOpen, setResultOpen] = useState<boolean>(false);
  const [warningOpen, setWarningOpen] = useState<boolean>(true);
  const { showToast } = useToast();

  const calculateKhodam = async (e: React.FormEvent) => {
    e.preventDefault();
    if (resultOpen) {
      return;
    }
    if (name === "") {
      return showToast("Masukkan Nama", "info");
    }    
    const random = Math.floor(Math.random() * (khodams.length - 1));
    setResult({
      khodam: khodams[random].khodam,
      gambar: khodams[random].gambar,
    });    
    localStorage.setItem("name", name);
    setPlaceholder(localStorage.getItem("name") || "");
    setResultOpen(true);
    showToast(
      `Cek Khodam  ${name.replace(/<[^>]*>/g, "")} Berhasil`,
      "success"
    );
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
        name={placeholder}
        khodam={result.khodam}
        gambar={result.gambar}
        setResult={setResult}
        onClose={() => {
          setResultOpen(false);
          setResult(initStateResult);
          setName("");
        }}
      />
      <ModalWarning
        warningOpen={warningOpen}
        setWarningOpen={setWarningOpen}
        onClose={() => setWarningOpen(false)}
      />
    </>
  );
};
export default CheckKhodam;
