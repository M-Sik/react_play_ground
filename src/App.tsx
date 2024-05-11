import { Suspense } from "react";
import "./App.css";
import Router from "./router";

function App() {
  console.log("app.tsx 리렌더링");
  return (
    <>
      <Suspense>
        <Router />
      </Suspense>
    </>
  );
}

export default App;
