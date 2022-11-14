import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Download from "./pages/Download/Download";
import ContactUs from "./pages/ContactUs";
import Product from "./pages/Product/Product";
import Specification from "./pages/Specification/Specification";
import Document from "./pages/Document/Document";
function App() {
  return (
    <div className="flex flex-col h-screen w-full bg-[#28302A] relative overflow-y-scroll overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/specification" element={<Specification />} />
        <Route path="/document" element={<Document />} />
        <Route
          path="*"
          element={
            <h1 className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              404 Page not found, Oops
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
