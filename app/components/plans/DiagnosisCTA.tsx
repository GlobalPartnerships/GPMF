import Link from "next/link";
import styles from "./DiagnosisCTA.module.css";

interface DiagnosisCTAProps {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  body: string;
  ctaLabel: string;
  footnote: string;
  href: string;
}

const SPARK_COUNT = 55;
const SPARK_SOLID_CHANCE = 0.35;

/* Seeded so server and client agree on the field — the sparks are decorative
   noise, not data, and this keeps them out of the client bundle entirely. */
function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildSparks(n: number) {
  const rand = mulberry32(0x5eed);
  return Array.from({ length: n }, () => {
    const size = 4 + rand() * 8;
    const bias = Math.pow(rand(), 2.1);
    return {
      solid: rand() < SPARK_SOLID_CHANCE,
      width: `${size}px`,
      height: `${size}px`,
      left: `${(rand() * 100).toFixed(2)}%`,
      top: `${(bias * 96).toFixed(2)}%`,
      opacity: (0.35 + (1 - bias) * 0.65).toFixed(2),
      animationDuration: `${(5 + rand() * 7).toFixed(1)}s`,
      animationDelay: `${(-rand() * 9).toFixed(1)}s`,
    };
  });
}

const sparks = buildSparks(SPARK_COUNT);

export function DiagnosisCTA({
  eyebrow,
  headline,
  headlineAccent,
  body,
  ctaLabel,
  footnote,
  href,
}: DiagnosisCTAProps) {
  return (
    <section className={styles.section}>
      <div
        className={`${styles.paperNoise} absolute inset-0 opacity-40 pointer-events-none`}
      />
      <div className={`${styles.accentFade} absolute inset-0 pointer-events-none`} />
      <div
        className={`${styles.topGlow} absolute top-0 left-0 right-0 h-px pointer-events-none`}
      />

      <div className={styles.sparkField} aria-hidden="true">
        {sparks.map(({ solid, ...style }, i) => (
          <span
            key={i}
            className={`${styles.spark} ${solid ? styles.solid : ""}`}
            style={style}
          />
        ))}
      </div>

      {/* Media panel: looping video, cut by the diagonal */}
      <div className={styles.mediaWrap}>
        <video
          className="w-full h-full object-cover opacity-90"
          poster="/images/resources/c4871aefdcf042c41aa6424eee4ae741.jpg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/images/resources/davinci__image1___from_the_image_1_make_a_video_able_to_be.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.mediaVeil} />
      </div>

      {/* Diagonal hairline */}
      <svg
        className={`${styles.diagRule} hidden lg:block`}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="55"
          y1="0"
          x2="15"
          y2="100"
          stroke="rgba(255,255,255,.22)"
          strokeWidth="0.12"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className={styles.copyWrap}>
        <div className="max-w-[30rem] reveal">
          <span
            className={`${styles.accentText} tick text-[11px] tracking-[0.28em] uppercase font-semibold`}
          >
            {eyebrow}
          </span>
          <h2 className="font-serif text-[40px] lg:text-[56px] leading-[1.06] tracking-[-0.01em] mt-8">
            {headline}
            <br />
            <span className={`${styles.accentText} italic font-medium`}>
              {headlineAccent}
            </span>
          </h2>
          <p
            className={`${styles.inkMuted} text-[18px] leading-[1.65] mt-8 mb-12 max-w-md`}
          >
            {body}
          </p>
          <Link
            href={href}
            className={`${styles.accentBtn} ${styles.accentText} ${styles.accentBorder} group inline-flex items-center gap-4 border px-10 py-5 rounded-[2px]`}
          >
            <span className="text-[11px] uppercase tracking-[0.28em]">{ctaLabel}</span>
            <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
              east
            </span>
          </Link>
          <p
            className={`${styles.inkFaint} mt-10 text-[10px] tracking-[0.28em] uppercase`}
          >
            {footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
