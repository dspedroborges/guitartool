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

const notes: string[] = ["C", "D", "E", "F", "G", "A", "B"];

const questions: QuestionType[] = [];

// Perguntas sobre a próxima nota
for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    const nextNote = notes[(i + 1) % notes.length];

    questions.push({
        question: "Depois de " + note,
        answer: nextNote,
        alternatives: notes,
        files: [],
        duration: 3
    });
}

// Perguntas sobre a nota anterior
for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    const prevNote = notes[(i - 1 + notes.length) % notes.length];
    questions.push({
        question: "Antes de " + note,
        answer: prevNote,
        alternatives: notes,
        files: [],
        duration: 3
    });
}

export default function Page() {
    return <Quiz questions={questions} />
}