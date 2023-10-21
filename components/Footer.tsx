import {
    EnvelopeIcon,
    PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";
import { IconInstagram } from "./Icons/IconInstagram";
import { IconFacebook } from "./Icons/IconFacebook";
import { SVGLogo } from "./Icons/SVGLogo";

const navigations = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "About us",
        path: "/about",
    },
    {
        label: "Contact",
        path: "/contact",
    },
    {
        label: "Donate",
        path: "/donate",
    },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 pt-12 pb-16">
            <div className="container tracking-wide mx-auto text-md text-zinc-50 grid grid-cols-2 gap-y-12 lg:flex lg:justify-between items-center font-semibold lg:px-12">
                <div className="w-40 h-40 col-span-2 md:col-span-1 flex justify-center items-center justify-self-center md:justify-self-start">
                    <div>
                        <SVGLogo className="h-20" />
                        <h5 className="ml-5 mt-2 font-bold text-slate-50 text-xl">
                            HERMES
                        </h5>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
                    <span>Вічева майдан, 079, кв. 528, 87754</span>
                    <span>Південний Анатолій,</span>
                    <span>Дніпропетровська область</span>
                    <span>Ukraine</span>
                </div>
                <ul className="flex flex-col gap-3 ">
                    {navigations.map((item) => (
                        <li>
                            <span className="font-semibold">{item.label}</span>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col gap-3">
                    <li className="flex gap-4">
                        <IconFacebook width={24} height={24} />
                        <span>Facebook</span>
                    </li>
                    <li className="flex gap-4">
                        <IconInstagram width={24} height={24} />
                        <span>Instagram</span>
                    </li>
                    <li className="flex gap-4">
                        <EnvelopeIcon height={24} width={24} />
                        <a href="mailto:email@mail.com">hermes@mail.com</a>
                    </li>
                    <li className="flex gap-4">
                        <PhoneArrowDownLeftIcon width={22} height={22} />
                        <a href="# ">+998932132424</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
