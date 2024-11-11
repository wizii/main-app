import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex flex-col h-full w-1/4">
            <div className="flex flex-1">
                <Link href='/employees'>
                    Employees
                </Link>
            </div>
            <div>
                <Link href='/'>
                    Home
                </Link>
            </div>
        </div>
    )
}