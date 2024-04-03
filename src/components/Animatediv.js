import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

function Animatediv({ children }) {
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                },
            });
        } else {
            animation.start({
                opacity: 0,
                y: 20,
            });
        }
    }, [animation, inView]);

    return (
        <motion.div
            className="noclass"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={animation}
        >
            {children}
        </motion.div>
    );
}

export default Animatediv;
