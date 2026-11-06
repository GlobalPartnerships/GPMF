"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import type { Locale } from "@/app/dictionaries";
import type { LayoutDict } from "@/app/dictionaries/layout/types";
import { MenuOverlay } from "./MenuOverlay";

const localeConfig = [
  { locale: "es", flag: "es", label: "Español" },
  { locale: "en", flag: "us", label: "English" },
  { locale: "fr", flag: "fr", label: "Français" },
  { locale: "de", flag: "de", label: "Deutsch" },
] as const;

interface HeaderProps {
  lang: Locale;
  dict: LayoutDict["nav"];
}

function LanguageDropdown({
  lang,
  pathWithoutLocale,
  onSelect,
}: {
  lang: string;
  pathWithoutLocale: string;
  onSelect?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="group inline-flex items-center gap-1.5 border border-white/20 bg-white/5 px-2.5 py-1.5 rounded-full transition-all duration-300 hover:border-[#7A0F32] hover:bg-white/10 text-white/80 hover:text-white cursor-pointer text-[11px] font-medium tracking-wider uppercase"
        aria-label="Select language"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6.371c0 4.418 -2.239 6.629 -5 6.629" />
          <path d="M4 6.371h7" />
          <path d="M5 9c0 2.144 2.252 3.908 6 4" />
          <path d="M12 20l4 -9l4 9" />
          <path d="M19.1 18h-6.2" />
          <path d="M6.694 3l.793 .582" />
        </svg>
        <span className="uppercase text-[11px] font-medium">{lang}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-10 bg-[#0B0F17] border border-white/15 rounded-lg shadow-2xl py-1.5 min-w-[150px] z-50">
          {localeConfig.map(({ locale, flag, label }) => (
            <Link
              key={locale}
              href={`/${locale}${pathWithoutLocale}`}
              className={`flex items-center gap-3 px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-medium transition-colors ${
                locale === lang
                  ? "text-[#7A0F32] bg-white/5 font-semibold"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => {
                setOpen(false);
                onSelect?.();
              }}
            >
              <span
                className={`fi fi-${flag} fis rounded-full`}
                style={{ width: 16, height: 16, flexShrink: 0 }}
              />
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header({ lang, dict }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");

  const navLinks = [
    { label: dict.home, href: `/${lang}` },
    { label: dict.pilars, href: `/${lang}/pilars` },
    { label: dict.services, href: `/${lang}/services` },
    { label: dict.plans, href: `/${lang}/plans` },
    { label: dict.partners, href: `/${lang}/partners` },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-black border-b border-white/10">
        <nav className="max-w-[1280px] mx-auto flex items-center justify-between px-6 lg:px-8 py-3.5">
          {/* Logo — Blanco oficial, sin filtro invert */}
          <Link href={`/${lang}`} className="shrink-0 flex items-center">
            <Image
              src="/images/gpmf-logo-white.png"
              alt="GPMF Logo"
              width={120}
              height={40}
              className="h-9 w-auto shrink-0 object-contain"
              priority
            />
          </Link>

          {/* Desktop nav — Centrada, enlaces en Inter mayúsculas espaciadas */}
          <div className="hidden lg:flex items-center justify-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-white/80">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-[#7A0F32]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right side: Selector de idiomas + Botón píldora Burgundy */}
          <div className="flex items-center justify-end gap-3.5">
            {/* Language switcher */}
            <div className="hidden sm:flex">
              <LanguageDropdown lang={lang} pathWithoutLocale={pathWithoutLocale} />
            </div>

            {/* Botón Píldora Burgundy apuntando a Diagnóstico */}
            <Link
              href={`/${lang}/diagnosis`}
              className="inline-flex items-center justify-center rounded-full bg-[#7A0F32] hover:bg-[#8F123B] text-white px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap shadow-sm"
            >
              <span>{dict.diagnosis}</span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white/80 hover:text-white p-1 ml-1 cursor-pointer transition-transform duration-200 hover:scale-110"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <MenuOverlay
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        lang={lang}
        dict={dict}
        navLinks={navLinks}
        pathWithoutLocale={pathWithoutLocale}
      />
    </>
  );
}
