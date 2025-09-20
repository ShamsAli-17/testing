import Link from "next/link"

export default function Navbar () {
    return (
        <div className="flex justify-center gap-4">
            <Link href='/'>
            home
            </Link>
            <Link href='/about'>
            about
            </Link><Link href='/contact'>
            contact
            </Link>
        </div>

    )
}