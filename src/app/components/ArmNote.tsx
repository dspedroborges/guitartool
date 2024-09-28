export default function ArmNote({ note, highLightType, showNoteValue, isReference }: { note: string, highLightType: "none" | "normal" | "weak" | "strong", showNoteValue: boolean, isReference: boolean }) {
    const getBg = () => {
        switch (highLightType) {
            case "strong":
                return "brown";
            case "weak":
                return "darkblue";
            default:
                return "transparent";
        }
    }

    const playNote = (note: string) => {
        const [noteAudio, rightNumber] = note.split(">");

        const audio = new Audio(`/notes/${noteAudio.split("/")[0].replaceAll("#", "S")}${rightNumber}.mp3`);
        audio.play();
    };

    return (
        <div
            className={`
        w-full h-[30px]
        cursor-pointer
        flex items-center justify-center
        text-center border border-gray-500 p-2
        relative
        text-white text-xs font-extralight
        hover:shadow-xl hover:outline
        outline-gray-700
        outline-4
        `
            }
            style={{
                backgroundColor: getBg()
            }}
            onClick={() => playNote(note)}
        >
            {
                showNoteValue && note.replace(/>.*/, '')
            }

            {
                isReference && (
                    <div className="h-4 w-4 bg-blue-600 border border-gray-950 rounded-full absolute -bottom-full left-1/2 -translate-x-1/2"></div>
                )
            }
        </div>
    )
}