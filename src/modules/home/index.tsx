import "../../i18n";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import AppBanner from "../../components/appBanner";
import LenisProvider from "../../components/lenis";
import { ConfigContext } from "../../utils/configContext";
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
    <ConfigContext.Provider value={config}>
      <LenisProvider>
        <main>
          <Navbar />
          <Header />
          <Partners />
          <Features />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <Faq />
          <AppBanner />
          <Footer />
        </main>
      </LenisProvider>
    </ConfigContext.Provider>
  );
}

export default Home;
