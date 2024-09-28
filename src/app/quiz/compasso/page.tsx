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
        "question": "Bella Ciao",
        "answer": "2/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=4CI3lhyNKfo" }],
        "duration": 120
    },
    {
        "question": "Super Smash Bros. Ultimate - Advent: One-Winged Angel",
        "answer": "2/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=IwVWrR6Ptxg" }],
        "duration": 120
    },
    {
        "question": "The Wheels On The Bus",
        "answer": "2/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=e_04ZrNroTo" }],
        "duration": 120
    },
    {
        "question": "What Shall We Do With The Drunken Sailor",
        "answer": "2/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=qGyPuey-1Jw" }],
        "duration": 120
    },
    {
        "question": "Kalinka",
        "answer": "2/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=m8m2BYv02Nw" }],
        "duration": 120
    },
    {
        "question": "Simon & Garfunkel - Kathy’s Song",
        "answer": "2/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=fXZyDtzDJMY" }],
        "duration": 120
    },
    {
        "question": "Down To The River To Pray – O Brother Where Art Thou",
        "answer": "2/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=ZCnmYSIzZBc" }],
        "duration": 120
    },
    {
        "question": "The Beatles - Let It Be",
        "answer": "4/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=QDYfEBY9NM4" }],
        "duration": 120
    },
    {
        "question": "Queen - We Will Rock You",
        "answer": "4/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=-tJYN-eG1zk" }],
        "duration": 120
    },
    {
        "question": "Bob Marley - One Love",
        "answer": "4/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=vdB-8eLEW8g" }],
        "duration": 120
    },
    {
        "question": "Led Zeppelin - Whole Lotta Love",
        "answer": "4/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=HQmmM_qwG4k" }],
        "duration": 120
    },
    {
        "question": "Bruno Mars - The Lazy Song",
        "answer": "4/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=fLexgOxsZu0" }],
        "duration": 120
    },
    {
        "question": "Dmitri Shostakovich - Waltz No. 2",
        "answer": "3/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=mmCnQDUSO4I" }],
        "duration": 120
    },
    {
        "question": "Strauss - The Blue Danube Waltz",
        "answer": "3/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=cKkDMiGUbUw" }],
        "duration": 120
    },
    {
        "question": "The Beatles - Lucy In The Sky With Diamonds",
        "answer": "3/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=naoknj1ebqI" }],
        "duration": 120
    },
    {
        "question": "Rihanna - Love on the Brain",
        "answer": "3/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=QMP-o8WXSPM" }],
        "duration": 120
    },
    {
        "question": "Ariana Grande - Imagine",
        "answer": "3/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=oRcXOnLkM7A" }],
        "duration": 120
    },
    {
        "question": "Billie Eilish - idonwannabeyouanymore",
        "answer": "3/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=-tn2S3kJlyU" }],
        "duration": 120
    },
    {
        "question": "Demi Lovato - Stone Cold",
        "answer": "3/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=WDAd0S92Uko" }],
        "duration": 120
    },
    {
        "question": "Joji - Glimpse of Us",
        "answer": "3/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=FvOpPeKSf_4" }],
        "duration": 120
    },
    {
        "question": "John Denver - Annie's song",
        "answer": "3/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=RNOTF-znQyw" }],
        "duration": 120
    },
    {
        "question": "Bob Dylan - The Times They Are A-Changin'",
        "answer": "3/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=9ywYohqoM60" }],
        "duration": 120
    },
    {
        "question": "Snarky Puppy - Blinky",
        "answer": "3/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=gQ99OMlI5cg" }],
        "duration": 120
    },
    {
        "question": "Tool - The Grudge",
        "answer": "5/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=3BXyEUOuNds" }],
        "duration": 120
    },
    {
        "question": "Hozier - From Eden",
        "answer": "5/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=cI0wUoCLnLk" }],
        "duration": 120
    },
    {
        "question": "Muse - Animals",
        "answer": "5/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=tFG_5PBl2K8" }],
        "duration": 120
    },
    {
        "question": "Queens of the Stone Age - Hanging Tree",
        "answer": "5/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=na9FlXLz0VM" }],
        "duration": 120
    },
    {
        "question": "Dave Brubeck - Take Five",
        "answer": "5/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=-DHuW1h1wHw" }],
        "duration": 120
    },
    {
        "question": "Snarky Puppy - Lingus",
        "answer": "5/4",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=L_XJ_s5IsQc" }],
        "duration": 120
    },
    {
        "question": "The Animals - House of the Rising Sun",
        "answer": "6/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=N4bFqW_eu2I" }],
        "duration": 120
    },
    {
        "question": "REM - Everybody Hurts",
        "answer": "6/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=5rOiW_xY-kc" }],
        "duration": 120
    },
    {
        "question": "Elvis Presley - Can't Help Falling In Love",
        "answer": "6/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=vGJTaP6anOU" }],
        "duration": 120
    },
    {
        "question": "Linkin Park - From the Inside",
        "answer": "6/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=YLHpvjrFpe0" }],
        "duration": 120
    },
    {
        "question": "Pink Floyd - Shine On You Crazy Diamond",
        "answer": "6/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=cWGE9Gi0bB0" }],
        "duration": 120
    },
    {
        "question": "Creedence Clearwater Revival - I Put A Spell On You",
        "answer": "6/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=KWxDGQm2hKk" }],
        "duration": 120
    },
    {
        "question": "The Beatles - You’ve Got To Hide Your Love Away",
        "answer": "6/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=V8nLraecPRY" }],
        "duration": 120
    },
    {
        "question": "Metallica - Nothing Else Matters",
        "answer": "6/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=ozXZnwYTMbs" }],
        "duration": 120
    },
    {
        "question": "Red Hot Chili Peppers - Breaking The Girl",
        "answer": "6/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=iyu04pqC8lE" }],
        "duration": 120
    },
    {
        "question": "Radiohead - Subterranean Homesick Alien",
        "answer": "6/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=_fTWmUlTEqE" }],
        "duration": 120
    },
    {
        "question": "Paul McCartney and Wings - Let Me Roll It",
        "answer": "6/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=ly_G9QBX_f0" }],
        "duration": 120
    },
    {
        "question": "Foo Fighters - Times Like These",
        "answer": "7/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=rhzmNRtIp8k" }],
        "duration": 120
    },
    {
        "question": "Rush - Tom Sawyer",
        "answer": "7/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=auLBLk4ibAk" }],
        "duration": 120
    },
    {
        "question": "Pink Floyd - Money",
        "answer": "7/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=2aW7HweAf3o" }],
        "duration": 120
    },
    {
        "question": "Radiohead - 2+2+5=7",
        "answer": "7/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=2w6kHS_IRrE" }],
        "duration": 120
    },
    {
        "question": "Broken Social Scene - Shoreline",
        "answer": "7/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=Uev2J_cBHjQ" }],
        "duration": 120
    },
    {
        "question": "The Beatles - All You Need Is Love",
        "answer": "7/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=_7xMfIp-irg" }],
        "duration": 120
    },
    {
        "question": "Radiohead - Paranoid Android",
        "answer": "7/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=Lt8AfIeJOxw" }],
        "duration": 120
    },
    {
        "question": "Dave Brubeck - Blue Rondo a la Turk",
        "answer": "9/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=vKNZqM0d-xo" }],
        "duration": 120
    },
    {
        "question": "Bill Chase - Weird Song #1",
        "answer": "9/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=73sRG_oiZu4" }],
        "duration": 120
    },
    {
        "question": "Clair de Lune",
        "answer": "9/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=JGJPVl7iQUM" }],
        "duration": 120
    },
    {
        "question": "Cat Stevens - Morning Has Broken",
        "answer": "9/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=DmAOBosGlHY" }],
        "duration": 120
    },
    {
        "question": "Wind Waker Theme - Title Theme",
        "answer": "9/8",
        "alternatives": ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8", "9/8"],
        "files": [{ "type": "youtube", "path": "https://www.youtube.com/watch?v=gEoU70DXr90" }],
        "duration": 120
    },
];

export default function Page() {
    return (
        <>
            <Quiz questions={questions} />
            <ul className="text-white font-bold flex flex-col items-center justify-center my-8">
                <li>2/4 = 2 (tata)</li>
                <li>3/4 = 3 (tatata)</li>
                <li>4/4 = 4 (tatata)</li>
                <li>5/4 = 3 + 2 (tatata tata)</li>
                <li>6/8 = 3 + 3 (tatata tatata, pêndulo)</li>
                <li>7/4 = 4 + 3 (tatata tatata)</li>
                <li>7/8 = 2 + 2 + 3 (tata tata tatata)</li>
                <li>9/8 = 3 + 3 + 3 (tatata tatata tatata)</li>
            </ul>
        </>
    )
}