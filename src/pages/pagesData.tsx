import { Navigate } from "react-router-dom";
import { routerType } from "../types/router.types";
import CheckEmailPage from "./Auth/Check Email";
import ForgotPasswordPage from "./Auth/Forgot Password";
import LoginPage from "./Auth/Login";
import ResetPasswordPage from "./Auth/Reset Password";
import SignUpPage from "./Auth/Sign Up";
import SuccessResetPage from "./Auth/Success Reset";
import VerifyPage from "./Auth/Verify";
import FekrahPage from "./Dashboard/Fekrah";

const pagesData: routerType[] = [
  {
    path: "/",
    element: <Navigate to="/dashboard/fekrah" />,
    title: "fekrah"
  },
  {
    path: "/dashboard",
    element: <Navigate to="/dashboard/fekrah" />,
    title: "fekrah"
  },
  {
    path: "/dashboard/fekrah",
    element: <FekrahPage/>,
    title: "fekrah"
  },
  // {
  //   path: "/auth/sign-up",
  //   element: <SignUpPage />,
  //   title: "sign-up"
  // },
  // {
  //   path: "/auth/verify",
  //   element: <VerifyPage />,
  //   title: "verify"
  // },
  // {
  //   path: "/auth/login",
  //   element: <LoginPage />,
  //   title: "login"
  // },
  // {
  //   path: "/auth/forgot-password",
  //   element: <ForgotPasswordPage />,
  //   title: "forgot-password"
  // },
  // {
  //   path: "/auth/check-email",
  //   element: <CheckEmailPage />,
  //   title: "check-email"
  // },
  // {
  //   path: "/auth/reset-password",
  //   element: <ResetPasswordPage />,
  //   title: "reset-password"
  // },
  // {
  //   path: "/auth/success-reset",
  //   element: <SuccessResetPage />,
  //   title: "success-reset"
  // },
  
];

export default pagesData;