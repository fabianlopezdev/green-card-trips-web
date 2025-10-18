import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { TemplateConfig } from "utils/configType";

interface Props {
  config: TemplateConfig;
  currentLang?: string;
}

function PrivacyPolicyPage({ config, currentLang = 'en' }: Props) {
  const { privacyPolicy } = config;

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
