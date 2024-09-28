"use client";

import AudioPlayer from "@/app/components/AudioPlayer";
import Quiz from "@/app/components/Quiz";
import { getNoteBySimilarity, getRandomNumberInRange, shuffleArray } from "@/utils";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { BsPause, BsPlay } from "react-icons/bs";

type QuestionType = {
    question: string;
    answer: string;
    alternatives: string[];
    files: { type: "img" | "audio" | "video" | "youtube", path: string }[];
    duration: number;
}

const harmonicFields = [
    "C, Dm, Em, F, G, Am, Bm7b5",
    "Db, Ebm, Fm, Gb, Ab, Bbm, Cm7b5",
    "D, Em, F#m, G, A, Bm, C#m7b5",
    "Eb, Fm, Gm, Ab, Db, Cm, Dm7b5",
    "E, F#m, G#m, A, B, C#m, D#m7b5",
    "F, Gm, Am, Bb, C, Dm, Em7b5",
    "Gb, Abm, Bbm, Cb, Db, Ebm, Fm7b5",
    "G, Am, Bm, C, D, Em, F#m7b5",
    "Ab, Bbm, Cm, Db, Eb, Fm, Gm7b5",
    "A, Bm, C#m, D, E, F#m, G#m7b5",
    "Bb, Cm, Dm, Eb, E, Gm, Am7b5",
    "B, C#m, D#m, E, F#, G#m, A#m7b5"
];

const alternatives = [
    "C/Am",
    "C#/Bbm",
    "D/Bm",
    "D#/Cm",
    "E/C#m",
    "F/Dm",
    "F#/Ebm",
    "G/Em",
    "G#/Fm",
    "A/F#m",
    "A#/Gm",
    "B/G#m"
];

const questions: QuestionType[] = harmonicFields.map((field, index) => ({
    question: field,
    answer: alternatives[index],
    alternatives: alternatives,
    files: [],
    duration: 120,
}));

function getRandomElements<T>(array: T[], count: number): T[] {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export default function Page() {
    return <Quiz questions={questions} isItNote={true} />
}