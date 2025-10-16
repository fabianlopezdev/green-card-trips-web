import "../../i18n";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useTranslation } from "react-i18next";
import type { TemplateConfig } from "utils/configType";

interface Props {
  config: TemplateConfig;
}

function PrivacyPolicyPage({ config }: Props) {
  const { i18n } = useTranslation();
  const { privacyPolicy } = config;
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLang(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  // Get current language, fallback to English if translation not available
  const lang = privacyPolicy[currentLang] ? currentLang : 'en';
  const content = privacyPolicy[lang];

  return (
    <section className="max-w-screen-lg mx-auto pt-24 pb-4 px-4 md:pt-32 md:pb-16">
      <Markdown className="prose" remarkPlugins={[remarkGfm]}>
        {content.content}
      </Markdown>
    </section>
  );
}

export default PrivacyPolicyPage;
