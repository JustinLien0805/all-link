import React from "react";

const NavBar = () => {
  return (
    <div
      className="flex items-center space-x-4 w-full h-20 z-20 lg:px-36 md:px-16 px-8 bg-black text-white
     font-bold lg:text-lg sm:text-sm"
    >
      <button className="mr-auto text-lg">ALl-LINK</button>
      {[
        "首頁",
        "關於我們",
        "產品介紹",
        "產品規格",
        "下載",
        "操作應用",
        "聯絡我們",
      ].map((text) => (
        <button className="rounded-lg px-4 py-3 hover:bg-neutral-800 hidden sm:block">
          {text}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
