"use client";

import Quiz from "@/app/components/Quiz";
import { fisherYatesShuffle } from "@/utils";

type QuestionType = {
    question: string;
    answer: string;
    alternatives: string[];
    files: { type: "img" | "audio" | "video" | "youtube", path: string }[];
    duration: number;
}

const notes: string[] = fisherYatesShuffle(["C", "D", "E", "F", "G", "A", "B"]);

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