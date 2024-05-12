import { Navigate } from "react-router-dom";
import { routerType } from "../types/router.types";
import CheckEmailPage from "./Auth Pages/Check Email";
import ForgotPasswordPage from "./Auth Pages/Forgot Password";
import LoginPage from "./Auth Pages/Login";
import ResetPasswordPage from "./Auth Pages/Reset Password";
import SignUpPage from "./Auth Pages/Sign Up";
import SuccessResetPage from "./Auth Pages/Success Reset";
import VerifyPage from "./Auth Pages/Verify";
import FekrahPage from "./App Pages/Fekrah";
import DashboardPage from "./App Pages/Dashboard";
import SpacesPage from "./App Pages/Spaces";
import HujraWhiteboardPage from "./App Pages/Hujra/Whiteboard";

const pagesData: routerType[] = [
  {
    path: "/",
    element: <Navigate to="/spaces" />,
    title: "spaces",
  },
  {
    path: "/spaces",
    element: <SpacesPage />,
    title: "spaces",
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    title: "dashboard",
  },
  {
    path: "/dashboard/fekrah",
    element: <FekrahPage />,
    title: "fekrah",
  },
  {
    path: "/dashboard/hujra",
    element: <HujraWhiteboardPage/>,
    title: "whiteboard"
  },
  {
    path: "/auth/sign-up",
    element: <SignUpPage />,
    title: "sign-up",
  },
  {
    path: "/auth/verify",
    element: <VerifyPage />,
    title: "verify",
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
    title: "login",
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPasswordPage />,
    title: "forgot-password",
  },
  {
    path: "/auth/check-email",
    element: <CheckEmailPage />,
    title: "check-email",
  },
  {
    path: "/auth/reset-password",
    element: <ResetPasswordPage />,
    title: "reset-password",
  },
  {
    path: "/auth/success-reset",
    element: <SuccessResetPage />,
    title: "success-reset",
  },
];

export default pagesData;
