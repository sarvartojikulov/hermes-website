"use client";
import { Headline } from "@/components/Headline";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import React from "react";

const PrivacyPolicy = () => {
  const t = useTranslations("privacy-policy");

  return (
    <main className="container mx-auto flex flex-col gap-20 md:gap-20 lg:gap-36 pb-40">
      <section
        className={clsx(
          "mt-20 w-full grid grid-cols-6 gap-x-5 gap-y-12",
          "lg:grid-cols-12 lg:py-12",
        )}
      >
        <div className="col-span-full mx-auto">
          <Headline size="medium" label={t("header")} color="primary" />
        </div>

        <article className="col-span-full prose max-w-4xl mx-auto prose-li:space-x-2">
          <p>
            {t.rich("about", {
              email: (email) => <a href={`mailto:${email}`}>{email}</a>,
            })}
          </p>

          <h2>1. {t("contents.controller.label")}</h2>

          <p>{t("contents.controller.contents")}</p>
          <ul>
            <li>
              <span>{t("commons.email")}:</span>
              <a href="mailto:charity_hermes@ukr.net">charity_hermes@ukr.net</a>
            </li>
            <li>
              <span>{t("commons.website")}:</span>
              <a href="/" target="_blank">
                www.charityfundhermes.org
              </a>
            </li>
          </ul>

          <h2>2. {t("contents.definitions.label")}</h2>

          {t.rich("contents.definitions.contents", {
            item: (item) => <p>{item}</p>,
          })}

          <h2>3. {t("contents.collectionOfData.label")}</h2>

          {t.rich("contents.collectionOfData.contents", {
            item: (item) => <p>{item}</p>,
          })}

          <h2>4. {t("contents.processing.label")}</h2>

          {t.rich("contents.processing.contents", {
            item: (item) => <p>{item}</p>,
          })}

          <h2>5. {t("contents.dataStorage.label")}</h2>

          <p>{t("contents.dataStorage.contents")}</p>

          <h2>6. {t("contents.dataDisclosure.label")}</h2>

          {t.rich("contents.dataDisclosure.contents", {
            item: (item) => <p>{item}</p>,
            email: (email) => <a href={`mailto:${email}`}>{email}</a>,
          })}

          <h2>7. {t("contents.protectionOfData.label")}</h2>

          <p>{t("contents.protectionOfData.contents")}</p>

          <h2>8. {t("contents.yourRights.label")}</h2>

          {t.rich("contents.yourRights.contents", {
            item: (item) => <p>{item}</p>,
          })}

          <h2>9. {t("contents.complaints.label")}</h2>

          <p>
            {t.rich("contents.complaints.contents", {
              email: (email) => <a href={`mailto:${email}`}>{email}</a>,
            })}
          </p>

          <h2>10. {t("contents.privacyChanges.label")}</h2>

          <p>{t("contents.privacyChanges.contents")}</p>

          <p>
            {t.rich("last", {
              email: (email) => <a href={`mailto:${email}`}>{email}</a>,
            })}
          </p>
        </article>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
