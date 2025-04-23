import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLoginPage from "../pages/UserLogin";
import AdminLoginPage from "../pages/AdminLogin";
import Dashboard from "../pages/Dashboard";

// User Routes
import Profile from "../pages/Profile";
import Messages from "../pages/Messages";
import Friends from "../pages/Friends";
import Gallery from "../pages/Gallery";
import Notifications from "../pages/Notifications";
import Payments from "../pages/Payments";
import Settings from "../pages/Settings/user";

// Admin Routes
import UserManagement from "../pages/UserManagement";
import Analytics from "../pages/Analytics";
import AdminSettings from "../pages/Settings/admin";

// Layout component to wrap dashboard pages
import DashboardLayout from "../components/dashboard-layout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<UserLoginPage />} />
      <Route path="/admin" element={<AdminLoginPage />} />

      {/* Dashboard routes */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* User Routes */}
      <Route
        path="/profile"
        element={
          <DashboardLayout>
            <Profile />
          </DashboardLayout>
        }
      />
      <Route
        path="/messages"
        element={
          <DashboardLayout>
            <Messages />
          </DashboardLayout>
        }
      />
      <Route
        path="/friends"
        element={
          <DashboardLayout>
            <Friends />
          </DashboardLayout>
        }
      />
      <Route
        path="/gallery"
        element={
          <DashboardLayout>
            <Gallery />
          </DashboardLayout>
        }
      />
      <Route
        path="/notifications"
        element={
          <DashboardLayout>
            <Notifications />
          </DashboardLayout>
        }
      />
      <Route
        path="/payments"
        element={
          <DashboardLayout>
            <Payments />
          </DashboardLayout>
        }
      />
      <Route
        path="/settings"
        element={
          <DashboardLayout>
            <Settings />
          </DashboardLayout>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/user-management"
        element={
          <DashboardLayout>
            <UserManagement />
          </DashboardLayout>
        }
      />
      <Route
        path="/analytics"
        element={
          <DashboardLayout>
            <Analytics />
          </DashboardLayout>
        }
      />
      <Route
        path="/admin-settings"
        element={
          <DashboardLayout>
            <AdminSettings />
          </DashboardLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
