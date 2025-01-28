import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../page/Dasboard";
import { Login } from "../page/Login";
import NotFound from "../page/NotFound";
import { Profile } from "../page/Profile";
import ProductDetail from "../page/ProductDetail";
import Register from "../page/register";
import { HomePage } from "../page/HomePage";
import History from "../page/History";
import Checkout from "../page/Checkout";
import ProtectedRoute from "./ProtectedRoute"; 
import Edukasi from "../page/Edukasi";

function Routesutils() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login/" element={<Login />} />
      <Route path="/register/" element={<Register />} />
      <Route path ="/edukasi" element={<Edukasi />} />

      <Route
        path="/home/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile/"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/productdetail/:id"
        element={
          <ProtectedRoute>
            <ProductDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default Routesutils;