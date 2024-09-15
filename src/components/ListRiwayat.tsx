import { RiwayatProps } from "./Riwayat";



const ListRiwayat = ({ name, khodam }: RiwayatProps) => {
  return (
    <div className="mt-2 brutalism-container bg-[#FF9F9F]">      
    <span className="font-bold">{name}</span> memiliki khodam <span className="font-bold">{khodam}</span>. Berhati-hatilah!
    </div>
  );
};

export default ListRiwayat;
