import Image from "next/image";
import type { LayoutDict } from "@/app/dictionaries/layout/types";

interface FooterProps {
  dict: LayoutDict["footer"];
}

export function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const citiesText = dict?.cities ? dict.cities.replace(/·/g, "•") : "Bogotá • Clermont-Ferrand • Montreal";
  const rightsText = dict?.rights || "Todos los derechos reservados.";

  return (
    <footer className="w-full py-8 bg-black text-gray-400 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Identidad institucional: Logo blanco oficial + Arquitectura de 3 Nodos */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
          <Image
            src="/images/gpmf-logo-white.png"
            alt="GPMF Logo"
            width={110}
            height={36}
            className="h-8 w-auto shrink-0 object-contain"
          />
          <span className="hidden sm:inline-block w-px h-4 bg-white/20" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-gray-400 font-sans font-medium">
            {citiesText}
          </span>
        </div>

        {/* Copyright legal sobrio */}
        <div className="text-[11px] tracking-[0.15em] text-gray-400 uppercase text-center font-sans">
          © 2019 - {currentYear} GPMF. {rightsText}
        </div>

        {/* Botones pastilla oficiales */}
        <div className="flex items-center gap-3">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/gpmfsas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-gray-300 hover:text-white hover:border-[#7A0F32] hover:bg-[#7A0F32]/10 transition-all text-[11px] tracking-wider uppercase font-medium"
            aria-label="LinkedIn GPMF"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/globalpartnerships"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-gray-300 hover:text-white hover:border-[#7A0F32] hover:bg-[#7A0F32]/10 transition-all text-[11px] tracking-wider uppercase font-medium"
            aria-label="GitHub GPMF"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
