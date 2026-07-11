import Image from "next/image";
import { SectionLegend } from "../SectionLegend";
import { GlassCircle } from "../GlassCircle";
import styles from "./Section1.module.css";

interface Section1Props {
  bagroundColor?: string;
}

export function Section1({ bagroundColor }: Section1Props) {
  return (
    <section className={`${styles.section} ${bagroundColor ?? ""}`}>
      <SectionLegend
        number="01"
        title="Internationalization and Strategic Alliances"
        description="Expanding businesses globally, building bridges between Europe and Latin America."
        numberColor="rgba(0, 0, 0, 0.12)"
        lineColor="rgba(0, 0, 0, 0.15)"
        titleColor="rgba(0, 0, 0, 0.85)"
        descriptionColor="rgba(0, 0, 0, 0.5)"
      />

      {/* Zone 1: Subtitle + Burgundy Circle */}
      <article className={styles.subtitleArticle}>
        <div className={styles.subtitleTitleWrap}>
          <div className={styles.burgundyCircle} data-parallax-speed="0.28" />
          <GlassCircle data-parallax-speed="0.18" />
          <h2 className={styles.subtitleHeading}>
            A successful market entry is engineered, not improvised
          </h2>
        </div>
        <p className={styles.subtitleBody}>
          We help your company build solid alliances and secure a successful soft
          landing — both from and into Europe and Latin America. From
          benchmarking and contextual intelligence to operational set-up and
          partner facilitation, we turn cultural and regulatory differences into
          durable competitive advantages. Our work stays global and
          interdisciplinary, intercultural by design, and anchored in clear,
          measurable KPIs.
        </p>
      </article>

      {/* Zone 2: Jockey Block */}
      <article className={styles.jockeyArticle}>
        <div className={styles.jockeyTitleWrap}>
          <div className={styles.blackRing} data-parallax-speed="0.1" />
          <h2 className={styles.jockeyHeading}>
            Backward and forward planning, in short cycles
          </h2>
        </div>
        <div className={styles.jockeyBodyWrap}>
          <div className={styles.redCircleSmall} data-parallax-speed="0.45" />
          <p className={styles.jockeyBody}>
            We start from your long-term objectives and work backwards into the
            technological and organizational steps required, then move forward
            with short-cycle pilots that deliver quick, measurable wins — so
            expansion never outruns strategy.
          </p>
        </div>
      </article>

      {/* Zone 3: Impact Area */}
      <article className={styles.impactArticle}>
        <div className={styles.photoWrapper}>
          <Image
            src="/images/services/section1-photo.jpg"
            alt="Professional speaker at a conference"
            width={480}
            height={640}
            z-index={2}
            className={styles.photo}
          />
          <div className={styles.photoRing} data-parallax-speed="0.12" />
        </div>
        <div className={styles.impactContent}>
          <div className={styles.impactTextBlock}>
            <div className={styles.impactTitleWrap}>
              <h2 className={styles.impactHeading}>Proven, measurable results</h2>
              <div className={styles.pinkCircle} data-parallax-speed="0.35" />
            </div>
            <p className={styles.impactBody}>
              With the German-Colombian Scientific Institute we developed
              strategic alliances that drove sustained growth above 10% per year
              and more than €500,000 in 2022. With Casa Normandía we designed an
              international go-to-market strategy validated through short pilot
              cycles.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
