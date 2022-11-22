import React from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
// import "./App.css";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import NewsListAbout from "./components/pages/AboutPage";
import AboutPage from "./components/pages/AboutPage";
import DetailProduct from "./components/pages/DetailProduct";
import CartPage from "./components/pages/CartPage";
import ProtectedRouteAdmin from "./components/atoms/ProtectedRoute/ProtectedRouteAdmin";
import ProtectedRouteUser from "./components/atoms/ProtectedRoute/ProtectedRouteUser";
import RekapPage from "./components/pages/RekapPage";
import StokPage from "./components/pages/StokPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:productId" element={<DetailProduct />} />
        {/* <Route path="/rekap" element={<RekapPage />} /> */}
        <Route path="/stok" element={<StokPage />} />

        <Route
          path="/rekap"
          element={
            <ProtectedRouteAdmin>
              <RekapPage />
            </ProtectedRouteAdmin>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRouteUser>
              <CartPage />
            </ProtectedRouteUser>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
