interface ListRiwayatProps {
  itemRiwayat: string;
  index: number;
}

const ListRiwayat = ({ itemRiwayat, index }: ListRiwayatProps) => {
  return (
    <div key={index} className="mt-2 brutalism-container bg-[#FF9F9F]" dangerouslySetInnerHTML={{ __html: itemRiwayat }}>      
    </div>
  );
};

export default ListRiwayat;
