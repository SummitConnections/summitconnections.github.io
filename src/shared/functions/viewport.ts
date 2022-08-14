import * as React from 'react'

export const useIntersection = (element: any, rootMargin?: any) => {
    const [isVisible, setState] = React.useState(false);

    React.useEffect(() => {
        if (!element.current) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin }
        );

        element.current && observer.observe(element.current);

        return () => observer.unobserve(element.current);
    }, []);

    return isVisible;
};