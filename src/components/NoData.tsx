import { FaInfo } from "react-icons/fa";

interface NoDataProps {
  riwayatLength: number;
}

const NoData = ({ riwayatLength }: NoDataProps) => {
  if (riwayatLength === 0) {
    return (
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-4 px-4">
        <FaInfo />
        <span className="font-bold text-center">
          Belum ada riwayat! Ayo cek khodam kamu!
        </span>
      </div>
    );
  }
  return null;
};

export default NoData;
