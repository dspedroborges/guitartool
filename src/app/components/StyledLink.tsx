import Link from "next/link";
import { BsLink45Deg } from "react-icons/bs";

export default function StyledLink({ name, link }: { name: string, link: string }) {
    return (
        <li className="w-full relative flex mb-2">
            <Link className="w-full relative hover:font-bold text-white py-6 px-2 rounded-xl bg-[url('/guitar.jpg')] bg-center bg-fixed bg-cover bg-no-repeat bg-blend-multiply text-xl" href={link}>

                <span className="w-full bg-gradient-to-r from-black to-blue-800 hover:to-blue-500 absolute top-0 left-0 h-full opacity-80 rounded-xl"></span>
                <span className="absolute left-2 top-1/2 -translate-y-1/2">{name}</span>

                <BsLink45Deg className="absolute right-2 top-1/2 -translate-y-1/2 " />
            </Link>
        </li>
    )
}