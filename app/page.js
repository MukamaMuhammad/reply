import Hero from "../components/hero";
import How from "@components/how";
import Pricing from "@components/pricing";
import Faqs from "@components/Faqs";
import Why from "@components/Why";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <How />
      <Why />
      <Pricing />
      <Faqs />
    </div>
  );
}
