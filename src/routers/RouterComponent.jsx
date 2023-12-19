import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../screens/Home.jsx";
import Dashboard from "../screens/Dashboard.jsx";
import ChatRoom from "../screens/ChatRoom.jsx";
import { ProtectedRoute } from "../routers/ProtectedRoute.jsx";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/room/:id" element={<ChatRoom />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default RouterComponent;
