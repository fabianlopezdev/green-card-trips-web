import "../../i18n";
import AppBanner from "@components/appBanner";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useTranslation } from "react-i18next";
import { ConfigContext } from "utils/configContext";
import type { TemplateConfig } from "utils/configType";

interface Props {
  config: TemplateConfig;
}

function TermsAndConditionsPage({ config }: Props) {
  const { i18n } = useTranslation();
  const { termsAndConditions } = config;

  // Get current language, fallback to English if translation not available
  const lang = termsAndConditions[i18n.language] ? i18n.language : 'en';

  const content = termsAndConditions[lang];

  return (
    <ConfigContext.Provider value={config}>
      <main>
        <Navbar />
        <section className="max-w-screen-lg mx-auto py-4 px-4 md:py-16">
          <Markdown className="prose" remarkPlugins={[remarkGfm]}>
            {content.content}
          </Markdown>
        </section>
        <AppBanner />
        <Footer />
      </main>
    </ConfigContext.Provider>
  );
}

export default TermsAndConditionsPage;
