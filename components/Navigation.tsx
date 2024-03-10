import React from "react";
import { NAVIGATION } from "@/base/data";
import { getTranslations } from "next-intl/server";
import NavigationWrapper from "./NavigationWrapper";
import NavigationLink from "./NaviationLink";
import LocaleItems from "./LocaleItems";

const Navigation: React.FC = async () => {
  const t = await getTranslations("Navigation");

  return (
    <NavigationWrapper>
      {NAVIGATION.map((item) => (
        <NavigationLink
          key={item.label}
          label={t(item.label)}
          path={item.path}
        />
      ))}
      <LocaleItems />
      <div className="mb-40 mt-auto space-y-3 lg:m-0 lg:hidden lg:gap-6 lg:space-y-0">
        <NavigationLink label={t("privacy")} path="/privacy-policy" />
      </div>
    </NavigationWrapper>
  );
};

export default Navigation;
