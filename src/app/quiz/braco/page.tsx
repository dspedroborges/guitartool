"use client";

import ArmNote from "@/app/components/ArmNote";
import GoBack from "@/app/components/GoBack";
import { getNoteBySimilarity, getRandomNumberInRange, guitarNotes } from "@/utils";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [randomNote, setRandomNote] = useState([0, 0]);
  const [history, setHistory] = useState<string[]>([]);
  const [isRightAnswer, setIsRightAnswer] = useState<number>(-1);
  const refInput = useRef<HTMLInputElement>(null);
  const [strings, setStrings] = useState(-1);
  const [stats, setStats] = useState({
    totalRight: 0,
    totalTried: 0,
  });

  useEffect(() => {
    setRandomNote([strings === -1 ? getRandomNumberInRange(0, guitarNotes.length - 1) : strings, getRandomNumberInRange(0, guitarNotes[0].length - 1)]);
    refInput.current?.focus();
  }, []);

  const handleAnswer = (a: string) => {
    let r = "";
    if (a.length > 1) {
      let x = a.slice(1);
      r = a.charAt(0).toUpperCase() + x;
    } else {
      r = a.toUpperCase();
    }
    
    return r;
  }

  return (
    <>
      <GoBack/>
      <p className="text-white text-center mb-2">Desempenho: {Number.isNaN(Math.round(stats.totalRight / stats.totalTried * 100)) ? 0 : Math.round(stats.totalRight / stats.totalTried * 100)}% </p>
      {
        (isRightAnswer === 1) && <div className="animate-pulse z-50 fixed bottom-16 left-1/2 -translate-x-1/2 w-1/2 rounded-xl bg-blue-900 text-white p-2 text-center font-bold">Acertou!</div>
      }

      {
        (isRightAnswer === 0) && <div className="animate-pulse z-50 fixed bottom-16 left-1/2 -translate-x-1/2 w-1/2 rounded-xl bg-red-900 text-white p-2 text-center font-bold">Errou. Era {history[history.length - 1].replace(/>.*/, '')}!</div>
      }

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
                        highLightType={(randomNote[0] == i && randomNote[1] == j) ? "weak" : "none"}
                        isReference={i === 5 && j === 4 || i === 5 && j === 6 || i === 5 && j === 8}
                        showNoteValue={false}
                      />
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>

      <select onChange={(e) => {
        setStrings(Number(e.target.value));
        setRandomNote([Number(e.target.value) === -1 ? getRandomNumberInRange(0, guitarNotes.length - 1) : Number(e.target.value), getRandomNumberInRange(0, guitarNotes[0].length - 1)]);
      }} value={strings} className="mt-12 mx-auto block p-2 rounded-xl text-lg bg-gray-600 text-white">
        <option value="-1">Todas</option>
        <option value="0">e</option>
        <option value="1">B</option>
        <option value="2">G</option>
        <option value="3">D</option>
        <option value="4">A</option>
        <option value="5">E</option>
      </select>

      <form action={(formData: FormData) => {
        const answer = handleAnswer(formData.get("answer") as string);
        if (refInput.current) {
          if (getNoteBySimilarity(answer, [guitarNotes[randomNote[0]][randomNote[1]]]) !== -1) {
            setIsRightAnswer(1);
            setStats({ totalTried: stats.totalTried + 1, totalRight: stats.totalRight + 1})
          } else {
            setIsRightAnswer(0);
            setStats({ ...stats, totalTried: stats.totalTried + 1 })
          }

          setTimeout(() => {
            setIsRightAnswer(-1);
          }, 2000);

          refInput.current.focus();
          refInput.current.value = "";
          setHistory([...history, guitarNotes[randomNote[0]][randomNote[1]]]);
          setRandomNote([strings === -1 ? getRandomNumberInRange(0, guitarNotes.length - 1) : strings, getRandomNumberInRange(0, guitarNotes[0].length - 1)]);
        }

      }} className="fixed bottom-0 left-0 w-full flex h-[50px]">
        <input ref={refInput} type="text" id="answer" name="answer" className="focus:outline-none p-2 text-lg w-full h-full border-4 bg-gray-950 text-white border-blue-600 outline-blue-700" />
        <button className="bg-blue-600 hover:bg-blue-700 block w-full text-white uppercase ring-blue-500 basis-1/2">Tentar</button>
      </form>
    </>
  );
}