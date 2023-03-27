import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import React from "react";
import { Dashboard } from "../pages/Dashboard";
import { Register } from "../pages/Register";

export const RouteMain = () => (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
);
