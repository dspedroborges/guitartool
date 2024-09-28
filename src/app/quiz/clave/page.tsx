"use client";

import AudioPlayer from "@/app/components/AudioPlayer";
import Quiz from "@/app/components/Quiz";
import { getNoteBySimilarity, shuffleArray } from "@/utils";
import { useEffect, useState } from "react";
import { BsPause, BsPlay } from "react-icons/bs";

type QuestionType = {
    question: string;
    answer: string;
    alternatives: string[];
    files: { type: "img" | "audio" | "video" | "youtube", path: string }[];
    duration: number;
}

const questions: QuestionType[] = [
    {
        "question": "",
        "answer": "A",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/A1.png" },
        ]
    },
    {
        "question": "",
        "answer": "A",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/A2.png" },
        ]
    },
    {
        "question": "",
        "answer": "A",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/A3.png" },
        ]
    },
    {
        "question": "",
        "answer": "B",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/B1.png" },
        ]
    },
    {
        "question": "",
        "answer": "B",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/B2.png" },
        ]
    },
    {
        "question": "",
        "answer": "B",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/B3.png" },
        ]
    },
    {
        "question": "",
        "answer": "C",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/C1.png" },
        ]
    },
    {
        "question": "",
        "answer": "C",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/C2.png" },
        ]
    },
    {
        "question": "",
        "answer": "C",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/C3.png" },
        ]
    },
    {
        "question": "",
        "answer": "D",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/D1.png" },
        ]
    },
    {
        "question": "",
        "answer": "D",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/D2.png" },
        ]
    },
    {
        "question": "",
        "answer": "D",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/D3.png" },
        ]
    },
    {
        "question": "",
        "answer": "E",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/E1.png" },
        ]
    },
    {
        "question": "",
        "answer": "E",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/E2.png" },
        ]
    },
    {
        "question": "",
        "answer": "E",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/E3.png" },
        ]
    },
    {
        "question": "",
        "answer": "E",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/E4.png" },
        ]
    },
    {
        "question": "",
        "answer": "F",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/F1.png" },
        ]
    },
    {
        "question": "",
        "answer": "F",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/F2.png" },
        ]
    },
    {
        "question": "",
        "answer": "F",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/F3.png" },
        ]
    },
    {
        "question": "",
        "answer": "F",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/F4.png" },
        ]
    },
    {
        "question": "",
        "answer": "G",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/G1.png" },
        ]
    },
    {
        "question": "",
        "answer": "G",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/G2.png" },
        ]
    },
    {
        "question": "",
        "answer": "G",
        "duration": 5,
        "alternatives": ["C", "D", "E", "F", "G", "A", "B"],
        "files": [
            { "type": "img", "path": "/notas-clave-sol/G3.png" },
        ]
    },
];

export default function Page() {
    return <Quiz questions={questions} />
}