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

const notesShuffled: string[] = fisherYatesShuffle(["C", "D", "E", "F", "G", "A", "B"]);
const notesUnshuffled = ["C", "D", "E", "F", "G", "A", "B"];
const questions: QuestionType[] = [];

// Perguntas sobre a próxima nota
for (let i = 0; i < notesUnshuffled.length; i++) {
    const note = notesUnshuffled[i];
    const nextNote = notesUnshuffled[(i + 1) % notesUnshuffled.length];

    questions.push({
        question: "Depois de " + note,
        answer: nextNote,
        alternatives: notesShuffled,
        files: [],
        duration: 3
    });
}

// Perguntas sobre a nota anterior
for (let i = 0; i < notesUnshuffled.length; i++) {
    const note = notesUnshuffled[i];
    const prevNote = notesUnshuffled[(i - 1 + notesUnshuffled.length) % notesUnshuffled.length];
    questions.push({
        question: "Antes de " + note,
        answer: prevNote,
        alternatives: notesShuffled,
        files: [],
        duration: 3
    });
}

export default function Page() {
    return <Quiz questions={questions} />
}