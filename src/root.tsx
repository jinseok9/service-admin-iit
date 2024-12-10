import { StrictMode } from "react";
import { createRoot, Root as _Root } from "react-dom/client";
import App from "./App.tsx";

export class Root {
  root: _Root;

  constructor(id: string) {
    this.root = createRoot(document.getElementById(id)!);
  }

  render() {
    this.root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }

  unmount() {
    this.root.unmount();
  }
}
