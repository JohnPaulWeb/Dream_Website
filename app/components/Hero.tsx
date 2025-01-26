"use client"

import { motion } from "framer-motion"

export default function Hero() {
    return(
        <motion.div initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.8 }} className="max-w-xl"
        >
            <h1 className="text-5x1 md:text-6xl font-bold leading-tight">Ayanokoji Kiyotaka</h1>
        </motion.div>
    )
}