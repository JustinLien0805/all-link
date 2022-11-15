import specSheet from "./img/specSheet.jpeg";
import installation from "./img/installation.jpeg";
import orderIndex from "./img/orderIndex.jpeg";
import panelExplanation from "./img/panelExplanation.jpeg";
import { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";
import { useLocation } from "react-router-dom";
const Specification = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/specification":
        setName("規格表");
        setImg(specSheet);
        break;
      case "/specification/orderIndex":
        setName("訂貨索引表");
        setImg(orderIndex);
        break;
      case "/specification/panelExplanation":
        setName("操作面板說明");
        setImg(panelExplanation);
        break;
      case "/specification/installation":
        setName("安裝與固定");
        setImg(installation);
        break;
      default:
        break;
    }
  }, [location.pathname]);
  return <PageLayout name={name} img={img} />;
};

export default Specification;
