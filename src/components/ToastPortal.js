
import { useEffect } from "react";
import { createPortal } from "react-dom";


const ToastPortal = ({ children }) => {
   
    useEffect(() => {
        const timer = setTimeout(() => {
            const target = document.querySelector('.modalParent');
            if(target) {
                return createPortal(children, target);
                
            } 
        }, 1000);
        return () => clearTimeout(timer);
    }, [children]);
   
    return null;
    
}

export default ToastPortal;