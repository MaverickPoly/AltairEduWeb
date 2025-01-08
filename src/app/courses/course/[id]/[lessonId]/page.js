"use client"

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {FaArrowLeft} from "react-icons/fa";
import markdownit from "markdown-it";
import db from "@/backend/databases";

export default function LessonContent(context) {
    const router = useRouter();
    const {id, lessonId} = React.use(context.params);

    const md = markdownit();

    const [course, setCourse] = useState({});
    const [lesson, setLesson] = useState({});
    const [renderedContent, setRenderedContent] = useState("");

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const myCourse = await db.courses.get(id);
        setCourse(myCourse);
        const myLesson = await db.lessons.get(lessonId);
        setLesson(myLesson);
        setRenderedContent(md.render(myLesson.content));
    }


    return (
        <section className="p-6 max-w-4xl mx-auto bg-white rounded">
            {/*  Back Button  */}
            <div className="flex items-center mb-6">
                {/*  Back Button  */}
                <button className="flex gap-3 text-gray-700 group" onClick={() => router.back()}>
                    <FaArrowLeft className="group-hover:-translate-x-1 duration-300"/>
                    <span className="font-medium text-sm">Back to lessons</span>
                </button>
            </div>

            <div className="flex gap-6 flex-col sm:flex-row w-full mb-12">
                <img src={course.imageUrl} alt={course.tag} className="sm:w-96"/>
                <div className="">
                    <h1 className="text-3xl font-bold text-primary mb-4">{lesson.title}</h1>
                    <span
                        className="p-2 rounded-md border border-neutral-600 bg-transparent text-sm text-neutral-600">{course.tag}</span>
                </div>
            </div>
            <div
                className="prose prose-md w-full mx-auto"
                dangerouslySetInnerHTML={{__html: renderedContent}}
            />
        </section>
    )
}