import React from "react";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import QuizForm from "./components/QuizForm";
import DashboardLayout from "./layout/dashboard";
import LogoOnlyLayout from "./layout/LogoOnlyLayout";
import Quiz from "./pages/Quiz";

export default function Router() {
  return useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/quiz" replace /> },
        { path: "quiz", element: <Quiz /> },
      ],
    },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [{ path: "/", element: <Navigate to="/dashboard" /> }],
    },
  ]);
}
