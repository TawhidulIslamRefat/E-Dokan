
import Featured from "@/Components/Home/Featured/Featured";
import HeroSection from "@/Components/Home/HeroSection/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section><HeroSection></HeroSection></section>
      <section><Featured></Featured></section>
    </div>
  );
}
