import { SectionLegend } from "../SectionLegend";
import styles from "./Section2.module.css";
import Image from "next/image";
interface Section2Props {
  bagroundColor?: string;
}

export function Section2({ bagroundColor }: Section2Props) {
    return (
        <section className={`${styles.section} overflow-hidden ${bagroundColor ?? ""}`}>
            <SectionLegend
                number="02"
                title="AI & Analytics Consulting"
                description="Transforming data into strategic decisions for high-potential SMEs and NGOs. Systems for small and mid level enterprises"
                numberColor="#fff8f875"
                lineColor="#d3d3d350"
                titleColor="rgba(255, 255, 255, 0.85)"
                descriptionColor="#D4D4D4"
            />

            <article className={styles.article_1}>
                <div className={styles.art_1_titleWrap}>
                    <h2 className={styles.art_1_title}>From scattered data to confident decisions</h2>
                    <div className={styles.art_1_ring} data-parallax-speed="0.1"></div>
                </div>
                <div className={styles.art_1_bodyWrap}>
                    <p className={styles.art_1_body}>
                        We turn dispersed, manual data into strategic assets for high-potential SMEs and NGOs. Through applied AI and analytics, we make the insight that drives better decisions accessible — without enterprise-scale budgets or complexity.
                    </p>
                    <div className={styles.art_1_circle} data-parallax-speed="0.2"></div>
                </div>
            </article>

            <article className={styles.article_2}>
                <div>
                    <h2 className={styles.art_2_title}>The operational engine</h2>
                    <div className={styles.art_2_body}>We move organizations from manual spreadsheets to centralized, high-performance systems: real-time control dashboards, automated workflows (RevOps) and decision-ready reporting. Teams recover up to 40% of their strategic time.
                    <div className={styles.art_2_ring} data-parallax-speed="0.12"></div>

                    </div>
                </div>
                <div>
                    <Image 
                        src="/images/services/image_2.png" 
                        alt="Description" 
                        width={350}
                        height={640}
                    />
                </div>
            </article>
            <article className={styles.article_3}>
                <h2 className={styles.art_3_title}>Our step by step for your company</h2>
                <ul className={styles.art_3_list}>
                    <li>Maturity diagnosis — audit your current data and processes.</li>
                    <li>Data architecture — design a centralized, reliable foundation.</li>
                    <li>Dashboards &amp; BI — build real-time control panels for decisions.</li>
                    <li>Automation &amp; RevOps — remove manual, repetitive workflows.</li>
                    <li>Adoption — hand over the tools and recover strategic team time.</li>
                </ul>
                <div className={styles.art_3_badge} aria-hidden="true" data-parallax-speed="0.14">
                  <svg viewBox="0 0 300 300" className={styles.art_3_badgeSvg}>
                    <defs>
                      <path
                        id="art3BadgeCirclePath"
                        d="M 150,150 m -90,0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
                      />
                    </defs>
                    <text className={styles.art_3_badgeText}>
                      <textPath href="#art3BadgeCirclePath" startOffset="0%">
                        INTERNATIONAL STRATEGY • LEADERSHIP • AI CONSULTING • GLOBAL EXPANSION • TRANSFORMATION •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className={styles.art_3_circle} data-parallax-speed="0.2"></div>
                <Image 
                    src="/images/services/Screenshot 2026-05-15 203722.png" 
                    alt="Description" 
                    width={350}
                    height={640}
                />
            </article>
        </section>
    )
}