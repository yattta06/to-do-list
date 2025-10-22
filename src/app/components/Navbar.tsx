// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 right-0 flex justify-end bg-transparent px-8 py-4 text-white z-50">
            <div className="flex gap-6 text-lg font-medium">
                <Link href="/" className="hover:under line">
                    About Me
                </Link>
                <Link href="/projects" className="hover:underline">
                    Projects
                </Link>
            </div>
        </nav>
    )
 }