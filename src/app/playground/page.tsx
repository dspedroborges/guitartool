"use client";

import { getNoteBySimilarity, getScaleByKeyAndPattern, guitarNotes } from "@/utils";
import { useState } from "react";
import ArmNote from "../components/ArmNote";
import GoBack from "../components/GoBack";

export default function Home() {
    const [toHighlight, setToHighlight] = useState<string[]>([]);
    const [pattern, setPattern] = useState("");
    const [key, setKey] = useState("");

    const getHighLight = (note: string) => {
        if (key !== "" && getNoteBySimilarity(key, [note]) !== -1) {
            return "strong";
        }

        if (getNoteBySimilarity(note, toHighlight) !== -1) {
            return "weak";
        }

        return "none";
    }

    return (
        <main className="min-h-screen bg-gray-950 bg-opacity-80 bg-blend-multiply bg-[url('/guitar.jpg')] bg-center bg-cover">
            <GoBack/>
            <div className="w-full">
                {
                    guitarNotes.map((string, i) => {
                        return (
                            <div key={i} className="flex bg-gray-950">
                                {
                                    string.map((note, j) => {
                                        return (
                                            <ArmNote
                                                key={j}
                                                note={note}
                                                highLightType={getHighLight(note)}
                                                isReference={i === 5 && j === 4 || i === 5 && j === 6 || i === 5 && j === 8}
                                                showNoteValue={true}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>

            <form onSubmit={(e) => {
                e.preventDefault();
                if (key !== "" && pattern !== "") {
                    setToHighlight(getScaleByKeyAndPattern(key, pattern));
                }
            }} className="fixed bottom-0 left-0 w-full flex h-[50px]">
                <select onChange={(e) => setKey(e.target.value)} className="bg-gray-950 text-white p-2 text-lg w-full h-full border-4 border-blue-600 outline-blue-700">
                    <option value="">Selecione uma opção</option>
                    <option value="C">C</option>
                    <option value="C#">C#</option>
                    <option value="D">D</option>
                    <option value="D#">D#</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="F#">F#</option>
                    <option value="G">G</option>
                    <option value="G#">G#</option>
                    <option value="A">A</option>
                    <option value="A#">A#</option>
                    <option value="B">B</option>
                </select>
                <select onChange={(e) => setPattern(e.target.value)} className="bg-gray-950 text-white p-2 text-lg w-full h-full border-4 border-blue-600 outline-blue-700">
                    <option value="">Selecione uma opção</option>

                    {/* Modos gregos */}
                    <optgroup label="Modos Gregos">
                        <option value="2M 3M 4J 5J 6M 7M 8J">Maior natural (Jônio)</option>
                        <option value="2M 3m 4J 5J 6M 7m 8J">Dórico</option>
                        <option value="2M 3m 4J 5J 6m 7m 8J">Frígio</option>
                        <option value="2M 3M 4J 5J 6M 7M 8J">Lídio</option>
                        <option value="2M 3M 4J 5J 6M 7m 8J">Mixolídio</option>
                        <option value="2M 3m 4J 5J 6m 7m 8J">Eólio (Menor natural)</option>
                        <option value="2M 3m 4J 5J 6m 7M 8J">Lócrio</option>
                    </optgroup>

                    {/* Escalas japonesas */}
                    <optgroup label="Escalas Japonesas">
                        <option value="2M 4J 5J 6m 8J">In Sen</option>
                        <option value="2m 4J 5J 6m 8J">Hirajoshi</option>
                        <option value="2m 4J 5J 7m 8J">Iwato</option>
                        <option value="2M 3M 5J 6M 8J">Yo</option>
                        <option value="2M 4J 5J 7m 8J">Kumoi</option>
                    </optgroup>
                </select>
                <button className="bg-blue-600 hover:bg-blue-700 block w-full text-white uppercase ring-blue-500 basis-1/2">Enviar</button>
            </form>
        </main>
    );
}