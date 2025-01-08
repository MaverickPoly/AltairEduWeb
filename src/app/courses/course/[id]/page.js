"use client";

import Link from "next/link";
import {FaArrowLeft} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import db from "@/backend/databases";
import {Query} from "appwrite";

export default function CourseLessons(context) {
    const {id} = React.use(context.params);

    const [lessons, setLessons] = useState([]);
    const [course, setCourse] = useState({});

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const myCourse = await db.courses.get(id);
        setCourse(myCourse);
        const response = await db.lessons.list([
            Query.equal("course", [id]),
            Query.orderAsc("$createdAt"),
            Query.limit(50),
        ]);
        setLessons(response.documents);
    }

    return (
        <section className="p-6 max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
                {/*  Back Button  */}
                <Link href="/courses" className="flex gap-3 text-gray-700 group">
                    <FaArrowLeft className="group-hover:-translate-x-1 duration-300"/>
                    <span className="font-medium text-sm">Back to courses</span>
                </Link>
            </div>

            <h1 className="text-4xl font-bold text-primary mb-6">{course.title}</h1>
            <div className="flex flex-col space-y-4">
                {lessons.map((lesson, index) => (
                    <Link
                        key={index}
                        href={`/courses/course/${id}/${lesson.$id}`}
                        // href={`/courses/${id}/lessons/${lesson.id}`} // Dynamic route for individual lessons
                    >
                        <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-all cursor-pointer">
                            <h2 className="text-xl font-semibold text-primary">{`${index + 1}) ${lesson.title}`}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
