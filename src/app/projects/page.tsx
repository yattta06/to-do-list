"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Projects() {
    return (
        <main className="min-h-screen Obg-black text-white flex flex-col items-center justify-center px-6 ру-20">
            <Navbar />
            
            <h1 className="text-3x1 font-bold ab-8">Projects</h1>
            
            <div className="bg-white/10 p-8 rounded-2x1 shadow-lg text-center">
                <h2 className="text-2x1 font-semibold nb-4">To-Do List App</h2>
                <p className="text-gray-300 mb-6 max-w-nd">
                    A simple SPA built using Next.js and TypeScript to manage your daily tasks.
                </p>
                <Link
                    href="/projects/todo"
                    className="px-6 py-3 bg-gradient-to-r from-purple-580 to-pink-580 rounded-lg font-medium hover:opacity-90 transition"
                >
                    Open Project
                </Link>
            </div>
        </main>
    );
}