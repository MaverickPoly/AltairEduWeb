"use client";

import markdownit from 'markdown-it';
import {FaArrowLeft, FaClock} from "react-icons/fa";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import db from "@/backend/databases";

export default function ReadArticle(context) {
    const {id} = React.use(context.params);
    console.log(id);

    const [article, setArticle] = useState({});
    const [markdown, setMarkdown] = useState("");
    const md = markdownit();

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const myArticle = await db.articles.get(id);
        setArticle(myArticle);
        setMarkdown(md.render(myArticle.content));
    }

    console.log(article);
    console.log(markdown);

    return (
        <div className="max-w-3xl mx-auto p-6 space-x-8">
            <Link href="/articles" className="flex gap-3 text-gray-700 group">
                <FaArrowLeft className="group-hover:-translate-x-1 duration-300"/>
                <span className="font-medium text-sm">Back to articles</span>
            </Link>
            <div className="mt-10">
                <img src={article.imageURL} alt={article.title} className="w-full h-auto rounded-lg shadow-md" />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mt-6">{article.title}</h1>
            <p className="text-gray-600 text-sm mt-2 flex items-center gap-2"><FaClock />
                <time dateTime={article.$createdAt}>
                    {new Date(article.$createdAt).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </time>
            </p>
            <div className="prose prose-md text-gray-700 mt-6" dangerouslySetInnerHTML={{__html: markdown}} />
        </div>
    )
}

//677c0cff003382ff5a6b