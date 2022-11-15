import { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";
import { useLocation } from "react-router-dom";
import overview from "./img/productOverview.jpeg";
import feature from "./img/productFeature.jpeg";
const Product = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/product":
        setName("產品概要");
        setImg(overview);
        break;
      case "/product/feature":
        setName("產品特色");
        setImg(feature);
        break;
      default:
        break;
    }
  }, [location.pathname]);
  return <PageLayout name={name} img={img} />;
};

export default Product;
