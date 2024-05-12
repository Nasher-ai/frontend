import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import Router from "./pages/router";

const App = () => {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </NextUIProvider>
  );
};


export default App;