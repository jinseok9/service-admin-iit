import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import IIT from "./IIT.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IIT />
  </StrictMode>
);
