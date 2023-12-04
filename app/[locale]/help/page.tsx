import { Headline } from "@/components/Headline";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const HelpPage = () => {
    return (
        <main className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 py-20 lg:px-20">
            <div className="col-span-full">
                <Headline
                    size="medium"
                    label={"Request Assistance"}
                    color="primary"
                />
                <div className="mt-12 px-2 md:px-12">
                    <p className="mx-auto text-2xl">
                        Our mission is to provide support and assistance to
                        those in need. Please follow the steps below to submit
                        your help request.
                    </p>
                </div>
            </div>
            <section className={clsx("col-span-full flex flex-col gap-10", "overflow-y-scroll")}>
                <div className="mx-4 px-10 lg:px-16 py-10 bg-slate-200">
                    <h2 className="text-2xl font-bold text-primary-dark">
                        Step 1: Download the Help Request Form
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-6 mt-4">
                        <div className="w-full flex justify-center items-center">
                            <p className="text-xl">
                                To initiate the support process, please download
                                our Help Request Form. Click the link below to
                                access the PDF document:
                            </p>
                        </div>

                        <a
                            href="/help.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex justify-center items-center bg-white h-24"
                        >
                            <span className="text-xl font-semibold">
                                Download
                            </span>
                        </a>
                    </div>
                </div>

                <div className="mx-4 px-10 lg:px-16 py-10 bg-slate-200">
                    <h2 className="text-2xl font-bold text-primary-dark">
                        Step 2: Complete the Form
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-6 mt-4">
                        <p className="text-xl">
                            Thoroughly fill out the form with accurate and
                            detailed information about your situation.
                            Additionally, ensure you obtain the signature of the
                            Commander of your Military Unit or the Chair of your
                            Medical Institution.
                        </p>
                    </div>
                </div>

                <div className="mx-4 px-10 lg:px-16 py-10 bg-slate-200">
                    <h2 className="text-2xl font-bold text-primary-dark">
                        Step 3: Send the Email
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-6 mt-4">
                        <p className="text-xl">
                            Compose an email to
                            <Link
                                href="contact"
                                className="underline underline-offset-2"
                            >
                                {" "}
                                support@charityfundhermes.org{" "}
                            </Link>
                            and attach the saved Assistance Request Form. In the
                            email subject, please mention "Help Request - [Your
                            Full Name]". Feel free to include any additional
                            details or specific requirements you may have.
                        </p>
                    </div>
                </div>
            </section>
            <section className="col-span-full flex flex-col gap-12">
                <div className="flex flex-col gap-8">
                    <div className="">
                        <h2 className="text-3xl font-bold text-primary-dark">
                            Privacy and Confidentiality
                        </h2>
                    </div>
                    <div className="px-2 md:px-12">
                        <p className="mx-auto text-2xl">
                            At Charity Fund Hermes, we prioritize your privacy
                            and confidentiality. Rest assured that the
                            information you provide will be handled with the
                            utmost care and only used for the purpose of
                            assisting you.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="col-span-full">
                        <h2 className="text-3xl font-bold text-primary-dark">
                            Contact us
                        </h2>
                    </div>
                    <div className="col-span-full px-2 md:px-12">
                        <p className="mx-auto text-2xl">
                            If you encounter any issues or have questions
                            regarding the assistance request process, please do
                            not hesitate to
                            <Link
                                href="contact"
                                className="underline underline-offset-2"
                            >
                                {" "}
                                contact us.{" "}
                            </Link>
                            We are here to support you every step of the way.
                        </p>
                    </div>
                    <div className="col-span-full px-2 md:px-12">
                        <p className="mx-auto text-2xl">
                            Thank you for reaching out to Charity Fund Hermes.
                            Together, we can make a difference in the lives of
                            those affected by the challenges in Ukraine.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HelpPage;
