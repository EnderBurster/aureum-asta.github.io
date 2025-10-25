import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function ScrollAnimationSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Map scroll progress (0 → 1) to motion values
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={ref}
            className="scroll-section"
            style={{
                height: "500vh",
                position: "relative",
                background: "#0d0d0d"
            }}
        >
            <div
                className="sticky"
                style={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <motion.div
                    style={{
                        width: 150,
                        height: 150,
                        backgroundColor: "#7b53f2",
                        borderRadius: "50%",
                        rotate,
                        scale,
                        opacity
                    }}
                />
            </div>
        </section>
    );
}
