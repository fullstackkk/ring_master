import { useState } from "react";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import {
  MainPage,
  CatalogPage,
  NotFoundPage,
  ProductPage,
  SingleProductPage,
} from "../../pages";
import Header from "../ui/Header";
import SideBar from "../ui/Sidebar";
import Layout from "../ui/Layout";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  function openSidebar() {
    setOpenSideBar(true);
  }
  function closeSidebar() {
    setOpenSideBar(false);
  }

  return (
    <div className="App">
      <Header openSidebar={openSidebar} />
      <Container maxWidth="md" sx={{ mt: "20px" }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Container>
      <SideBar open={openSideBar} close={closeSidebar} />
    </div>
  );
}
export default App;
