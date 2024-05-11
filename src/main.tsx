import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ModalsProvider from "./providers/ModalsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </BrowserRouter>
);
