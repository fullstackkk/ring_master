import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Layout from "../ui/Layout";
import { MainPage, CatalogPage, NotFoundPage, ProductPage } from "../../pages";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md" sx={{ mt: "20px" }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Container>
    </div>
  );
}
export default App;
