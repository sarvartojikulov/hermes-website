"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

import { useTranslations } from "next-intl";
import { Headline } from "./Headline";
import { ViewfinderCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Blog: React.FC = () => {
    const t = useTranslations("News");

    const [modal, setModal] = useState<boolean>(false);
    const [image, setImage] = useState<string | undefined>(undefined);

    useEffect(() => {
        const keyboardEvent = (event: KeyboardEvent) => {
            if (event.key !== "Escape") {
                return;
            }

            const isCombinedKey =
                event.ctrlKey || event.altKey || event.shiftKey;
            if (isCombinedKey) {
                return;
            }

            setModal(false)
            setImage(undefined)
        };
        document.addEventListener("keydown", keyboardEvent);

        return () => {
          document.removeEventListener("keydown", keyboardEvent)
        }
    }, []);

    const toggleImage = (imageLink: string) => {
        setModal((val) => {
            if (val) {
                setImage(undefined);
            } else {
                setImage(imageLink);
            }

            return !val;
        });
    };

    return (
        <React.Fragment>
            <div className="col-span-6">
                <Headline
                    size="medium"
                    label={t("label")}
                    color="primary"
                    tag="h2"
                />
            </div>
            {modal && image && (
                <div className="fixed z-10 left-0 top-0 w-screen h-screen overflow-auto bg-gray-900 bg-opacity-80">
                    <div className="w-full h-full relative flex items-center justify-center">
                        <div
                            className="absolute right-4 top-8 cursor-pointer"
                            onClick={() => setModal(false)}
                        >
                            <XMarkIcon
                                className="text-white"
                                width={40}
                                height={40}
                            ></XMarkIcon>
                        </div>
                        <div className="w-full px-6 md:px-12 max-h-[600px] relative cursor-pointer">
                            <Image
                                className="mx-auto row-span-3 w-full max-h-[600px] max-w-[1200px] object-contain"
                                src={image}
                                width={600}
                                height={600}
                                alt="blog post image"
                                onClick={() => {
                                    setModal(false);
                                }}
                            />
                            <div
                                className="absolute bottom-0 right-6 md:right-12  text-white bg-black bg-opacity-60 "
                                onClick={() => {
                                    setModal(false);
                                }}
                            >
                                <ViewfinderCircleIcon width={30} height={30} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="relative col-span-full px-12 md:px-0 lg:px-12 2xl:px-12">
                <Swiper
                    spaceBetween={50}
                    modules={[Navigation]}
                    slidesPerView={1}
                    breakpoints={{
                        576: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1440: {
                            slidesPerView: 3,
                        },
                    }}
                    navigation={{
                        nextEl: ".arrow-right",
                        prevEl: ".arrow-left",
                    }}
                    loop={true}
                >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10].map((item, i) => (
                        <SwiperSlide key={item + i}>
                            <Post
                                post={{
                                    title: t(`contents.${item}.title`),
                                    img: t(`contents.${item}.image`),
                                }}
                                onImageClick={toggleImage}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    className="arrow-left absolute left-0  top-1/3 cursor-pointer md:-left-14 md:top-1/2 md:mt-0 lg:-left-1 xl:-left-8 2xl:-left-2"
                    aria-label="Swipe left button"
                >
                    <ChevronLeftIcon className="h-10 w-10 text-black" />
                </button>
                <button
                    className="arrow-right absolute right-0 top-1/3  cursor-pointer md:-right-14 md:top-1/2 md:mt-0 lg:-right-1 xl:-right-8 2xl:-right-2"
                    aria-label="Swipe right button"
                >
                    <ChevronRightIcon className="h-10 w-10 text-black" />
                </button>
            </div>
        </React.Fragment>
    );
};

type PostProps = {
    post: {
        title: string;
        img: string;
    };
    onImageClick: (img: string) => void;
};

const Post: React.FC<PostProps> = ({ post: { title, img }, onImageClick }) => {
    const imageSrc = `/news/${img}`;

    return (
        <div className="col-span-full flex flex-col gap-4 md:col-span-3">
            <div className="relative cursor-pointer">
                <Image
                    className="col-span-1 row-span-3 max-h-80 md:max-h-60 lg:max-h-80 w-full object-cover"
                    src={imageSrc}
                    alt="blog post image"
                    width="600"
                    height="600"
                    onClick={() => {
                        onImageClick(imageSrc);
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 text-white bg-black bg-opacity-60 "
                    onClick={() => {
                        onImageClick(imageSrc);
                    }}
                >
                    <ViewfinderCircleIcon width={30} height={30} />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="col-start-2 text-lg font-semibold">{title}</div>
            </div>
        </div>
    );
};

export default Blog;
