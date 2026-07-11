import type { HomeDict } from "@/app/dictionaries";
import styles from "./LegacyCtaSection.module.css";

interface LegacyCtaSectionProps {
  dict: HomeDict["legacy"];
}

export function LegacyCtaSection({ dict }: LegacyCtaSectionProps) {
  return (
    <section id="cta-legacy" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.triptychCol}>
            <div className={styles.triptych}>
              <div className={`${styles.past} whisper-shadow`}>
                <span className={styles.panelLabelLight}>
                  {dict.triptych[0].label}
                </span>
                <div>
                  <h3 className={styles.panelTitleLight}>
                    {dict.triptych[0].title}
                  </h3>
                  <p className={styles.panelSubLight}>
                    {dict.triptych[0].subtitle}
                  </p>
                </div>
              </div>
              <div className={`${styles.present} whisper-shadow`}>
                <span className={styles.panelLabelLight}>
                  {dict.triptych[1].label}
                </span>
                <div>
                  <h3 className={styles.panelTitleLight}>
                    {dict.triptych[1].title}
                  </h3>
                  <p className={styles.panelSubLight}>
                    {dict.triptych[1].subtitle}
                  </p>
                </div>
              </div>
              <div className={styles.future}>
                <span className={styles.panelLabelDark}>
                  {dict.triptych[2].label}
                </span>
                <div>
                  <h3 className={styles.panelTitleDark}>
                    {dict.triptych[2].title}
                  </h3>
                  <p className={styles.panelSubDark}>
                    {dict.triptych[2].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ctaCol}>
            <div className={styles.ctaInner}>
              <span className={`tick ${styles.eyebrow}`}>
                {dict.eyebrow}
              </span>
              <h2 className={styles.headline}>
                {dict.headline}{" "}
                <span className={styles.headlineAccent}>{dict.headlineAccent}</span>
              </h2>
              <p className={styles.description}>
                {dict.description}
              </p>
              <form className={styles.form}>
                <label className={styles.srOnly} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={dict.ctaPlaceholder}
                  className={styles.emailInput}
                />
                <button className={`btn-sweep ${styles.submitBtn}`}>
                  <span>{dict.ctaButton}</span>
                </button>
              </form>
              <p className={styles.note}>
                {dict.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
