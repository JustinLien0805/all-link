import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const NavBar = () => {
  const [onSelectedPage, setOnSelectedPage] = useState("/");
  const navigate = useNavigate();

  // uselocation check url pathname setOnSelectedPage
  const location = useLocation();
  useEffect(() => {
    setOnSelectedPage(location.pathname);
  }, [location.pathname]);

  return (
    <div
      className="flex items-center space-x-4 w-full h-20 z-20 lg:px-36 md:px-16 px-8 
      bg-[#28302A] text-white font-mono lg:text-lg sm:text-sm fixed shadow-md"
    >
      <button
        className="mr-auto text-3xl font-bold text-teal-500"
        onClick={() => {
          navigate("/");
          setOnSelectedPage("/");
        }}
      >
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
        nav="/aboutUs"
        setOnSelectedPage={setOnSelectedPage}
        onSelectedPage={onSelectedPage}
      />
      <NavBtn
        name="產品介紹"
        nav="/product"
        setOnSelectedPage={setOnSelectedPage}
        onSelectedPage={onSelectedPage}
        subpage={[
          { name: "產品概要", url: "/product" },
          { name: "產品特色", url: "/product/feature" },
        ]}
      />
      <NavBtn
        name="產品規格"
        nav="/specification"
        setOnSelectedPage={setOnSelectedPage}
        onSelectedPage={onSelectedPage}
        // subpage={["規格表", "訂貨索引表", "操作面板說明", "安裝與固定"]}
      />
      <NavBtn
        name="下載"
        nav="/download"
        setOnSelectedPage={setOnSelectedPage}
        onSelectedPage={onSelectedPage}
        // subpage={[
        //   "WiFi版_apk",
        //   "Internet版_apk",
        //   "操作模式解說",
        //   "传感器单位换算",
        // ]}
      />
      <NavBtn
        name="操作應用"
        nav="/document"
        setOnSelectedPage={setOnSelectedPage}
        onSelectedPage={onSelectedPage}
        // subpage={[
        //   "技术解说",
        //   "硬件操作篇",
        //   "APP操作篇",
        //   "端子接线图",
        //   "實体接線圖",
        // ]}
      />
      <NavBtn
        name="聯絡我們"
        nav="/contactUs"
        setOnSelectedPage={setOnSelectedPage}
        onSelectedPage={onSelectedPage}
      />
    </div>
  );
};

const NavBtn = ({
  name,
  nav,
  setOnSelectedPage,
  onSelectedPage,
  subpage = [],
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="dropdown dropdown-hover">
        <label
          tabIndex={0}
          className={`cursor-pointer rounded-lg px-4 py-3 hidden hover:text-teal-500 sm:block ${
            nav == onSelectedPage
              ? "border-teal-500 rounded-none border-b-4"
              : ""
          }`}
          onClick={() => {
            navigate(nav);
            setOnSelectedPage(nav);
          }}
        >
          {name}
        </label>
        {subpage?.length > 0 && (
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 bg-[#69736c] rounded-box w-52 shadow-lg"
          >
            {subpage?.map((subpage, index) => (
              <li
                key={index}
                className="hover:text-teal-500 text-white"
                onClick={() => {
                  console.log(subpage.url);
                  navigate(subpage.url);
                  setOnSelectedPage(nav);
                }}
              >
                <a className="active:bg-teal-500 hover:bg-[#28302A]">
                  {subpage.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default NavBar;
