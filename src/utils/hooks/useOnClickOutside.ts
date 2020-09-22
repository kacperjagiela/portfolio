import { useEffect } from 'react';

const useOnClickOutside = (
    ref: React.MutableRefObject<any>,
    handler: (event: MouseEvent) => void,
) => {
    useEffect(() => {
        const listner = (event: MouseEvent) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listner);
        return () => {
            document.removeEventListener('mousedown', listner);
        };
    }, [ref, handler]);
};

export default useOnClickOutside;
