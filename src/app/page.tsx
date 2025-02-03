import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import {restaurants} from "../utils/restuarants"



export default function Home() {

  
  

  return (
    <>
      <Navbar />
      <Card data={restaurants}/>
    </>
  );
}
