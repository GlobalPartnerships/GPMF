import { SectionLegend } from "../SectionLegend";
import styles from "./Section3.module.css";
import Image from "next/image";


export function Section3({ bagroundColor }: { bagroundColor: string }) {
    return (
        <section className={`${styles.section} ${bagroundColor} overflow-hidden py-20`}>
            <SectionLegend 
                number="03"
                title="Intercultural and Interdisciplinary Management"
                description="Strengthening internal capabilities to collaborate, innovate, and lead in global environments."
                numberColor="#00000050"
                lineColor="#0000008e"
                titleColor="rgb(0, 0, 0)"
                descriptionColor="#070707"
            
            />

            <article className={styles.art_1}>
                <Image 
                    src="/images/services/5962a10ec960a3dd9980617ffdf932b8 1.png" 
                    alt="Description" 
                    width={350}
                    height={640}
                />
                <div className={styles.art_1_bodyWrap}>
                    <h2 className={styles.art_1_title}>
                        Does your team really speak the same language?
                    </h2>
                    <p className={styles.art_1_body} >
                        Silos, culture clash, traditional leadership and talent drain quietly erode global teams. We strengthen your people&apos;s ability to collaborate, innovate and lead across borders — turning cultural and technical diversity into your greatest competitive advantage.
                    </p>
                </div>
                <div className={styles.art_1_circle} data-parallax-speed="0.2"></div>
            </article>
            <article className={styles.art_2}>
                <div className={styles.art_2_bodyWrap}>
                    <h2 className={styles.art_2_title}>
                        Collective intelligence, never canned answers
                    </h2>
                    <p className={styles.art_2_body} >
                        Our method runs in four moves: a cultural audit, a tailor-made program design, experiential training (simulations, role-play, real cases) and the transfer of in-house tools — so the capability stays with your team long after we leave.
                    </p>
                </div>
                <Image 
                    src="/images/services/image 4.png" 
                    alt="Description" 
                    width={550}
                    height={640}
                />
            </article>
            <article className={styles.art_3}>
                <Image 
                    src="/images/services/image 5.png" 
                    alt="Description" 
                    width={550}
                    height={640}
                />
                <div className={styles.art_3_bodyWrap}>
                    <h2 className={styles.art_3_title}>
                        Intervention models for every level
                    </h2>
                    <p className={styles.art_3_body} >
                        From tactical workshops to executive leadership programs and full cultural transformation, we meet your organization exactly where it is — and take it where it needs to go.
                    </p>
                    <ul className={styles.art_3_list}>
                        <li>Tactical — targeted workshops: intercultural communication, international negotiation, pitching for Europe &amp; the US.</li>
                        <li>Managerial — executive leadership program: adaptive leadership, monthly group coaching, practical challenges.</li>
                        <li>Strategic — cultural transformation: M&amp;A integration, corporate DNA design, change management.</li>
                        <li>Post-merger integration that cut turnover by 20% (Colombia–Germany).</li>
                        <li>Adaptive leadership for remote, multicultural teams across an international NGO.</li>
                    </ul>
                </div>
                <div className={styles.art_3_ring} data-parallax-speed="0.12"></div>
            </article>
        </section>
    )
}