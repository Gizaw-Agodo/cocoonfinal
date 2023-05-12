import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateProduct from "./components/updateProduct/UpdateProduct";
import ProductList from "./components/producList/productList";
import NewProduct from "./components/newProduct/NewProduct";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/appbar/Appbar";
import Login from "./components/login/Login";
import { useSelector } from "react-redux";
import Home from "./components/home/Home";
import React from "react";
import "./app.css";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  // const isAdmin = currentUser?.user.isAdmin;
  const isAdmin = JSON.parse(localStorage.getItem("user"))?.user?.isAdmin;
  console.log("gama",isAdmin);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={!isAdmin&&<Login/>} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {isAdmin && (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route  path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<UpdateProduct />} />
              <Route path="/newProduct" element={<NewProduct />} />
            </Routes>
          </div>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
