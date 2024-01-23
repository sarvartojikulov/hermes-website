import { ReactNode } from "react";

import { Metadata } from "next"; // if using TypeScript

const SITE_URL = "https://charityfundhermes.org";

export const metadata: Metadata = {
    title: "Charity Fund HERMES - Supporting Ukraine's Armed Forces and Civilians in Need",
    description:
        "Join Charity Fund HERMES in providing crucial support to Ukraine's Armed Forces and civilians affected by the war. Learn how you can donate, request assistance, and make a difference today.",
    icons: {
        icon: SITE_URL + "/icon.png",
        apple: SITE_URL + "/icon.png",
    },
    openGraph: {
        title: "Help Ukraine with Charity Fund HERMES - Donate & Request Assistance",
        description: `Discover how Charity Fund HERMES aids Ukraine's Armed Forces and offers relief to civilians in war-torn areas. Get involved by donating or seeking help. Every contribution counts.`,
        url: SITE_URL,
        siteName: "Charity Fund Hermes",
        // images: [
        //     {
        //         url: SITE_URL + "/opengraph-image.png",
        //         width: 800,
        //         height: 600,
        //     },
        // ],
        locale: "en_US",
        type: "website",
    },
};

type Props = {
    children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
    return children;
}
