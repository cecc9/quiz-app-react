// import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
);
