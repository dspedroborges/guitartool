"use client";

import Quiz from "@/app/components/Quiz";

type QuestionType = {
    question: string;
    answer: string;
    alternatives: string[];
    files: { type: "img" | "audio" | "video" | "youtube", path: string }[];
    duration: number;
}

const questions: QuestionType[] = [
    {
        question: "Escala maior sem acidentes",
        answer: "C",
        duration: 10,
        alternatives: ["C", "D", "E", "F", "G", "A", "B"],
        files: []
    },
    {
        question: "Escala maior com acidentes F# e C#",
        answer: "D",
        duration: 10,
        alternatives: ["C", "D", "E", "F", "G", "A", "B"],
        files: []
    },
    {
        question: "Escala maior com acidentes F#, G#, C# e D#",
        answer: "E",
        duration: 10,
        alternatives: ["C", "D", "E", "F", "G", "A", "B"],
        files: []
    },
    {
        question: "Escala maior com acidentes Bb",
        answer: "F",
        duration: 10,
        alternatives: ["C", "D", "E", "F", "G", "A", "B"],
        files: []
    },
    {
        question: "Escala maior com acidente F#",
        answer: "G",
        duration: 10,
        alternatives: ["C", "D", "E", "F", "G", "A", "B"],
        files: []
    },
    {
        question: "Escala maior com acidente C#, F# e G$",
        answer: "A",
        duration: 10,
        alternatives: ["C", "D", "E", "F", "G", "A", "B"],
        files: []
    },
    {
        question: "Escala maior com acidente C#, D#, F#, G# e A#",
        answer: "B",
        duration: 10,
        alternatives: ["C", "D", "E", "F", "G", "A", "B"],
        files: []
    },
    {
        question: "Escala menor com acidentes Eb, Ab e Bb",
        answer: "Cm",
        duration: 10,
        alternatives: ["Cm", "Dm", "Em", "Fm", "Gm", "Am", "Bm"],
        files: []
    },
    {
        question: "Escala menor com acidentes Bb",
        answer: "Dm",
        duration: 10,
        alternatives: ["Cm", "Dm", "Em", "Fm", "Gm", "Am", "Bm"],
        files: []
    },
    {
        question: "Escala menor com acidentes F#",
        answer: "Em",
        duration: 10,
        alternatives: ["Cm", "Dm", "Em", "Fm", "Gm", "Am", "Bm"],
        files: []
    },
    {
        question: "Escala menor com acidentes Ab, Bb, Db e Eb",
        answer: "Fm",
        duration: 10,
        alternatives: ["Cm", "Dm", "Em", "Fm", "Gm", "Am", "Bm"],
        files: []
    },
    {
        question: "Escala menor com acidentes Bb e Eb",
        answer: "Gm",
        duration: 10,
        alternatives: ["Cm", "Dm", "Em", "Fm", "Gm", "Am", "Bm"],
        files: []
    },
    {
        question: "Escala menor sem acidentes",
        answer: "Am",
        duration: 10,
        alternatives: ["Cm", "Dm", "Em", "Fm", "Gm", "Am", "Bm"],
        files: []
    },
    {
        question: "Escala menor com acidentes C# e F#",
        answer: "Bm",
        duration: 10,
        alternatives: ["Cm", "Dm", "Em", "Fm", "Gm", "Am", "Bm"],
        files: []
    },
    {
        "question": "",
        "answer": "Dórico",
        "duration": 120,
        "alternatives": ["Dórico", "Eólio", "Frígio", "Jônio", "Lídio", "Lócrio", "Mixolídio", "Penta blues menor", "Pentatônica menor"],
        "files": [
            { "type": "img", "path": "/scales/dorico/1.png" },
            { "type": "img", "path": "/scales/dorico/2.png" },
            { "type": "img", "path": "/scales/dorico/3.png" },
            { "type": "img", "path": "/scales/dorico/4.png" },
            { "type": "img", "path": "/scales/dorico/5.png" }
        ]
    },
    {
        "question": "",
        "answer": "Eólio",
        "duration": 120,
        "alternatives": ["Dórico", "Eólio", "Frígio", "Jônio", "Lídio", "Lócrio", "Mixolídio", "Penta blues menor", "Pentatônica menor"],
        "files": [
            { "type": "img", "path": "/scales/eolio/1.png" },
            { "type": "img", "path": "/scales/eolio/2.png" },
            { "type": "img", "path": "/scales/eolio/3.png" },
            { "type": "img", "path": "/scales/eolio/4.png" },
            { "type": "img", "path": "/scales/eolio/5.png" }
        ]
    },
    {
        "question": "",
        "answer": "Frígio",
        "duration": 120,
        "alternatives": ["Dórico", "Eólio", "Frígio", "Jônio", "Lídio", "Lócrio", "Mixolídio", "Penta blues menor", "Pentatônica menor"],
        "files": [
            { "type": "img", "path": "/scales/frigio/1.png" },
            { "type": "img", "path": "/scales/frigio/2.png" },
            { "type": "img", "path": "/scales/frigio/3.png" },
            { "type": "img", "path": "/scales/frigio/4.png" },
            { "type": "img", "path": "/scales/frigio/5.png" }
        ]
    },
    {
        "question": "",
        "answer": "Jônio",
        "duration": 120,
        "alternatives": ["Dórico", "Eólio", "Frígio", "Jônio", "Lídio", "Lócrio", "Mixolídio", "Penta blues menor", "Pentatônica menor"],
        "files": [
            { "type": "img", "path": "/scales/jonio/1.png" },
            { "type": "img", "path": "/scales/jonio/2.png" },
            { "type": "img", "path": "/scales/jonio/3.png" },
            { "type": "img", "path": "/scales/jonio/4.png" },
            { "type": "img", "path": "/scales/jonio/5.png" }
        ]
    },
    {
        "question": "",
        "answer": "Lídio",
        "duration": 120,
        "alternatives": ["Dórico", "Eólio", "Frígio", "Jônio", "Lídio", "Lócrio", "Mixolídio", "Penta blues menor", "Pentatônica menor"],
        "files": [
            { "type": "img", "path": "/scales/lidio/1.png" },
            { "type": "img", "path": "/scales/lidio/2.png" },
            { "type": "img", "path": "/scales/lidio/3.png" },
            { "type": "img", "path": "/scales/lidio/4.png" },
            { "type": "img", "path": "/scales/lidio/5.png" }
        ]
    },
    {
        "question": "",
        "answer": "Lócrio",
        "duration": 120,
        "alternatives": ["Dórico", "Eólio", "Frígio", "Jônio", "Lídio", "Lócrio", "Mixolídio", "Penta blues menor", "Pentatônica menor"],
        "files": [
            { "type": "img", "path": "/scales/locrio/1.png" },
            { "type": "img", "path": "/scales/locrio/2.png" },
            { "type": "img", "path": "/scales/locrio/3.png" },
            { "type": "img", "path": "/scales/locrio/4.png" },
            { "type": "img", "path": "/scales/locrio/5.png" }
        ]
    },
    {
        "question": "",
        "answer": "Mixolídio",
        "duration": 120,
        "alternatives": ["Dórico", "Eólio", "Frígio", "Jônio", "Lídio", "Lócrio", "Mixolídio", "Penta blues menor", "Pentatônica menor"],
        "files": [
            { "type": "img", "path": "/scales/mixolidio/1.png" },
            { "type": "img", "path": "/scales/mixolidio/2.png" },
            { "type": "img", "path": "/scales/mixolidio/3.png" },
            { "type": "img", "path": "/scales/mixolidio/4.png" },
            { "type": "img", "path": "/scales/mixolidio/5.png" }
        ]
    },
    {
        "question": "",
        "answer": "Penta blues menor",
        "duration": 120,
        "alternatives": ["Dórico", "Eólio", "Frígio", "Jônio", "Lídio", "Lócrio", "Mixolídio", "Penta blues menor", "Pentatônica menor"],
        "files": [
            { "type": "img", "path": "/scales/penta-blues-menor/1.png" },
            { "type": "img", "path": "/scales/penta-blues-menor/2.png" },
            { "type": "img", "path": "/scales/penta-blues-menor/3.png" },
            { "type": "img", "path": "/scales/penta-blues-menor/4.png" },
            { "type": "img", "path": "/scales/penta-blues-menor/5.png" }
        ]
    },
    {
        "question": "",
        "answer": "Pentatônica menor",
        "duration": 120,
        "alternatives": ["Dórico", "Eólio", "Frígio", "Jônio", "Lídio", "Lócrio", "Mixolídio", "Penta blues menor", "Pentatônica menor"],
        "files": [
            { "type": "img", "path": "/scales/pentatonica-menor/1.png" },
            { "type": "img", "path": "/scales/pentatonica-menor/2.png" },
            { "type": "img", "path": "/scales/pentatonica-menor/3.png" },
            { "type": "img", "path": "/scales/pentatonica-menor/4.png" },
            { "type": "img", "path": "/scales/pentatonica-menor/5.png" }
        ]
    }
];

export default function Page() {
    return <Quiz questions={questions} />
}