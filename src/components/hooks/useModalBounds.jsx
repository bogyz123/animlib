import { useEffect, useRef } from "react";

export default function useModalBounds(callback, perfBool) {
    // this hook listens for clicks that occur outside of the ref element.
    // if the click is outside of it, call the callback function.
    // the perf bool is performance optional boolean that needs to be true in order for the eventListener to be attached. it's used to avoid unnecessary state updates. true = always run
    // this hook is used for modal closers, sidebar closer, contact page closer, etc.
    const ref = useRef(null);
    
    useEffect(() => {
       

        const clickHandler = (e) => {
      
            if (ref.current && !ref.current.contains(e.target)) {   
                callback();
                console.log("call");
            }
        }; 

        if (perfBool) {
            document.addEventListener("click", clickHandler, true);
        } else {
            document.removeEventListener("click", clickHandler, true);
        }

        return () => {
            document.removeEventListener("click", clickHandler, true);
        };
    }, [perfBool]); 

    return { ref };
}
