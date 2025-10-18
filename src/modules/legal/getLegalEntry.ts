import { getCollection, type CollectionEntry } from "astro:content";
import type { LegalPageKey } from "../../utils/serverI18n";

type LegalEntry = CollectionEntry<"legal">;

const FALLBACK_LOCALE = "en";

export async function getLegalEntry(pageKey: LegalPageKey, locale?: string): Promise<LegalEntry> {
  const normalizedLocale = locale?.toLowerCase() || FALLBACK_LOCALE;
  const entries = await getCollection("legal", (entry) => entry.data.pageKey === pageKey);

  if (!entries.length) {
    throw new Error(`Legal content not found for page key: ${pageKey}`);
  }

  const exactMatch = entries.find((entry) => entry.data.locale === normalizedLocale);
  if (exactMatch) {
    return exactMatch;
  }

  const fallback = entries.find((entry) => entry.data.locale === FALLBACK_LOCALE);
  if (fallback) {
    return fallback;
  }

  return entries[0];
}
