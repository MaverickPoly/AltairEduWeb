"use client"

import Button from "@/components/Button";
import {useRouter} from "next/navigation";

export default function Quizzes() {
    const router = useRouter();

    const quizzes = [
        { topic: 'Python', image: '/language_logos/python.png' },
        { topic: 'JavaScript', image: '/language_logos/javascript.png' },
        { topic: 'Java', image: '/language_logos/java.png' },
        { topic: 'Dart', image: '/language_logos/dart.png' },
        { topic: 'Godot', image: '/language_logos/godot.png' },
        { topic: 'CSS', image: '/language_logos/css.png' },
        { topic: 'C', image: '/language_logos/c.png' },
        { topic: 'Cpp', image: '/language_logos/cpp.png' },
        { topic: 'Go', image: '/language_logos/go.png' },
    ];

    return (
        <section className="p-4">
            <h1 className="text-4xl font-bold text-primary mb-8">Quizzes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {quizzes.map((quiz, index) => (
                    <div key={index} className="rounded-lg overflow-hidden hover:shadow-xl duration-300 p-6 border-gray-900 border">
                        <div className="flex gap-10 justify-between mb-4">
                            <div className="flex flex-wrap flex-1">
                                <h2 className="text-xl font-bold text-primary ">{quiz.topic}</h2>
                            </div>
                            <img src={quiz.image} alt={quiz.topic} className="w-28 h-28 object-cover"/>
                        </div>
                        <Button oncClick={() => router.push(`/quizes/${quiz.topic}`)}>
                                Start Quiz
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    )
}