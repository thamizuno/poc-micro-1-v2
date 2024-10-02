import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Login from './App';
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Sobre from "./pages/Sobre";
//import Home from "./pages/Home";
/*

import NoPage from "./pages/NoPage";
<Route path="blogs" element={<Blogs />} />
          
          <Route path="*" element={<NoPage />} />*/
export default function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App2 />);