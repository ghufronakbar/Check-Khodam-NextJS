interface ModalWarningProps {
  warningOpen: boolean;
  setWarningOpen: (warningOpen: boolean) => void;
  onClose: () => void;
}

const ModalWarning = ({ warningOpen, setWarningOpen, onClose }: ModalWarningProps) => {
  return (
    <>
      {warningOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50" onClick={onClose}>
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-[#c6fab4] p-6 max-w-md w-full z-10 brutalism-container" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Perhatian</h2>
              <button
                className="font-black"
                onClick={() => setWarningOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="mt-4">
              <p>Jika kamu mengecek khodam kamu disini itu rill cuy no fek!</p>
              <p className="mt-2">
                Bagi yang punya penyakit jantung jangan lanjut bermain 😈
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]"
                onClick={() => setWarningOpen(false)}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWarning;
