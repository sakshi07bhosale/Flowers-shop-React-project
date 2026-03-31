import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes,Route } from 'react-router';
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import OurServices from "./views/OurServices/OurServices";
import NotFound from "./views/NotFound/NotFound";

const root =  createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/OurServices" element={<OurServices />} />
    <Route path="*" element={<NotFound />} />

  </Routes>
  </BrowserRouter>
);