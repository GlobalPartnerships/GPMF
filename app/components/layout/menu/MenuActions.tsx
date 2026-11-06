"use client";

import Link from "next/link";
import type { LayoutDict } from "@/app/dictionaries/layout/types";

interface MenuActionsProps {
  lang: string;
  dict: LayoutDict["nav"];
  onClose: () => void;
}

export function MenuActions({ lang, dict, onClose }: MenuActionsProps) {
  return (
    <Link
      href={`/${lang}/diagnosis`}
      className="inline-flex items-center justify-center rounded-full bg-[#7A0F32] hover:bg-[#8F123B] text-white w-full px-8 py-3.5 text-[11px] uppercase tracking-[0.22em] text-center font-medium transition-all"
      onClick={onClose}
    >
      <span>{dict.diagnosis}</span>
    </Link>
  );
}
