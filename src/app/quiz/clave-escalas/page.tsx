"use client";

import Quiz from "@/app/components/Quiz";

type QuestionType = {
    question: string;
    answer: string;
    alternatives: string[];
    files: { type: "img" | "audio" | "video" | "youtube", path: string }[];
    duration: number;
}

const alternatives = ["Ab-Fm", "A-F#m", "Bb-Gm", "B-G#m", "Cb-Abm", "C#-A#m", "D-Bm", "Dm-Bbm", "Eb-Cm", "E-C#m", "F-Dm", "F#-D#m", "Gb-Ebm", "G-Em"];

const questions: QuestionType[] = [
    {
        "question": "",
        "answer": "Ab-Fm",
        "alternatives": alternatives,
        "files": [{ "type": "img", "path": "/escalas-clave-sol/Ab-Fm.png" }],
        "duration": 10
    },
    {
        "question": "",
        "answer": "A-FSm",
        "alternatives": alternatives,
        "files": [{ "type": "img", "path": "/escalas-clave-sol/A-FSm.png" }],
        "duration": 10
    },
    {
        "question": "",
        "answer": "Bb-Gm",
        "alternatives": alternatives,
        "files": [{ "type": "img", "path": "/escalas-clave-sol/Bb-Gm.png" }],
        "duration": 10
    },
    {
        "question": "",
        "answer": "B-GSm",
        "alternatives": alternatives,
        "files": [{ "type": "img", "path": "/escalas-clave-sol/B-GSm.png" }],
        "duration": 10
    },
    {
        "question": "",
        "answer": "Cb-Abm",
        "alternatives": alternatives,
        "files": [{ "type": "img", "path": "/escalas-clave-sol/Cb-Abm.png" }],
        "duration": 10
    },
    {
        "question": "",
        "answer": "CS-ASm",
        "alternatives": alternatives,
        "files": [{ "type": "img", "path": "/escalas-clave-sol/CS-ASm.png" }],
        "duration": 10
    },
    {
        "question": "",
        "answer": "D-Bm",
        "alternatives": alternatives,
        "files": [{ "type": "img", "path": "/escalas-clave-sol/D-Bm.png" }],
        "duration": 10
    },
    {
        "question": "",
        "answer": "Dm-Bbm",
        "alternatives": alternatives,
        "files": [{ "type": "img", "path": "/escalas-clave-sol/Dm-Bbm.png" }],
        "duration": 10
    },
    {
        "question": "",
        "answer": "Eb-Cm",
        "alternatives": alternatives,
        "files": [{ "type": "img", "path": "/escalas-clave-sol/Eb-Cm.png" }],
        "duration": 10
    },
    {
        "question": "",
        "answer": "E-CSm",
        "alternatives": alternatives,
        "files": [{ "type": "img", "path": "/escalas-clave-sol/E-CSm.png" }],
        "duration": 10
    },
    {
        "question": "",
        "answer": "F-Dm",
        "alternatives": alternatives,
        "files": [{ "type": "img", "path": "/escalas-clave-sol/F-Dm.png" }],
        "duration": 10
    },
    {
        "question": "",
        "answer": "FS-DSm",
        "alternatives": alternatives,
        "files": [{ "type": "img", "path": "/escalas-clave-sol/FS-DSm.png" }],
        "duration": 10
    },
    {
        "question": "",
        "answer": "Gb-Ebm",
        "alternatives": alternatives,
        "files": [{ "type": "img", "path": "/escalas-clave-sol/Gb-Ebm.png" }],
        "duration": 10
    },
    {
        "question": "",
        "answer": "G-Em",
        "alternatives": alternatives,
        "files": [{ "type": "img", "path": "/escalas-clave-sol/G-Em.png" }],
        "duration": 10
    }
];

export default function Page() {
    return <Quiz questions={questions} />
}