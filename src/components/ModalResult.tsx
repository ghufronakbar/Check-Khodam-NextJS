import { initStateResult, Result } from "@/pages";
import Image from "next/image";

interface ModalResultProps {
  resultOpen: boolean;  
  name: string;
  khodam: string;
  gambar: string;
  setResult: (result: Result) => void;
  onClose: () => void;
}

const ModalResult = ({
  resultOpen,  
  name,
  khodam,
  gambar,
  setResult,
  onClose,
}: ModalResultProps) => {
  return (
    <>
      {resultOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50" onClick={onClose}>
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="brutalism-container bg-[#FFA6F6] max-w-md w-full z-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Hasil Khodam Kamu</h2>
              <button
                className="btn btn-sm btn-circle btn-outline font-black"
                onClick={() => {                  
                  onClose();
                  setResult(initStateResult);
                }}
              >
                ✕
              </button>
            </div>
            <div className="mt-4">
              <p dangerouslySetInnerHTML={{ __html: `Khodam ${name} adalah ${khodam}` }}>                
              </p>
              <Image
                className="mt-2 w-full h-auto object-contain shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                width={500}
                height={500}
                src={gambar}
                alt={`Harusnya gambar ${khodam.replace(/<[^>]*>/g, '')}, tapi gatau kalo ga muncul`}
                // placeholder="blur"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]"
                onClick={() => {
                  onClose();
                  setResult(initStateResult);
                }}
              >
                Cek Lagi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalResult;
