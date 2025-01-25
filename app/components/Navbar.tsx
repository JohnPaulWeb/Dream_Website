"use client"


import Link from "next/link";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";



export default function Navbar() {
    const navItems = [
        {
            icon: "",
            label: "Wolf",
        },
        {
            icon: "",
            label: "",

        }
    ]


    return (
       <nav className="bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
               <h1 className="text-2x1 font-bold">Dream Machine</h1>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                    <motion.div key={item.label} whileHover={{ scale: 1.1}}
                    className="relative w-10 h-10">
                        <Image src={item.icon || "/yas.jpg"} alt={item.label} fill className="object-contain" />

                    </motion.div>
                ))}
            </div>

            <div className="flex items-center space-x-4">
                <Link href="/join">Join Us</Link>
                <Link href="/photon">Photon</Link>
                <Link href="/ray2">Ray2</Link>
                <Button variant="default" className="bg-black text-white hover:bg-black/90">
                Try Now</Button>
            </div>
        </div>
       </nav>
    )
}