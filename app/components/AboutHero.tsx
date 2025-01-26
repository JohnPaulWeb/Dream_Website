


import { motion } from "framer-motion"

export default function AboutHero() {
    return(
        <motion.div initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4x1 mx-auto">

            <motion.h1 className="text-5xl md:text-6xl font-bold leading-tight"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             >

                Bridging Dreams and Reality
            </motion.h1>

            <motion.p className="mt-6 text-xl text-gray-600"
            initial={{opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}>
                
                What is your Biggest Dream?     

            </motion.p>
        </motion.div>
    )
}