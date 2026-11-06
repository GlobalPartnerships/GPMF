"use client";

import Image from "next/image";
import { useRef } from "react";
import type { HomeDict } from "@/app/dictionaries";
import styles from "./CaseStudiesSection.module.css";

interface CaseStudiesSectionProps {
  dict: HomeDict["caseStudies"];
}

const caseImages = [
  "/images/pack_imagenes_web/18_caso_estudio_casa_normandia.jpg",
  "/images/pack_imagenes_web/19_caso_estudio_agrotech.jpg",
  "/images/pack_imagenes_web/16_dashboard_analitica_dash.png",
];

export function CaseStudiesSection({ dict }: CaseStudiesSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const step = Math.min(el.clientWidth * 0.6, 700);
    el.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section id="work" className="pt-32 pb-32 bg-[#111111] border-t border-white/5 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 mb-16 grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-7 min-w-0">
          <span className="tick text-[11px] tracking-[0.28em] uppercase text-rose-dim font-semibold">
            {dict.eyebrow}
          </span>
          <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[60px] text-white mt-8 leading-[1.05]">
            {dict.headline}
          </h2>
        </div>
        <div className="col-span-12 md:col-span-5 flex md:justify-end gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous"
            className="w-12 h-12 border border-white/15 text-white/80 hover:bg-white/10 transition flex items-center justify-center cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next"
            className="w-12 h-12 border border-white/15 text-white/80 hover:bg-white/10 transition flex items-center justify-center cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-5 sm:px-8 md:px-[max(2rem,calc((100vw-1280px)/2+2rem))] hide-scrollbar snap-x snap-mandatory"
      >
        {dict.cases.map((c, i) => {
          const cardContent = (
            <div className="bg-black border border-white/10 hover:border-rose-dim/40 h-full flex flex-col group">
              <div className="aspect-[5/3] bg-[#1a1a1a] overflow-hidden relative">
                <Image
                  src={caseImages[i % caseImages.length]}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
                <div className="absolute top-6 left-6 right-6 flex justify-between text-[10px] tracking-[0.22em] uppercase text-white/90 font-medium z-10 drop-shadow">
                  <span>{c.number}</span>
                  <span>{c.category}</span>
                </div>
                <div className="absolute bottom-6 left-6 font-serif italic text-white text-2xl z-10 drop-shadow-md">
                  {c.title}
                </div>
              </div>
              <div className="p-10 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-3xl lg:text-4xl text-white mb-5 leading-tight group-hover:text-rose-dim transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed max-w-md">
                    {c.description}
                  </p>
                </div>
                <div className="mt-12 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-[1px] bg-white/30" />
                    <span className="text-[10px] tracking-[0.22em] uppercase text-white font-medium">
                      {c.cta}
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-white/60 group-hover:text-rose-dim transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </div>
          );

          return (
            <div
              key={c.number}
              className={`${styles.card} flex-shrink-0 w-[88vw] sm:w-[460px] snap-start`}
            >
              {c.link ? (
                <a
                  href={c.link}
                  target={c.link.startsWith("http") ? "_blank" : undefined}
                  rel={c.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block h-full group"
                >
                  {cardContent}
                </a>
              ) : (
                <div className="h-full group">{cardContent}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
