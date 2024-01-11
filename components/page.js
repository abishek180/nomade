import SmoothScroller from "./Smoothscroll";
import Header from "./header";


export default function Page({children}){
    return(
        <>
        <SmoothScroller/>
        <Header/>
        <main className="pt-32">{children}</main>
        
        </>
    )
}