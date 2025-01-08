"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import db from "@/backend/databases";
import {Query} from "appwrite";

export default function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const response = await db.courses.list([Query.orderDesc("$createdAt")]);
        setCourses(response.documents);
    }
    console.log(courses);

    const languages = ["All", "JavaScript", "Python", "C", "Java"];
    const [selectedLanguage, setSelectedLanguage] = useState("All");

    const filteredCourses = selectedLanguage === "All"
        ? courses
        : courses.filter(course => course.tag === selectedLanguage);

    return (
        <section className="p-4">
            <h1 className="text-4xl font-bold text-primary mb-8">Courses</h1>
            <div className='flex space-x-4 mb-6'>
                {languages.map((language, index) => {
                    return <button
                        key={index}
                        onClick={() => setSelectedLanguage(language)}
                        className={`px-4 py-2 rounded-full border ${
                            selectedLanguage === language ? "bg-accent text-white" : "bg-white text-textSecondary"
                        } hover:bg-accent hover:text-white transition-all`}
                    >
                        {language}
                    </button>
                })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                    <Link href={`/courses/course/${course.$id}`} key={index} >
                        <div className="bg-white shadow-md rounded overflow-hidden">
                            <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover hover:blur-sm duration-300"/>
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-primary mb-2">{course.title}</h2>
                                <p className="text-textSecondary">{course.tag}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}