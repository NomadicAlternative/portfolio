"use client";

import { useTranslation } from "react-i18next";
import { cn } from "../../lib/cn";

export default function LangSwitcher() {
  const { i18n } = useTranslation();

  const currentLang = i18n.language?.startsWith("es") ? "es" : "en";

  function switchLang(lng: string) {
    void i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  }

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => switchLang("en")}
        className={cn(
          "px-2 py-1 text-sm font-medium transition-colors",
          currentLang === "en"
            ? "text-ink underline decoration-accent decoration-2 underline-offset-4"
            : "text-muted hover:text-ink",
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-dim">|</span>
      <button
        type="button"
        onClick={() => switchLang("es")}
        className={cn(
          "px-2 py-1 text-sm font-medium transition-colors",
          currentLang === "es"
            ? "text-ink underline decoration-accent decoration-2 underline-offset-4"
            : "text-muted hover:text-ink",
        )}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}
