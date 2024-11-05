import NavBar from "./nav";

//@ts-ignore
export default function Layout({ children }) {
    return (
        <div className="flex w-full">
            <NavBar />
            {children}
        </div>
    )
}