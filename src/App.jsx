import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Download from "./pages/Download";
import ContactUs from "./pages/ContactUs";
import Product from "./pages/Product";
import Specification from "./pages/Specification";

function App() {
  return (
    <div className="flex flex-col h-screen w-full bg-black relative overflow-y-scroll overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/specification" element={<Specification />} />
      </Routes>
    </div>
  );
}

export default App;
