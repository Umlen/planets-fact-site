import { useState, useEffect } from "react";

function useResize() {
    const [width, setWidth] = useState(window.innerWidth);
    const mobileBreakPoint = 700;

    useEffect(() => {
        function resize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', resize);
        return(() => window.removeEventListener('resize', resize));
    }, []);
    
    return mobileBreakPoint > width;
}

export default useResize;