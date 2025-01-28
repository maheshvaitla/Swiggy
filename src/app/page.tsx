import { Card } from "@/components/Card";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap gap-4">
      <Card />
      <Card />
      <Card />
      </div>
    </>
  );
}
