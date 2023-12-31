import React, { lazy} from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../screens/Home.jsx";
import Dashboard from "../screens/Dashboard.jsx";
import ChatRoom from "../screens/ChatRoom.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import { useSelector } from "react-redux";

const RouterComponent = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


  return (
    <>
      <Router>
        <Routes>
          {isAuthenticated && (
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          )}

          <Route path="/" element={<Home />} />

          {/* Protected Routes */}
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
