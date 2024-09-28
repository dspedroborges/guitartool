"use client";

import { useEffect, useState } from "react";
import { BsPause, BsPlay } from "react-icons/bs";

export default function AudioPlayer({ path }: { path: string }) {
    const [audio, setAudio] = useState<any>();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        setAudio(new Audio(path.replaceAll("#", "S")));
    }, [path]);

    console.log(path)

    const togglePlay = () => {
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (audio) {
            audio.addEventListener('ended', () => setIsPlaying(false));

            return () => {
                audio.removeEventListener('ended', () => setIsPlaying(false));
            };
        }
    }, [audio]);

    return (
        <div className="audio-player">
            <button onClick={togglePlay}>
                {
                    isPlaying ? (
                        <BsPause className="text-6xl text-blue-50" />
                    ) : (
                        <BsPlay className="text-6xl text-blue-50" />
                    )
                }
            </button>
        </div>
    );
}