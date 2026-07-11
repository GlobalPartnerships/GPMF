"use client";

import dynamic from "next/dynamic";
import styles from "./sections/Section1.module.css";

const LiquidGlass = dynamic(() => import("liquid-glass-react"), { ssr: false });

interface GlassCircleProps {
  "data-parallax-speed"?: string;
}

export function GlassCircle(props: GlassCircleProps) {
  return (
    <div className={styles.glassCircleWrap} data-parallax-speed={props["data-parallax-speed"]}>
      <LiquidGlass
        style={{ width: "100%", height: "100%" }}
        cornerRadius={9999}
        displacementScale={90}
        blurAmount={0.9}
        aberrationIntensity={5}
        elasticity={0.9}
        mode="standard"
      >
        <></>
      </LiquidGlass>
    </div>
  );
}
