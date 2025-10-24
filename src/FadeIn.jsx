import { useEffect, useRef, useState } from "react";

export default function FadeInSection({ children }) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting));
        });
        const { current } = domRef;
        if (current) observer.observe(current);
        return () => current && observer.unobserve(current);
    }, []);

    return (
        <div
            ref={domRef}
            className={`transition-opacity duration-1000 ease-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
            {children}
        </div>
    );
}
