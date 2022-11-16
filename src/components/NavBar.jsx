import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const NavBar = ({ children }) => {
  const [onSelectedPage, setOnSelectedPage] = useState("/");
  const navigate = useNavigate();

  // uselocation check url pathname setOnSelectedPage
  const location = useLocation();
  useEffect(() => {
    setOnSelectedPage(location.pathname);
  }, [location.pathname]);

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col overflow-x-hidden">
        <div className="w-full navbar fixed z-50 bg-[#28302A] text-white">
          <div className="flex-1 px-2 mx-2">
            <button
              className="mr-auto text-3xl font-bold text-teal-500"
              onClick={() => {
                navigate("/");
                setOnSelectedPage("/");
              }}
            >
              ALl-LINK
            </button>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
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
                subpage={[
                  { name: "規格表", url: "/specification" },
                  { name: "訂貨索引表", url: "/specification/orderIndex" },
                  {
                    name: "操作面板說明",
                    url: "/specification/panelExplanation",
                  },
                  { name: "安裝與固定", url: "/specification/installation" },
                ]}
              />

              <NavBtn
                name="下載"
                nav="/download"
                setOnSelectedPage={setOnSelectedPage}
                onSelectedPage={onSelectedPage}
                subpage={[
                  //   "WiFi版_apk",
                  //   "Internet版_apk",
                  { name: "操作模式解說", url: "/download/modeExplanation" },
                  //   "传感器单位换算",
                ]}
              />

              <NavBtn
                name="操作應用"
                nav="/document"
                setOnSelectedPage={setOnSelectedPage}
                onSelectedPage={onSelectedPage}
                subpage={[
                  { name: "如何選型", url: "/document" },
                  { name: "端子接線圖", url: "/document/terminalWiring" },
                  { name: "實体接線圖", url: "/document/hardwareWiring" },
                  { name: "硬件操作篇", url: "/document/hardwareOperating" },
                  // "APP操作篇",
                ]}
              />

              <NavBtn
                name="聯絡我們"
                nav="/contactUs"
                setOnSelectedPage={setOnSelectedPage}
                onSelectedPage={onSelectedPage}
              />
            </ul>
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#28302A]">
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
            subpage={[
              { name: "規格表", url: "/specification" },
              { name: "訂貨索引表", url: "/specification/orderIndex" },
              {
                name: "操作面板說明",
                url: "/specification/panelExplanation",
              },
              { name: "安裝與固定", url: "/specification/installation" },
            ]}
          />

          <NavBtn
            name="下載"
            nav="/download"
            setOnSelectedPage={setOnSelectedPage}
            onSelectedPage={onSelectedPage}
            subpage={[
              //   "WiFi版_apk",
              //   "Internet版_apk",
              { name: "操作模式解說", url: "/download/modeExplanation" },
              //   "传感器单位换算",
            ]}
          />

          <NavBtn
            name="操作應用"
            nav="/document"
            setOnSelectedPage={setOnSelectedPage}
            onSelectedPage={onSelectedPage}
            subpage={[
              { name: "如何選型", url: "/document" },
              { name: "端子接線圖", url: "/document/terminalWiring" },
              { name: "實体接線圖", url: "/document/hardwareWiring" },
              { name: "硬件操作篇", url: "/document/hardwareOperating" },
              // "APP操作篇",
            ]}
          />

          <NavBtn
            name="聯絡我們"
            nav="/contactUs"
            setOnSelectedPage={setOnSelectedPage}
            onSelectedPage={onSelectedPage}
          />
        </ul>
      </div>
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
      <li>
        <div className="dropdown dropdown-hover dropdown-bottom">
          <label
            tabIndex={0}
            className={`cursor-pointer rounded-lg hover:text-teal-500${
              nav == onSelectedPage
                ? "border-teal-500 rounded-none border-b-4"
                : ""
            }`}
            onClick={() => {
              navigate(nav);
              setOnSelectedPage(nav);
              console.log(nav);
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
                  className="text-white"
                  onClick={() => {
                    navigate(subpage.url);
                    setOnSelectedPage(nav);
                    console.log(subpage.url);
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
      </li>
    </>
  );
};

export default NavBar;
