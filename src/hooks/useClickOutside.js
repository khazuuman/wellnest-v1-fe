import { useEffect } from 'react';

export default function useClickOutside(ref, handler) {
    useEffect(() => {
        const clickOutSide = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        }
        document.addEventListener('mousedown', clickOutSide)
        return () => {
            document.removeEventListener('mousedown', clickOutSide)
        }
    }, [])
}