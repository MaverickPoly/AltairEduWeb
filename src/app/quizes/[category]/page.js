"use client";

import React, {useState} from "react";
import Button from "@/components/Button";
import quizzes from "@/constants/quiz.js";
import {useRouter} from "next/navigation";

export default function QuizPage(context) {
    const {category} = React.use(context.params);
    console.log(category);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const router = useRouter();

    const questions =  quizzes[category] || [];

    if (questions.length === 0) {
        return <div className="flex justify-center items-center my-48 flex-col space-y-6">
            <h1 className="text-5xl font-semibold">Cannot find quizzes!!</h1>
            <Button
                oncClick={() => router.back()}
            >
                Back to quizzes
            </Button>
        </div>
    }

    const handleOptionSelect = (questionId, selectedOption) => {
        setAnswers((prev) => ({
            ...prev, [questionId]: selectedOption,
        }));
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setShowResults(true);
        }
    }

    const calculateScore = () => {
        return questions.reduce((score, question) => {
            if (answers[question.id] === question.correctAnswer) {
                return score + 1;
            }
            return score;
        }, 0);
    };

    if (showResults) {
        const score = calculateScore();
        return (
            <div className="max-w-4xl mx-auto p-6 text-center space-y-6 my-24">
                <h1 className="text-5xl font-bold text-primary">Quiz Results</h1>
                <p className="text-2xl">
                    You scored <span className="font-bold text-indigo-500">{score}</span> out of {" "} {questions.length}.
                </p>
                <div className="flex justify-center space-x-8">
                    <Button
                        oncClick={() => {
                            setCurrentQuestion(0);
                            setAnswers({})
                            setShowResults(false);
                        }}
                    >
                        Retry Quiz
                    </Button>
                    <Button
                        oncClick={() => router.back()}
                    >
                        Back to quizzes
                    </Button>
                </div>
            </div>
        )
    }

    const question = questions[currentQuestion];

    return (
        <section className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-primary mb-6">{category} Quiz <span className="text-xl text-indigo-600">({questions.length} questions)</span></h1>

            <div className="bg-white shadow-md rounded-md p-6 space-y-4">
                <h2 className="text-xl font-semibold">{`Question ${currentQuestion + 1}: ${
                    question.question
                }`}</h2>
                <div className="space-y-2">
                    {question.options.map((option, index) => (
                        <div
                            key={index}
                            className={`p-3 rounded-md cursor-pointer border ${
                                answers[question.id] === option
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-100 hover:bg-gray-200"
                            }`}
                            onClick={() => handleOptionSelect(question.id, option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                    onClick={handleNextQuestion}
                    disabled={!answers[question.id]}
                >
                    {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
                </button>
            </div>
        </section>
    );
}