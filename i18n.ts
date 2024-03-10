import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "ua"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const home = (await import(`./locale-content/pages/home/${locale}.json`))
    .default;
  const privacyPolicy = (
    await import(`./locale-content/pages/privacy-policy/${locale}.json`)
  ).default;
  const commons = (await import(`./locale-content/pages/common/${locale}.json`))
    .default;

  const news = (await import(`./locale-content/pages/news/${locale}.json`))
    .default;

  const donate = (await import(`./locale-content/pages/donate/${locale}.json`))
    .default;
  const contact = (
    await import(`./locale-content/pages/contact/${locale}.json`)
  ).default;

  const help = (await import(`./locale-content/pages/help/${locale}.json`))
    .default;

  return {
    messages: {
      ...home,
      ...privacyPolicy,
      ...commons,
      ...news,
      ...donate,
      ...contact,
      ...help,
    },
  };
});
