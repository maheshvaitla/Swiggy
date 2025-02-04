'use client'
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { lazy, Suspense } from "react";

const Page = () => {

    const Grocery = lazy(() => import('../../components/Grocery'))
    return (
        <Suspense fallback={<Loader />} >
           <Navbar />
           <Grocery />
        </Suspense>
        
    )
}
export default Page;