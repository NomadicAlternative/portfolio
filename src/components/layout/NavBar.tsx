"use client";

import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import LangSwitcher from "./LangSwitcher";

interface NavLink {
  key: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { key: "hero", href: "#hero" },
  { key: "build", href: "#what-i-build" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "how", href: "#how-i-work" },
  { key: "contact", href: "#contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { t } = useTranslation("nav");

  // Close mobile menu on resize past breakpoint
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // IntersectionObserver for active section detection
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.slice(1));
    const observers: IntersectionObserver[] = [];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          }
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    }

    return () => {
      for (const obs of observers) {
        obs.disconnect();
      }
    };
  }, []);

  function handleNavClick(href: string) {
    setMobileOpen(false);
    const id = href.slice(1);
    setActiveSection(id);
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Desktop nav links */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-ink ${
                    isActive ? "text-accent" : "text-muted"
                  }`}
                >
                  {t(link.key)}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile: idioma + menú a la izquierda */}
        <div className="flex items-center gap-3 md:hidden">
          <LangSwitcher />
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex size-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-ink"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <HiX className="size-5" /> : <HiMenu className="size-5" />}
          </button>
        </div>

        {/* Desktop: idioma a la derecha */}
        <div className="hidden md:block">
          <LangSwitcher />
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-line bg-bg md:hidden">
          <ul className="flex flex-col px-4 py-3">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-2 hover:text-ink ${
                      isActive ? "text-accent" : "text-muted"
                    }`}
                  >
                    {t(link.key)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
