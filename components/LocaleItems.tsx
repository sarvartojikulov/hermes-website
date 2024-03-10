"use client";

import { usePathname, useRouter } from "@/src/navigation";
import { useLocale } from "next-intl";

const LocaleItems = () => {
    const locale = useLocale();

    const router = useRouter();
    const pathname = usePathname();

    const changeLang = (lang: "en" | "ua") => {
        router.replace(pathname, { locale: lang });
    };

    return (
        <li className="flex cursor-pointer items-center gap-2 tracking-wider">
            {locale === "ua" ? (
                <div onClick={() => changeLang("en")}>
                    <span>🇬🇧</span>
                    <span className="text-lg font-semibold uppercase text-slate-50">
                        EN
                    </span>
                </div>
            ) : (
                <div onClick={() => changeLang("ua")}>
                    <span>🇺🇦</span>
                    <span className="text-lg font-semibold uppercase text-slate-50">
                        UA
                    </span>
                </div>
            )}
        </li>
    );
};

export default LocaleItems;
