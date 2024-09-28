"use client";

import AudioPlayer from "@/app/components/AudioPlayer";
import Quiz from "@/app/components/Quiz";
import { getInterval, getNoteByNoteAndInterval, getNoteBySimilarity, notesAndAccidents, possibleIntervals, shuffleArray } from "@/utils";
import { useEffect, useState } from "react";

type QuestionType = {
    question: string;
    answer: string;
    alternatives: string[];
    files: { type: "img" | "audio" | "video" | "youtube", path: string }[];
    duration: number;
};

const notes = ["C", "D", "E", "F", "G", "A", "B"];

let questions: QuestionType[] = [];
for (let i = 0; i < notes.length; i++) {
    for (let j = 0; j < possibleIntervals.length; j++) {
        questions.push({
            question: `${possibleIntervals[j]} de ${notes[i]}`,
            answer: getNoteByNoteAndInterval(notes[i], possibleIntervals[j]),
            alternatives: ["C/B#", "C#/Db", "D/Ebb", "D#/Eb", "E/Fb", "F/Gbb", "F#/Gb", "G/Abb", "G#/Ab", "A/Bbb", "A#/Bb", "B/Cb",],
            files: [],
            duration: 10
        });
    }
}

export default function Page() {
    return <Quiz questions={questions} isItNote={true} />
}