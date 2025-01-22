import Link from "next/link";
import { BsHouse } from "react-icons/bs";

export default function GoBack() {
    return <div className="pt-12 pb-4 text-center"><Link href="/" className="text-white text-center hover:underline flex items-center justify-center gap-2"><BsHouse/> Voltar para o início</Link></div>
}