import { Headline } from "@/components/Headline";
import { IconFacebook } from "@/components/Icons/IconFacebook";
import { IconInstagram } from "@/components/Icons/IconInstagram";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function Contact() {
    return (
        <main className="container mx-auto flex flex-col gap-20 md:gap-20 lg:gap-36 pb-40">
            <section
                className={clsx(
                    "mt-20 w-full grid grid-cols-6 gap-x-5 gap-y-12",
                    "lg:grid-cols-12 lg:py-12"
                )}
            >
                <div className="col-span-full">
                    <Headline size="medium" label={"Contact"} color="primary" />
                </div>

                <div className="col-span-full px-12">
                    <p className="text-2xl font-semibold mx-auto">
                        We're thrilled that you want to get in touch with us!
                        Your interest in our charity means the world to us, and
                        we're here to answer any questions you may have or
                        provide assistance in any way we can.
                    </p>
                </div>
                <div className="py-12 bg-slate-200 rounded col-span-6 flex justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <p>Phone Number</p>
                        <span className="text-5xl">+111111111111</span>
                    </div>
                </div>

                <div className="bg-slate-200 rounded col-span-6 flex items-center px-6 py-10">
                    <p className="text-xl">
                        Feel free to give us a call at [Your Phone Number]. Our
                        lines are open during our working hours, and our
                        dedicated team is ready to assist you.
                    </p>
                </div>

                <div className="py-12 bg-slate-200 rounded col-span-6 flex justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <p>Email</p>
                        <Link
                            href="mailto:charity_hermes@ukr.net"
                            className="text-2xl md:text-4xl underline"
                        >
                            charity_hermes@ukr.net
                        </Link>
                    </div>
                </div>

                <div className="bg-slate-200 rounded col-span-6 flex items-center px-6 py-10">
                    <p className="text-xl">
                        You can also reach us via email at{" "}
                        <Link
                            href="mailto:charity_hermes@ukr.net"
                            className="underline"
                        >
                            charity_hermes@ukr.net
                        </Link>
                        . Whether you have inquiries about our programs,
                        partnership opportunities, or just want to share your
                        thoughts, we're only an email away.
                    </p>
                </div>

                <div className="py-12 bg-slate-200 rounded col-span-6 flex justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <p>Social Media</p>
                        <ul className="flex text-slate-900 gap-x-4">
                            <li className="bg-slate-900 px-4 py-4 rounded-xl flex items-center">
                                <Link href={""}>
                                    <IconFacebook className="w-10 h-10 lg:w-12 lg:h-12" />
                                </Link>
                            </li>

                            <li className="bg-slate-900 p-4 rounded-xl flex items-center">
                                <Link href={""}>
                                    <IconInstagram className="w-10 h-10 lg:w-12 lg:h-12" />
                                </Link>
                            </li>
                            {/* <li className="bg-slate-900 p-4 text-white flex items-center rounded-xl">
                                <Link href={"mailto:charity_hermes@ukr.net"}>
                                    <EnvelopeIcon className="w-10 h-10 lg:w-12 lg:h-12" />
                                </Link>
                            </li>
                            <li className="bg-slate-900 px-5 py-4 rounded-xl text-white flex items-center">
                                <Link href={"mailto:charity_hermes@ukr.net"}>
                                    <PhoneArrowDownLeftIcon className="w-8 h-8.5 lg:w-10 lg:h-10" />
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>

                <div className="bg-slate-200 rounded col-span-6 flex items-center px-6 py-10">
                    <p className="text-xl">
                        Connect with us on our social media platforms for the
                        latest updates, inspiring stories, and to be a part of
                        our growing community. Follow us on [List Your Social
                        Media Links].
                    </p>
                </div>

                <div className="col-span-full px-12">
                    <p className="mt-12 text-xl font-semibold mx-auto">
                        We are grateful for your interest in our mission and
                        look forward to connecting with you. Your questions,
                        feedback, and collaboration ideas are important to us.
                        Feel free to reach out, and we'll do our best to respond
                        promptly.
                    </p>

                    <p className="mt-12 text-xl font-semibold mx-auto">
                        Thank you for being a part of our community and for
                        making a difference with us.
                    </p>
                </div>
            </section>
        </main>
    );
}
