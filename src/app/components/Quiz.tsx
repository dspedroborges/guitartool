"use client";

import { getNoteBySimilarity, getRandomNumberInRange } from "@/utils";
import { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import GoBack from "./GoBack";

type QuestionType = {
    question: string;
    answer: string;
    alternatives: string[];
    files: { type: "img" | "audio" | "video" | "youtube", path: string }[];
    duration: number;
}


export default function Quiz({ questions, isItNote }: { questions: QuestionType[], isItNote?: boolean }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [situation, setSituation] = useState({
        timeout: false,
        rightAnswer: -1,
    });
    const [performance, setPerformance] = useState({
        totalTried: 0,
        totalRight: 0,
    });

    useEffect(() => {
        setStartTime(new Date().getTime());
        setCurrentQuestion(getRandomNumberInRange(0, questions.length-1));
    }, []);

    return (
        <>
            <div className="bg-gray-950 w-full lg:w-1/2 py-8 rounded-xl mx-auto border-4 border-blue-800 bg-opacity-95 px-4">
                <p className="text-center text-white font-bold">Desempenho: {
                    performance.totalTried > 0 ? (
                        ((performance.totalRight / performance.totalTried)*100).toFixed(2)
                    ) : (
                        0
                    )
                }%</p>
                {
                    (situation.rightAnswer === 1 && !situation.timeout) && <div className="w-full lg:w-1/2 bg-blue-950 text-center font-light uppercase p-2 rounded-xl text-white my-4 mx-auto">Acertou!</div>
                }
                {
                    (situation.rightAnswer === 0 && !situation.timeout) && <div className="w-full lg:w-1/2 bg-red-950 text-center font-light p-2 rounded-xl text-white my-4 mx-auto">Errou! Era {questions[currentQuestion].answer}</div>
                }
                {
                    (situation.timeout) && <div className="w-full lg:w-1/2 bg-red-950 text-center font-light p-2 rounded-xl text-white my-4 mx-auto">Passou do tempo. Era {questions[currentQuestion].answer}</div>
                }
                <div className="text-white text-center my-4">Você tem {questions[currentQuestion].duration} segundos para responder.</div>
                <p className="text-4xl font-bold text-center my-8 text-blue-50">{questions[currentQuestion].question}</p>
                <div className="flex flex-col items-center gap-2 my-4">
                    {
                        questions[currentQuestion].files.map((f, i) => {
                            switch (f.type) {
                                case "audio": {
                                    return (
                                        <AudioPlayer key={i} path={f.path} />
                                    )
                                };
                                case "img": {
                                    return <img key={i} src={f.path} className="w-full lg:w-1/2 bg-white p-2 rounded-xl" />
                                };
                                case "video": {
                                    <video key={i} width="320" height="240" controls>
                                        <source src={f.path} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                };
                                case "youtube": {
                                    return (
                                        <iframe
                                            key={i}
                                            className="max-w-full h-[300px] w-full"
                                            src={`https://www.youtube.com/embed/${f.path.search("v=") !== -1 ? f.path.split("v=")[1] : f.path }`}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen={true}
                                        />
                                    )
                                };

                            }
                        })
                    }
                </div>

                {
                    situation.rightAnswer === -1 && (
                        <div className="rounded-xl p-8 mx-auto shadow">
                            <h3 className="text-center text-xl font-bold mb-4 text-blue-50">Alternativas</h3>
                            <ul className="mx-auto grid grid-cols-1 xl:grid-cols-4 gap-4 place-items-center">
                                {
                                    questions[currentQuestion].alternatives.map((a, i) => {
                                        return (
                                            <li
                                                key={i}
                                                className="w-full p-2 rounded-xl bg-gray-50 shadow my-2 hover:bg-gray-200 cursor-pointer text-center"
                                                onClick={() => {
                                                    if (a !== "") {
                                                        const dif = (new Date().getTime() - startTime) / 1000;
                                                        let isRight = false;
                                                        
                                                        if (isItNote) {
                                                            if (getNoteBySimilarity(a, [questions[currentQuestion].answer]) !== -1) {
                                                                isRight = true;
                                                            }
                                                        } else {
                                                            if (a === questions[currentQuestion].answer) {
                                                                isRight = true;
                                                            }
                                                        }

                                                        if (isRight) {
                                                            console.log(a);
                                                            console.log(questions[currentQuestion].answer);
                                                            console.log(getNoteBySimilarity(a, [questions[currentQuestion].answer]))
                                                            console.log(a === questions[currentQuestion].answer)

                                                            const isTimeout = dif > questions[currentQuestion].duration;
                                                            setSituation({rightAnswer: 1, timeout: isTimeout });
                                                            if (!isTimeout) {
                                                                setPerformance({
                                                                    totalRight: performance.totalRight + 1,
                                                                    totalTried: performance.totalTried + 1,
                                                                });
                                                            } else {
                                                                setPerformance({
                                                                    totalRight: performance.totalRight,
                                                                    totalTried: performance.totalTried + 1,
                                                                });
                                                            }
                                                        } else {
                                                            setSituation({rightAnswer: 0, timeout: dif > questions[currentQuestion].duration});
                                                            setPerformance({
                                                                totalRight: performance.totalRight,
                                                                totalTried: performance.totalTried + 1,
                                                            });
                                                        }
                                                    }
                                                }
                                            }
                                            >
                                                {a}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                }

                {
                    (situation.rightAnswer !== -1) && (
                        <button className="bg-blue-950 text-white rounded-full px-4 py-2 mx-auto block mt-16 hover:bg-blue-900 hover:scale-95" onClick={() => {
                            if (currentQuestion <= questions.length - 1) {
                                setCurrentQuestion(getRandomNumberInRange(0, questions.length-1));
                                setSituation({
                                    rightAnswer: -1,
                                    timeout: false,
                                });
                                setStartTime(new Date().getTime());
                            }
                        }}>Próxima</button>
                    )
                }
                <GoBack/>
            </div>

            
        </>
    )
}