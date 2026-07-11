import type { HomeDict } from "@/app/dictionaries";

interface PrinciplesSectionProps {
  dict: HomeDict["principles"];
}

export function PrinciplesSection({ dict }: PrinciplesSectionProps) {
  return (
    <section id="principles" className="bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 pt-20 sm:pt-32 pb-16">
          <div className="col-span-12 md:col-span-4">
            <span className="tick text-[11px] tracking-[0.28em] uppercase text-burgundy font-semibold">
              {dict.eyebrow}
            </span>
          </div>
          <div className="col-span-12 md:col-span-8 min-w-0">
            <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.01em]">
              {dict.headline}{" "}
              <span className="italic font-medium text-surface-variant">
                {dict.headlineAccent}
              </span>
            </h2>
          </div>
        </div>

        <div className="reveal">
          {dict.items.map((item, idx) => (
            <div
              key={item.number}
              className={`py-8 md:py-16 md:grid md:grid-cols-12 gap-8 md:items-start group border-t border-foreground/10 ${
                idx === dict.items.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="col-span-12 md:col-span-1 mb-2 md:mb-0">
                <span className="font-serif text-surface-variant/60 text-xl md:text-2xl">
                  {item.number}
                </span>
              </div>
              <div className="col-span-12 md:col-span-7 min-w-0">
                <h3 className="font-serif text-xl sm:text-2xl md:text-4xl mb-5 group-hover:text-burgundy transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-[13px] sm:text-[15px] md:text-[18px] text-surface-variant leading-relaxed max-w-xl break-words">
                  {item.description}
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 hidden md:flex items-start justify-end pt-2">
                <ul className="text-[11px] tracking-[0.22em] uppercase text-surface-variant space-y-2">
                  {item.deliverables.map((d) => (
                    <li key={d}>— {d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
