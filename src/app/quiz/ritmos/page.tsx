"use client";

import GoBack from "@/app/components/GoBack";
import { getRandomNumberInRange } from "@/utils";
import { useEffect, useState } from "react";
import { BsPauseCircle, BsPauseCircleFill, BsPlayCircle, BsPlayCircleFill } from "react-icons/bs";

const getRandomNumbers = (amount: number, figuresRange: number[]) => {
    let numbers = [];
    for (let i = 0; i < amount; i++) {
        numbers.push(getRandomNumberInRange(figuresRange[0], figuresRange[1]));
    }

    return numbers;
}

export default function Page() {
    const [amount, setAmount] = useState(4);
    const [figuresRange, setFiguresRange] = useState([1, 10]);
    const [includeSyncope, setIncludeSyncope] = useState(false);
    const [figures, setFigures] = useState<number[]>(getRandomNumbers(amount, figuresRange));

    return (
        <>
            <GoBack/>
            <div className="grid grid-cols-4 place-items-center md:gap-12">
                {
                    figures.map((n, i) => {
                        return <Block key={i} value={n} />
                    })
                }
            </div>

            <input type="number" onChange={(e) => setAmount(Number(e.target.value))} placeholder="Quantidade" className="block p-2 rounded-xl w-[80px] text-xl text-center font-extrabold mx-auto bg-gray-950 text-white fixed bottom-2 right-2" value={amount} />
            {
                !includeSyncope ? (
                    <button className="bg-blue-950 text-white rounded-full px-8 py-4 text-4xl uppercase mx-auto block mt-16 hover:bg-blue-900 hover:scale-95" onClick={() => {
                        setFiguresRange([1, 19]);
                        setIncludeSyncope(true);
                    }}>Incluir síncopes</button>
                ) : (
                    <button className="bg-red-950 text-white rounded-full px-8 py-4 text-4xl uppercase mx-auto block mt-16 hover:bg-red-900 hover:scale-95" onClick={() => {
                        setFiguresRange([1, 10]);
                        setIncludeSyncope(false);         
                    }}>Remover síncopes</button>
                )
            }
            <button className="bg-blue-950 text-white rounded-full px-8 py-4 text-4xl uppercase mx-auto block mt-16 hover:bg-blue-900 hover:scale-95" onClick={() => setFigures(getRandomNumbers(amount, figuresRange))}>Novo</button>
        </>
    )
}

function Block({ value }: { value: number }) {
    const [audio1, setAudio1] = useState<HTMLAudioElement | undefined>();
    const [audio2, setAudio2] = useState<HTMLAudioElement | undefined>();
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);

    useEffect(() => {
        setAudio1(new Audio(`/ritmos/${value}.mp3`));
        setAudio2(new Audio(`/ritmos/uno/${value}.mp3`));
    }, [value]);

    useEffect(() => {
        if (audio1) {
            audio1.addEventListener('ended', () => setIsPlaying1(false));

            return () => {
                audio1.removeEventListener('ended', () => setIsPlaying1(false));
            };
        }
    }, [audio1]);

    useEffect(() => {
        if (audio2) {
            audio2.addEventListener('ended', () => setIsPlaying2(false));

            return () => {
                audio2.removeEventListener('ended', () => setIsPlaying2(false));
            };
        }
    }, [audio2])

    return (
        <div className="relative bg-black rounded-xl border-2 border-white hover:scale-95">
            <img src={`/ritmos/${value}.png`} className="md:h-[200px] rounded-xl" />


            {
                isPlaying1 ? (
                    <BsPauseCircleFill className="absolute top-2 right-2 text-2xl text-white cursor-pointer hover:scale-105" onClick={() => {
                        if (isPlaying1) {
                            audio1?.pause();
                            setIsPlaying1(false);
                        }
                    }} />
                ) : (
                    <BsPlayCircleFill className="absolute top-2 right-2 text-2xl text-white cursor-pointer hover:scale-105" onClick={() => {
                        if (!isPlaying1) {
                            audio1?.play();
                            setIsPlaying1(true);
                        }
                    }} />
                )
            }

            {
                isPlaying2 ? (
                    <BsPauseCircle className="absolute top-2 left-2 text-2xl text-white cursor-pointer hover:scale-105" onClick={() => {
                        if (isPlaying2) {
                            audio2?.pause();
                            setIsPlaying2(false);
                        }
                    }} />
                ) : (
                    <BsPlayCircle className="absolute top-2 left-2 text-2xl text-white cursor-pointer hover:scale-105" onClick={() => {
                        if (!isPlaying2) {
                            audio2?.play();
                            setIsPlaying2(true);
                        }
                    }} />
                )
            }
        </div>
    )
}