"use client"

import { motion } from "framer-motion";
import { useState } from "react";


export default function SearchPrompt() {
    const [prompt, setPrompt] = useState("")
    const [isloading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch("/API/Generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt }),
            })

            const data = await response.json()

        } catch (error) {
            console.error("Error:", error)
        } finally {
            setIsLoading(false)
        }
    }


    return(
        <motion.div initial={{ opacity: 0,  scale: 0.95 }}
        animate={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-lg">
            <div className="relative rounded-2x1 overflow-hidden bg-black aspect-square">
                <img src="" alt="Flower in dark background" className="w-full h-full object-cover" />

                <div className="absolute bottom-6 left-6 right-6">
                    <form onSubmit={handleSubmit} className="relative">

                    </form>
                </div>
            </div>
        </motion.div>
    )
}