import { useState } from "react";

const Headers = () => {
  const [text, setText] = useState<string>("Toggle Me!");

  return (
    <div className="brutalism-container bg-[#c6fab4]">
      <h1 className="text-4xl font-extrabold uppercase tracking-wide brutalism-title">
        Cek Khodam Online!
      </h1>
      <div className="flex mt-8 flex-row items-stretch">
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div
            className="
          w-11 h-6 
          bg-gray-400 
          rounded-full 
          border-2 border-black 
          peer-checked:bg-pink-300 
          peer-checked:shadow-[2px_2px_0px_rgba(0,0,0,1)] 
          after:content-[''] 
          after:absolute 
          after:top-[4px] 
          after:left-[4px] 
          after:w-4 
          after:h-4 
          after:bg-white 
          after:rounded-full 
          after:border-2 
          after:border-black 
          after:transition-all 
          peer-checked:after:translate-x-5 
        "
            onClick={() => setText("2024 Masih percaya cek khodam?!?")}
          ></div>
        </label>
          <span className="ms-3 text-md font-medium">{text}</span>
      </div>
    </div>
  );
};

export default Headers;
