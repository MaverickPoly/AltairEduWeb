import Link from "next/link";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-6 mt-10">
            <div className="container mx-auto px-20">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                    <div className="flex items-center b-6 md:mb-0">
                        <img src="/brain_logo.jpg" alt="Logo" className="h-20 w-20 mr-5 rounded"/>
                        <span className="text-2xl font-bold">AltairEdu</span>
                    </div>

                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <Link href="/about" className="hover:text-accent transition">About</Link>
                        <Link href="/articles" className="hover:text-accent transition">Articles</Link>
                        <Link href="/courses" className="hover:text-accent transition">Courses</Link>
                        <Link href="/quizes" className="hover:text-accent transition">Quiz</Link>
                    </div>

                    <div className="flex space-x-5">
                        <Link
                            href="#"
                            className="text-white hover:text-accent transition text-2xl"
                            aria-label="Twitter"
                        >
                            <FaTwitter size="29" />
                        </Link>
                        <Link
                            href="#"
                            className="text-white hover:text-accent transition text-2xl"
                            aria-label="Facebook"
                        >
                            <FaFacebook size="29"/>
                        </Link>
                        <Link
                            href="#"
                            className="text-white hover:text-accent transition text-2xl"
                            aria-label="Linkedin"
                        >
                            <FaLinkedin size="29"/>
                        </Link>
                        <Link
                            href="#"
                            className="text-white hover:text-accent transition text-2xl"
                            aria-label="Instagram"
                        >
                            <FaInstagram size="29" />
                        </Link>
                        <Link
                            href="#"
                            className="text-white hover:text-accent transition text-2xl"
                            aria-label="Github"
                        >
                            <FaGithub size="29" />
                        </Link>
                    </div>
                </div>
                <div className="text-center mt-8 text-sm text-textSecondary">
                    &copy; 2025 AltairEdu. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
