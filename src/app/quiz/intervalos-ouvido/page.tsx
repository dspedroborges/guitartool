"use client";

import Quiz from "@/app/components/Quiz";

type QuestionType = {
    question: string;
    answer: string;
    alternatives: string[];
    files: { type: "img" | "audio" | "video" | "youtube", path: string }[];
    duration: number;
}

const questions: QuestionType[] = ["A2_2major","A2_2minor","A2_3major","A2_3minor","A2_4J","A2_5J","A2_6major","A2_6minor","A2_7major","A2_7minor","A2_Tritone","A3_2major","A3_2minor","A3_3major","A3_3minor","A3_4J","A3_5J","A3_6major","A3_6minor","A3_7minor","A3_Tritone","A4_2major","A4_2minor","A4_3major","A4_3minor","A4_4J","A4_5J","A4_Tritone","AS2_2major","AS2_2minor","AS2_3major","AS2_3minor","AS2_4J","AS2_5J","AS2_6major","AS2_6minor","AS2_7major","AS2_7minor","AS2_Tritone","AS3_2major","AS3_2minor","AS3_3major","AS3_3minor","AS3_4J","AS3_5J","AS3_6major","AS3_6minor","AS3_Tritone","AS4_2major","AS4_2minor","AS4_3major","AS4_3minor","AS4_4J","AS4_Tritone","B2_2major","B2_2minor","B2_3major","B2_3minor","B2_4J","B2_5J","B2_6major","B2_6minor","B2_7minor","B2_Tritone","B3_2major","B3_2minor","B3_3major","B3_3minor","B3_4J","B3_5J","B3_6major","B3_6minor","B3_7major","B3_7minor","B3_Tritone","B4_2major","B4_2minor","B4_3major","B4_3minor","B4_4J","C3_2major","C3_2minor","C3_3major","C3_3minor","C3_4J","C3_5J","C3_6major","C3_6minor","C3_Tritone","C4_2major","C4_2minor","C4_3major","C4_3minor","C4_4J","C4_5J","C4_6major","C4_6minor","C4_7major","C4_7minor","C4_Tritone","C5_2major","C5_2minor","C5_3major","C5_3minor","CS3_2major","CS3_2minor","CS3_3major","CS3_3minor","CS3_4J","CS3_5J","CS3_6minor","CS3_Tritone","CS4_2major","CS4_2minor","CS4_3major","CS4_3minor","CS4_4J","CS4_5J","CS4_6major","CS4_6minor","CS4_7minor","CS4_Tritone","CS5_2major","CS5_2minor","CS5_3minor","D3_2major","D3_2minor","D3_3major","D3_3minor","D3_4J","D3_5J","D3_6major","D3_6minor","D3_7major","D3_7minor","D3_Tritone","D4_2major","D4_2minor","D4_3major","D4_3minor","D4_4J","D4_5J","D4_6major","D4_6minor","D4_Tritone","D5_2major","D5_2minor","DS3_2major","DS3_2minor","DS3_3major","DS3_3minor","DS3_4J","DS3_5J","DS3_6major","DS3_6minor","DS3_7major","DS3_7minor","DS3_Tritone","DS4_2major","DS4_2minor","DS4_3major","DS4_3minor","DS4_4J","DS4_5J","DS4_6minor","DS4_Tritone","DS5_2minor","E2_2major","E2_2minor","E2_3major","E2_3minor","E2_4J","E2_5J","E2_6major","E2_6minor","E2_7major","E2_7minor","E2_Tritone","E3_2major","E3_2minor","E3_3major","E3_3minor","E3_4J","E3_5J","E3_6major","E3_6minor","E3_7minor","E3_Tritone","E4_2major","E4_2minor","E4_3major","E4_3minor","E4_4J","E4_5J","E4_6major","E4_6minor","E4_7major","E4_7minor","E4_Tritone","F2_2major","F2_2minor","F2_3major","F2_3minor","F2_4J","F2_5J","F2_6major","F2_6minor","F2_7major","F2_7minor","F2_Tritone","F3_2major","F3_2minor","F3_3major","F3_3minor","F3_4J","F3_5J","F3_6major","F3_6minor","F3_Tritone","F4_2major","F4_2minor","F4_3major","F4_3minor","F4_4J","F4_5J","F4_6major","F4_6minor","F4_7major","F4_7minor","F4_Tritone","FS2_2major","FS2_2minor","FS2_3major","FS2_3minor","FS2_4J","FS2_5J","FS2_6major","FS2_6minor","FS2_7minor","FS2_Tritone","FS3_2major","FS3_2minor","FS3_3major","FS3_3minor","FS3_4J","FS3_5J","FS3_6minor","FS3_Tritone","FS4_2major","FS4_2minor","FS4_3major","FS4_3minor","FS4_4J","FS4_5J","FS4_6major","FS4_6minor","FS4_7minor","FS4_Tritone","G2_2major","G2_2minor","G2_3major","G2_3minor","G2_4J","G2_5J","G2_6major","G2_6minor","G2_Tritone","G3_2major","G3_2minor","G3_3major","G3_3minor","G3_4J","G3_5J","G3_6major","G3_6minor","G3_7major","G3_7minor","G3_Tritone","G4_2major","G4_2minor","G4_3major","G4_3minor","G4_4J","G4_5J","G4_6major","G4_6minor","G4_Tritone","GS2_2major","GS2_2minor","GS2_3major","GS2_3minor","GS2_4J","GS2_5J","GS2_6minor","GS2_Tritone","GS3_2major","GS3_2minor","GS3_3major","GS3_3minor","GS3_4J","GS3_5J","GS3_6major","GS3_6minor","GS3_7major","GS3_7minor","GS3_Tritone","GS4_2major","GS4_2minor","GS4_3major","GS4_3minor","GS4_4J","GS4_5J","GS4_6minor","GS4_Tritone"].map((e) => {
    return {
        question: "",
        answer: e.split("_")[1],
        alternatives: ['2minor', '2major', '3minor', '3major', '4J', '5J', '6minor', '6major', '7minor', '7major', 'Tritone'],
        files: [{"type": "audio", "path": `/intervalos/${e}.mp3`}],
        duration: 30,
    }
})

export default function Page() {
    return <Quiz questions={questions} />
}