import HeaderMinimal from "@/components/HeaderMinimal";
import HeroNew from "@/components/sections/HeroNew";
import Targeting from "@/components/sections/Targeting";
import Proof from "@/components/sections/Proof";
import NotFor from "@/components/sections/NotFor";
import FinalCta from "@/components/sections/FinalCta";
import FooterMinimal from "@/components/FooterMinimal";

export default function HomeNewPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] overflow-x-hidden">
      <HeaderMinimal />
      <main>
        <HeroNew />
        <Targeting />
        <Proof />
        <NotFor />
        <FinalCta />
      </main>
      <FooterMinimal />
    </div>
  );
}
