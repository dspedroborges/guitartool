import Link from "next/link";
import { BsHouse } from "react-icons/bs";

export default function GoBack() {
    return <Link href="/" className="text-white text-center hover:underline flex items-center gap-2 justify-center py-12"><BsHouse/> Voltar para o início</Link>
}