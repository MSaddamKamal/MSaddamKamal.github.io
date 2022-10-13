
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

interface Props  {
    children:React.ReactNode
}

 const Layout = ({children}:Props) =>{
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout