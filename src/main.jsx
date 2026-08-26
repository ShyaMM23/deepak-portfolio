import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import { initSmoothScroll } from "./utils/smoothScroll";

import "./index.css";

function Root() {
  useEffect(() => {
    const cleanup = initSmoothScroll();

    return cleanup;
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);