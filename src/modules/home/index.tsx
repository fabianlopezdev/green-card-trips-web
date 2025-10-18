import "../../i18n";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import AppBanner from "../../components/appBanner";
import LenisProvider from "../../components/lenis";
import type { TemplateConfig } from "../../utils/configType";
import type { TranslationObject } from "../../utils/serverI18n";
import Header from "./_components/header";
import Features from "./_components/features";
import Partners from "./_components/partners";
import Faq from "./_components/faq";
import HowItWorks from "./_components/howItWorks";
import Pricing from "./_components/pricing";
import Testimonials from "./_components/testimonials";

interface Props {
  config: TemplateConfig;
  translations: TranslationObject;
  currentLang?: string;
  legalUrls?: {
    termsAndConditions: string;
    privacyPolicy: string;
    cookiesPolicy: string;
  };
}

function Home({ config, translations, currentLang = "en", legalUrls }: Props) {
  return (
    <LenisProvider>
      <main>
        <Navbar config={config} translations={translations} currentLang={currentLang} />
        <Header config={config} translations={translations} currentLang={currentLang} />
        <Partners config={config} translations={translations} currentLang={currentLang} />
        <Features config={config} translations={translations} currentLang={currentLang} />
        <HowItWorks config={config} translations={translations} currentLang={currentLang} />
        <Pricing config={config} translations={translations} currentLang={currentLang} />
        <Testimonials config={config} translations={translations} currentLang={currentLang} />
        <Faq config={config} translations={translations} currentLang={currentLang} />
        <AppBanner config={config} translations={translations} currentLang={currentLang} />
        <Footer config={config} translations={translations} currentLang={currentLang} legalUrls={legalUrls} />
      </main>
    </LenisProvider>
  );
}

export default Home;
