import "../../i18n";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import AppBanner from "../../components/appBanner";
import LenisProvider from "../../components/lenis";
import type { TemplateConfig } from "../../utils/configType";
import Header from "./_components/header";
import Features from "./_components/features";
import Partners from "./_components/partners";
import Faq from "./_components/faq";
import HowItWorks from "./_components/howItWorks";
import Pricing from "./_components/pricing";
import Testimonials from "./_components/testimonials";

interface Props {
  config: TemplateConfig;
}

function Home({ config }: Props) {
  return (
    <LenisProvider>
      <main>
        <Navbar config={config} />
        <Header config={config} />
        <Partners config={config} />
        <Features config={config} />
        <HowItWorks config={config} />
        <Pricing config={config} />
        <Testimonials config={config} />
        <Faq config={config} />
        <AppBanner config={config} />
        <Footer config={config} />
      </main>
    </LenisProvider>
  );
}

export default Home;
