import { useState } from "react";

const NavBar = () => {
  const [pageId, setPageId] = useState(0);
  const btnNames = [
    "首頁",
    "關於我們",
    "產品介紹",
    "產品規格",
    "下載",
    "操作應用",
    "聯絡我們",
  ];

  return (
    <div
      className="flex items-center space-x-4 w-full h-20 z-20 lg:px-36 md:px-16 px-8 
      bg-black text-white font-mono lg:text-lg sm:text-sm fixed "
    >
      <button className="mr-auto text-xl font-bold text-teal-500">
        ALl-LINK
      </button>
      {btnNames.map((text, index) => (
        <button
          key={index}
          id={index}
          onClick={() => {
            setPageId(index);
          }}
          className={`rounded-lg px-4 py-3 hidden hover:bg-neutral-800 sm:block ${
            pageId == index ? "text-teal-500" : ""
          }`}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
