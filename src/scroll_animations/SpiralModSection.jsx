import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

function ModItem({ mod, index, total, progress }) {
    const angle = (index / (total*2)) * Math.PI * 4;
    const radius = useTransform(progress, [0, 1], [0, 400]);
    const x = useTransform(radius, (r) => r * Math.cos(angle));
    const y = useTransform(radius, (r) => r * Math.sin(angle));

    // fade + scale appear sequentially
    const start = index * 0.08;
    const end = start + 0.08;
    const opacity = useTransform(progress, [start, end], [0, 1]);
    const scale = useTransform(progress, [start, end], [0.5, 1]);

    return (

        <motion.div
            style={{
                position: "absolute",
                x,
                y,
                opacity,
                scale,
                textAlign: "center",
            }}
        >
            <img
                src={mod.img}
                alt={mod.name}
                style={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                    borderRadius: "12px",
                    border: "2px solid rgba(255,255,255,0.2)",
                    boxShadow: "0 0 20px rgba(123,83,242,0.5)",
                }}
            />
            <p style={{ color: "white", marginTop: "0.5rem" }}>{mod.name}</p>
        </motion.div>
    );
}

export default function SpiralModsSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"],
    });

    const clampedProgress = useTransform(scrollYProgress, [0, 0.75], [0, 1]);

    const mods = [
        { name: "Aureum Asta", img: "public/mods/asta.png" },
        { name: "Amarite", img: "public/mods/amarite.png" },
        { name: "Blast", img: "public/mods/blast.png" },
        { name: "Enchancement", img: "public/mods/enchancement.png" },
        { name: "Supplementaries", img: "public/mods/supplementaries.png" },
        { name: "Farmer's Delight", img: "public/mods/farmer.png" }
    ];

    const rotate = useTransform(clampedProgress, [0, 1], [0, 360]);
    const scale = useTransform(clampedProgress, [0, 1], [0, 2.5]);
    const opacity = useTransform(clampedProgress, [0, 0.5, 1], [0, 1, 1]);

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
                {mods.map((mod, i) => (
                    <ModItem
                        key={mod.name}
                        mod={mod}
                        index={i}
                        total={mods.length}
                        progress={clampedProgress}
                    />
                ))}
            </div>
        </section>
    );
}
