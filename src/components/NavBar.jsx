import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [onSelectedPage, setOnSelectedPage] = useState("首頁");
  return (
    <div
      className="flex items-center space-x-4 w-full h-20 z-20 lg:px-36 md:px-16 px-8 
      bg-black/90 text-white font-mono lg:text-lg sm:text-sm fixed backdrop-blur-sm"
    >
      <button className="mr-auto text-2xl font-bold text-teal-500">
        ALl-LINK
      </button>
      <NavBtn
        name="首頁"
        nav="/"
        setOnSelectedPage={setOnSelectedPage}
        onSelectedPage={onSelectedPage}
      />
      <NavBtn
        name="關於我們"
        nav="aboutUs"
        setOnSelectedPage={setOnSelectedPage}
        onSelectedPage={onSelectedPage}
      />
      <NavBtn
        name="產品介紹"
        nav="product"
        setOnSelectedPage={setOnSelectedPage}
        onSelectedPage={onSelectedPage}
      />
      <NavBtn
        name="產品規格"
        nav="specification"
        setOnSelectedPage={setOnSelectedPage}
        onSelectedPage={onSelectedPage}
      />
      <NavBtn
        name="下載"
        nav="download"
        setOnSelectedPage={setOnSelectedPage}
        onSelectedPage={onSelectedPage}
      />
      <NavBtn
        name="聯絡我們"
        nav="contactUs"
        setOnSelectedPage={setOnSelectedPage}
        onSelectedPage={onSelectedPage}
      />
    </div>
  );
};

const NavBtn = ({ name, nav, setOnSelectedPage, onSelectedPage }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(nav);
        setOnSelectedPage(name);
        console.log(onSelectedPage, name);
      }}
      className={`rounded-lg px-4 py-3 hidden hover:bg-neutral-800 sm:block ${
        name == onSelectedPage ? "text-teal-500" : ""
      }`}
    >
      {name}
    </button>
  );
};

export default NavBar;
