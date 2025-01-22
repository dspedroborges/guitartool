export function fisherYatesShuffle<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const semitons: Record<string, number> = {
    "1": 0,
    "2m": 1,
    "2M": 2,
    "3m": 3,
    "3M": 4,
    "4-": 4,
    "4J": 5,
    "4A": 6,
    "5-": 6,
    "5J": 7,
    "5A": 8,
    "6m": 8,
    "6M": 9,
    "7-": 9,
    "7m": 10,
    "7M": 11,
    "8J": 12
};

export const possibleIntervals = [
    "2m",
    "2M",
    "3m",
    "3M",
    "4-",
    "4J",
    "4A",
    "5-",
    "5J",
    "5A",
    "6m",
    "6M",
    "7-",
    "7m",
    "7M",
    "8J"
]

export const notes = [
    "C", "D", "E", "F", "G", "A", "B",
    "C", "D", "E", "F", "G", "A", "B",
    "C", "D", "E", "F", "G", "A", "B",
    "C", "D", "E", "F", "G", "A", "B"
];

export const notesAndAccidents = [
    "C/B#", "C#/Db", "D/Ebb", "D#/Eb", "E/Fb", "F/Gbb", "F#/Gb", "G/Abb", "G#/Ab", "A/Bbb", "A#/Bb", "B/Cb",
    "C/B#", "C#/Db", "D/Ebb", "D#/Eb", "E/Fb", "F/Gbb", "F#/Gb", "G/Abb", "G#/Ab", "A/Bbb", "A#/Bb", "B/Cb",
    "C/B#", "C#/Db", "D/Ebb", "D#/Eb", "E/Fb", "F/Gbb", "F#/Gb", "G/Abb", "G#/Ab", "A/Bbb", "A#/Bb", "B/Cb",
    "C/B#", "C#/Db", "D/Ebb", "D#/Eb", "E/Fb", "F/Gbb", "F#/Gb", "G/Abb", "G#/Ab", "A/Bbb", "A#/Bb", "B/Cb",
];

export const hasAccident = (note: string) => {
    if (note.search("#") !== -1 || note.search("b") !== -1) {
        return true;
    }

    return false;
}

export const compareDoubleNotes = (a: string[], b: string[]) => {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) return true;
        }
    }
}

export const getNoteBySimilarity = (note: string, array: string[]) => {
    const noteSplit = note.replace(/>.*/, '').split("/");
    for (let i = 0; i < array.length; i++) {
        const currentSplit = array[i].replace(/>.*/, '').split("/");
        if (compareDoubleNotes(noteSplit, currentSplit)) return i;
    }

    return -1;
}

export const getNoteByNoteAndInterval = (note: string, interval: string) => {
    const noteWithoutAccident = note.split("")[0];
    const intervalNumber = Number(interval.split("")[0]);
    const noteIndex = notes.indexOf(noteWithoutAccident);
    const intervalNote = notes[noteIndex + (intervalNumber - 1)];
    const distanceInSemitons = semitons[interval];
    const noteIndexInAccidentsArray = getNoteBySimilarity(note, notesAndAccidents);
    const intervalNoteWithAccident = notesAndAccidents[noteIndexInAccidentsArray + distanceInSemitons];

    const split = intervalNoteWithAccident.split("/");
    if (split.length === 1) return split[0];
    if (split[0].search(intervalNote) !== -1) return split[0];
    return split[1];
}

export const getInterval = (note1: string, note2: string) => {
    for (let i = 0; i < possibleIntervals.length; i++) {
        if (getNoteByNoteAndInterval(note1, possibleIntervals[i]) === note2) {
            return possibleIntervals[i];
        }
    }

    return "8J";
}

export const getScaleByKeyAndPattern = (key: string, pattern: string) => {
    const patternSplit = pattern.split(" ");
    let notes = [];
    for (let i = 0; i < patternSplit.length; i++) {
        notes.push(getNoteByNoteAndInterval(key, patternSplit[i]));
    }

    return notes;
}

export const guitarNotes = [
    ["F>4", "F#/Gb>4", "G>4", "G#/Ab>4", "A>4", "A#/Bb>4", "B>4", "C>5", "C#/Db>5", "D>5", "D#/Eb>5", "E>5"],  // 1ª corda (Mi agudo)
    ["C>4", "C#/Db>4", "D>4", "D#/Eb>4", "E>4", "F>4", "F#/Gb>4", "G>4", "G#/Ab>4", "A>4", "A#/Bb>4", "B>4"],  // 2ª corda (Si)
    ["G#/Ab>3", "A>3", "A#/Bb>3", "B>3", "C>4", "C#/Db>4", "D>4", "D#/Eb>4", "E>4", "F>4", "F#/Gb>4", "G>4"],  // 3ª corda (Sol)
    ["D#/Eb>3", "E>3", "F>3", "F#/Gb>3", "G>3", "G#/Ab>3", "A>3", "A#/Bb>3", "B>3", "C>4", "C#/Db>4", "D>4"],  // 4ª corda (Ré)
    ["A#/Bb>2", "B>2", "C>3", "C#/Db>3", "D>3", "D#/Eb>3", "E>3", "F>3", "F#/Gb>3", "G>3", "G#/Ab>3", "A>3"],  // 5ª corda (Lá)
    ["F>2", "F#/Gb>2", "G>2", "G#/Ab>2", "A>2", "A#/Bb>2", "B>2", "C>3", "C#/Db>3", "D>3", "D#/Eb>3", "E>3"]   // 6ª corda (Mi grave)
];

export function getRandomNumberInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffleArray(array: any[]) {
    const shuffledArray = array.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

export const chordsAndPaths = [
    {
        "fileName": "A6",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "A7(13)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "A7(13-)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "A9",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "Am9",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "C6",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "C9",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "D4(7&9)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "D4(7&9-)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "D6",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "D7(13)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "D7(13-)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "D7(9)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "D7(9-)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "E6",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "E7(9+&13-)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "E7(9+)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "E9",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "Em9",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "G4(7&9)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "G4(7&9-)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "G6",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "G7(11+)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "G7(9&13-)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "G7(9)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "G7(9-)",
        "folder": "/chords/acrescentadas"
    },
    {
        "fileName": "D7@F#",
        "folder": "/chords/inversoes/1/4a-corda"
    },
    {
        "fileName": "D7M@F#",
        "folder": "/chords/inversoes/1/4a-corda"
    },
    {
        "fileName": "D@F#",
        "folder": "/chords/inversoes/1/4a-corda"
    },
    {
        "fileName": "Dm@F",
        "folder": "/chords/inversoes/1/4a-corda"
    },
    {
        "fileName": "A7@C#",
        "folder": "/chords/inversoes/1/5a-corda"
    },
    {
        "fileName": "A7M@C#",
        "folder": "/chords/inversoes/1/5a-corda"
    },
    {
        "fileName": "A@C#",
        "folder": "/chords/inversoes/1/5a-corda"
    },
    {
        "fileName": "Am@C",
        "folder": "/chords/inversoes/1/5a-corda"
    },
    {
        "fileName": "E7@G#",
        "folder": "/chords/inversoes/1/6a-corda"
    },
    {
        "fileName": "E7M@G#",
        "folder": "/chords/inversoes/1/6a-corda"
    },
    {
        "fileName": "E@C#",
        "folder": "/chords/inversoes/1/6a-corda"
    },
    {
        "fileName": "Em@G",
        "folder": "/chords/inversoes/1/6a-corda"
    },
    {
        "fileName": "C7@G",
        "folder": "/chords/inversoes/2/4a-corda"
    },
    {
        "fileName": "C7M@G",
        "folder": "/chords/inversoes/2/4a-corda"
    },
    {
        "fileName": "C@G(2a versao)",
        "folder": "/chords/inversoes/2/4a-corda"
    },
    {
        "fileName": "C@G",
        "folder": "/chords/inversoes/2/4a-corda"
    },
    {
        "fileName": "Cm@G",
        "folder": "/chords/inversoes/2/4a-corda"
    },
    {
        "fileName": "E7@B",
        "folder": "/chords/inversoes/2/5a-corda"
    },
    {
        "fileName": "E7M@B",
        "folder": "/chords/inversoes/2/5a-corda"
    },
    {
        "fileName": "E@B",
        "folder": "/chords/inversoes/2/5a-corda"
    },
    {
        "fileName": "Em@B",
        "folder": "/chords/inversoes/2/5a-corda"
    },
    {
        "fileName": "G7@D",
        "folder": "/chords/inversoes/2/5a-corda"
    },
    {
        "fileName": "G7M@D",
        "folder": "/chords/inversoes/2/5a-corda"
    },
    {
        "fileName": "G@D",
        "folder": "/chords/inversoes/2/5a-corda"
    },
    {
        "fileName": "Gm@D",
        "folder": "/chords/inversoes/2/5a-corda"
    },
    {
        "fileName": "C7@G(2a versao)",
        "folder": "/chords/inversoes/2/6a-corda"
    },
    {
        "fileName": "C7@G",
        "folder": "/chords/inversoes/2/6a-corda"
    },
    {
        "fileName": "C7M@G",
        "folder": "/chords/inversoes/2/6a-corda"
    },
    {
        "fileName": "C@G",
        "folder": "/chords/inversoes/2/6a-corda"
    },
    {
        "fileName": "Cm@G",
        "folder": "/chords/inversoes/2/6a-corda"
    },
    {
        "fileName": "G@F#",
        "folder": "/chords/inversoes/3/4a-corda"
    },
    {
        "fileName": "G@F",
        "folder": "/chords/inversoes/3/4a-corda"
    },
    {
        "fileName": "Gm@F#",
        "folder": "/chords/inversoes/3/4a-corda"
    },
    {
        "fileName": "Gm@F",
        "folder": "/chords/inversoes/3/4a-corda"
    },
    {
        "fileName": "B@A#",
        "folder": "/chords/inversoes/3/6a-corda"
    },
    {
        "fileName": "B@A",
        "folder": "/chords/inversoes/3/6a-corda"
    },
    {
        "fileName": "Bm@A#",
        "folder": "/chords/inversoes/3/6a-corda"
    },
    {
        "fileName": "Bm@A",
        "folder": "/chords/inversoes/3/6a-corda"
    },
    {
        "fileName": "A7(5+)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "A7(5-)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "A7",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "A7M(5+)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "A7M(5-)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "A7M",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "Am7",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "Am7M",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "B7M(5+)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "Bdim",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "Bm7(5-)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "C7",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "C7M(5+)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "C7M",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "D7(5+)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "D7(5-)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "D7",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "D7M(5+)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "D7M(5-)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "D7M",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "Dm7",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "Dm7M",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "E7(5+)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "E7(5-)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "E7",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "E7M(5+)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "E7M(5-)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "E7M",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "Edim",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "Em7",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "Em7M",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "F#7(5-)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "F#7",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "F#7M",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "F#dim",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "F#m7",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "F#m7M",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "F7M(5+)",
        "folder": "/chords/tetrades"
    },
    {
        "fileName": "A",
        "folder": "/chords/triades"
    },
    {
        "fileName": "A5+",
        "folder": "/chords/triades"
    },
    {
        "fileName": "Am",
        "folder": "/chords/triades"
    },
    {
        "fileName": "Am5-",
        "folder": "/chords/triades"
    },
    {
        "fileName": "C",
        "folder": "/chords/triades"
    },
    {
        "fileName": "D",
        "folder": "/chords/triades"
    },
    {
        "fileName": "D5+",
        "folder": "/chords/triades"
    },
    {
        "fileName": "Dm",
        "folder": "/chords/triades"
    },
    {
        "fileName": "Dm5-",
        "folder": "/chords/triades"
    },
    {
        "fileName": "E",
        "folder": "/chords/triades"
    },
    {
        "fileName": "E5+",
        "folder": "/chords/triades"
    },
    {
        "fileName": "Em",
        "folder": "/chords/triades"
    },
    {
        "fileName": "Em5-",
        "folder": "/chords/triades"
    },
    {
        "fileName": "G",
        "folder": "/chords/triades"
    }
];