import NavBar from "./nav";
import React from 'react';

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex w-full h-full min-h-screen">
            <NavBar />
            {children}
        </div>
    )
}

export default Layout;