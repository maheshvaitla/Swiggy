import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import {restaurants} from "../utils/restuarants"
import Link from "next/link";


export default function Home() {

  
  

  return (
    <>
      <Navbar />
      <Link href="/Restuarnt/67"><Card data={restaurants}/> </Link>
      
    </>
  );
}
