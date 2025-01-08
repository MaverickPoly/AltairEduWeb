"use client";

import Link from "next/link";
import {FaBars, FaBook, FaLayerGroup, FaQuestionCircle } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { useState } from "react";
import {CgClose} from "react-icons/cg";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-primary text-white py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-8">
                <h1 className="text-2xl font-bold">AltairEdu</h1>
                {/* Desktop menu */}
                <ul className="hidden md:flex space-x-8" id="menu">
                    <li>
                        <Link href="/">
              <span className="flex items-center hover:text-accent transition-colors">
                <FaHouse className="mr-2" /> Home
              </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/articles">
              <span className="flex items-center hover:text-accent transition-colors">
                <FaBook className="mr-2" /> Articles
              </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/courses">
              <span className="flex items-center hover:text-accent transition-colors">
                <FaLayerGroup className="mr-2" /> Courses
              </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/quizes">
              <span className="flex items-center hover:text-accent transition-colors">
                <FaQuestionCircle className="mr-2" /> Quiz
              </span>
                        </Link>
                    </li>
                </ul>

                {/* Mobile menu toggle button */}
                <button
                    className="md:hidden block text-white"
                    onClick={toggleMenu}
                    id="menu-toggle"
                >
                    <FaBars size="25" />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 bg-primary bg-opacity-90 z-50 transition-transform ${
                    menuOpen ? "transform translate-x-0" : "transform translate-x-full"
                }`}
            >
                <div className="flex justify-end p-6">
                    <button onClick={toggleMenu} className="text-white">
                        <CgClose size="40" />
                    </button>
                </div>
                <ul className="flex flex-col items-center space-y-8 p-6">
                    <li>
                        <Link href="/" onClick={toggleMenu}>
                          <span className="flex items-center text-2xl hover:text-accent transition-colors">
                            <FaHouse className="mr-4" /> Home
                          </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/articles" onClick={toggleMenu}>
                          <span className="flex items-center text-2xl hover:text-accent transition-colors">
                            <FaBook className="mr-4" /> Articles
                          </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/courses" onClick={toggleMenu}>
                          <span className="flex items-center text-2xl hover:text-accent transition-colors">
                            <FaLayerGroup className="mr-4" /> Courses
                          </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/quizes" onClick={toggleMenu}>
                          <span className="flex items-center text-2xl hover:text-accent transition-colors">
                            <FaQuestionCircle className="mr-4" /> Quiz
                          </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
