"use client";

import GoBack from "@/app/components/GoBack";
import { chordsAndPaths, getRandomNumberInRange, shuffleArray } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsHouse } from "react-icons/bs";

type QuestionType = {
    question: string;
    answer: string;
}

const questions: QuestionType[] = chordsAndPaths.map(chord => ({
    question: chord.fileName,
    answer: `${chord.folder}/${chord.fileName}.png`,
}));

export default function Page() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        setCurrentQuestion(getRandomNumberInRange(0, questions.length - 1));
    }, []);

    return (
        <>
            <div className="bg-gray-950 w-full lg:w-1/2 py-8 rounded-xl mx-auto border-4 border-blue-800 bg-opacity-95 px-4">
                <p className="text-4xl font-bold text-center my-8 text-blue-50">{questions[currentQuestion].question.replaceAll("@", "/").replaceAll("&", "/")}</p>

                {
                    showAnswer && (
                        <img src={questions[currentQuestion].answer.replaceAll("#", "%23")} className="w-full lg:w-[200px] block mx-auto" />
                    )
                }

                {
                    !showAnswer && (
                        <button className="bg-blue-950 text-white rounded-full px-4 py-2 mx-auto block mt-16 hover:bg-blue-900 hover:scale-95" onClick={() => {
                            setShowAnswer(true);
                        }}>Mostrar resposta</button>
                    )
                }

                {
                    (showAnswer) && (
                        <button className="bg-blue-950 text-white rounded-full px-4 py-2 mx-auto block mt-16 hover:bg-blue-900 hover:scale-95" onClick={() => {
                            if (currentQuestion < questions.length - 1) {
                                setCurrentQuestion(getRandomNumberInRange(0, questions.length - 1))
                                setShowAnswer(false);
                            }
                        }}>Próxima</button>
                    )
                }

                <GoBack/>
            </div>
        </>
    )
}