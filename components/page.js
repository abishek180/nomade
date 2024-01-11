import SmoothScroller from "./Smoothscroll";
import Header from "./header";
import Footer from "./footer";

export default function Page({children}){
    return(
        <>
        <SmoothScroller/>
        <Header/>
        <main className="pt-32">{children}</main>
        <Footer/>
        </>
    )
}