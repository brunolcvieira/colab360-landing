import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import StatsBar from "@/components/StatsBar";
import Problema from "@/components/Problema";
import Solucao from "@/components/Solucao";
import Beneficios from "@/components/Beneficios";
import ComoFunciona from "@/components/ComoFunciona";
import Diferenciais from "@/components/Diferenciais";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProofBar />
      <StatsBar />
      <Problema />
      <Solucao />
      <Beneficios />
      <ComoFunciona />
      <Diferenciais />
      <CtaFinal />
      <Footer />
      <WhatsappFloat />
    </>
  );
}