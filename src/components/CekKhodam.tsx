interface CekKhodamProps {
  name: string;
  setName: (name: string) => void;
  calculateKhodam: (e: React.FormEvent) => void;
  placeholder: string;
}

const CekKhodam = ({
  name,
  setName,
  calculateKhodam,
  placeholder,
}: CekKhodamProps) => {
  return (
    <div className="brutalism-container bg-[#FFA6F6]">
      <form className="flex flex-col justify-center items-center" onSubmit={calculateKhodam}>
        <span className="font-bold mb-2">Ketik Nama Kamu:</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={placeholder}
          className={`max-w-96 w-full border-black border-2 p-2.5 shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#A6FAFF] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] `}
        />
        <div className="flex justify-center mt-4">
          <button
            className="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] "
            type="submit"
          >
            Cek Khodam
          </button>
        </div>
      </form>
    </div>
  );
};

export default CekKhodam;
