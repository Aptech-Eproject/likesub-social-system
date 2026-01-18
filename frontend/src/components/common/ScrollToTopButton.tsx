"use client"

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react"

function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-12 right-6 z-40 p-3 rounded-full bg-blue-600! text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-110 cursor-pointer ${
                visible 
                    ? "opacity-100 translate-y-0"
                    : "opacity-0"
            }`}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    )
}

export default ScrollToTopButton