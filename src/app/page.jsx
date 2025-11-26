
import CustomerSaying from "@/Components/Home/CustomerSaying/CustomerSaying";
import Featured from "@/Components/Home/Featured/Featured";
import HeroSection from "@/Components/Home/HeroSection/HeroSection";
import Marquee from "@/Components/Home/Marquee/Marquee";
import SubscribeSection from "@/Components/Home/SubscribeSection/SubscribeSection";




export default function Home() {
  return (
    <div>
      <section><HeroSection></HeroSection></section>
      <section><Featured></Featured></section>
      <section><Marquee></Marquee></section>
      <section> <CustomerSaying></CustomerSaying> </section>
      <section> <SubscribeSection></SubscribeSection> </section>
    </div>
  );
}
