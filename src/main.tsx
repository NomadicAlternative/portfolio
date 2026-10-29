import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { Analytics } from "@vercel/analytics/react";

import i18n from "./i18n/index";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

// Wait for i18n to be ready before rendering
i18n.isInitialized
  ? render()
  : i18n.on("initialized", render);

function render() {
  createRoot(root).render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
        <Analytics />
      </I18nextProvider>
    </StrictMode>,
  );
}
