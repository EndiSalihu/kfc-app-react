import { Routes, Route } from "react-router-dom";
import { Home, About, Menu,Cart, Login, NotFound } from "./pages";

import "./index.css";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
