import { useEffect, useState } from "react";
import NoData from "@/components/NoData";
import axios from "axios";
import ListRiwayat from "@/components/ListRiwayat";
import { io, Socket } from "socket.io-client";

export interface RiwayatProps {
  name: string;
  khodam: string;
}

const Riwayat = ({ name, khodam }: RiwayatProps) => {  
  const [socket, setSocket] = useState<Socket | null>(null);  
  const [riwayatCek, setRiwayatCek] = useState<RiwayatProps[]>([]);

  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);    
    newSocket.on("connect", () => {      
    });

    newSocket.on("disconnect", () => {      
    });

    return () => {
      newSocket.close();      
    };
  }, []);

  useEffect(() => {
    if (khodam !== "" && socket) {      
      socket.emit("addKhodamCheck", { name, khodam });
    }
  }, [khodam, name, socket]);

  useEffect(() => {
    if (socket) {      
      socket.on("newKhodamCheck", ({ name, khodam }: RiwayatProps) => {                        

        setRiwayatCek((prev) => [{ name, khodam }, ...prev]);
      });

      return () => {        
        socket.off("newKhodamCheck");
      };
    }
  }, [socket,name]);

  useEffect(() => {    
    hitIo();
  }, []);

  const hitIo = async () => {
    try {
      const response = await axios.get("/api/socket");      
      return response;
    } catch (error) {      
    }
  };

  return (
    <div className="brutalism-container bg-[#A6FAFF]">
      <p className="font-bold">Riwayat Cek Khodam :</p>
      <div
        className={`${riwayatCek.length === 0 ? "h-80" : "h-full max-h-80"} brutalism-container overflow-y-auto mt-4 bg-[#FFF59F] hide-scrollbar px-0`}
      >
        <NoData riwayatLength={riwayatCek.length} />
        {riwayatCek.map((item, index) => (
          <ListRiwayat key={index} name={item.name} khodam={item.khodam} />
        ))}
      </div>
    </div>
  );
};

export default Riwayat;
