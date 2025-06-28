import { useState, useEffect, useRef } from 'react';

interface UseInViewOption {
    threshold?: number;
    delay?: number;
}

export const useInView = ({ threshold = 0.1, delay = 0, }: UseInViewOption = {}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry], observer) => {
                if (entry.isIntersecting) {
                    if (delay > 0) {
                        timeoutId.current = setTimeout(() => {
                            setIsVisible(true);
                            if (ref.current) observer.unobserve(ref.current);
                        }, delay);
                    } else {
                        setIsVisible(true);
                        if (ref.current) observer.unobserve(ref.current);
                    }
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
            if (timeoutId.current) clearTimeout(timeoutId.current);
        };
    }, [threshold, delay]);

    return { ref, isVisible };
};
