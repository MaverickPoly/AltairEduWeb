"use client";

import Link from "next/link";
import db from "@/backend/databases";
import {Query} from "appwrite";
import {useEffect, useState} from "react";

export default function Articles() {
    // const articles = [
    //     {
    //         title: 'Understanding React Hooks',
    //         content: 'React hooks allow you to use state and other features without writing a class...',
    //         image: 'https://itproger.com/img/courses/x1733135835.jpg.pagespeed.ic.tEKDBA2PXG.jpg',
    //         date: 'January 1, 2025',
    //     },
    //     {
    //         title: 'A Guide to JavaScript ES6',
    //         content: 'Learn about the latest features introduced in ES6 that make JavaScript more powerful...',
    //         image: 'https://itproger.com/img/courses/x1733135835.jpg.pagespeed.ic.tEKDBA2PXG.jpg',
    //         date: 'December 20, 2024',
    //     },
    //     {
    //         title: 'Top programming languages in 2025',
    //         content: 'Learn about the latest features introduced in ES6 that make JavaScript more powerful...',
    //         image: 'https://itproger.com/img/courses/x1733135835.jpg.pagespeed.ic.tEKDBA2PXG.jpg',
    //         date: 'December 20, 2024',
    //     },
    // ];
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const response = await db.articles.list([Query.orderDesc("$createdAt")]);
        setArticles(response.documents);
    }
    console.log(articles);

    return (
        <section className="px-4">
            <h1 className="text-4xl font-bold text-primary mb-8">Programming Articles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden group">
                        <img src={article.imageURL} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 duration-300"/>
                        <div className="p-4">
                            <Link href={`/articles/article/${article.$id}`} className='text-xl font-bold text-primary mb-2 hover:text-accent'>{article.title}</Link>
                            <p className="text-textSecondary text-sm mb-5">{article.date}</p>
                            <p className="text-textSecondary">{article.description}</p>

                        </div>
                    </div>
                ))}
            </div>
        </section>)
}