"use client"
import { motion, AnimatePresence } from "framer-motion";
import { transitionVariantsPage } from "@/utils/motion-transition";


const TransitionPage = () => {
    return ( 
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                    className="fixed top-0 bottom-0 right-full w-screen z-30 bg-[#009ACD]"
                    variants={transitionVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.2 , duration: 0.6, ease: "easeInOut"}}
                >
                    
                </motion.div>
            </div>
        </AnimatePresence>
     );
}
 
export default TransitionPage;