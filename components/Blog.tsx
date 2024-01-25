"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import "swiper/css";

import "swiper/css/navigation";
import { useTranslations } from "next-intl";
import { Headline } from "./Headline";

const Blog: React.FC = () => {
  const t = useTranslations("News");

  return (
    <React.Fragment>
      <div className="col-span-6">
        <Headline size="medium" label={t("label")} color="primary" tag="h2" />
      </div>
      <div className="relative col-span-full lg:px-4 2xl:px-12">
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
          {[0, 1, 2, 3, 4, 5].map((item, i) => (
            <SwiperSlide key={item + i}>
              <Post
                post={{
                  title: t(`contents.${item}.title`),
                  img: t(`contents.${item}.image`),
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="arrow-left absolute left-0 mt-5 cursor-pointer md:-left-14 md:top-1/2 md:mt-0 lg:-left-12 xl:-left-8 2xl:-left-2"
          aria-label="Swipe left button"
        >
          <ChevronLeftIcon className="h-10 w-10 text-black" />
        </button>
        <button
          className="arrow-right absolute right-0 mt-5 cursor-pointer md:-right-14 md:top-1/2 md:mt-0 lg:-right-12 xl:-right-8 2xl:-right-2"
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
};

const Post: React.FC<PostProps> = ({ post: { title, img } }) => {
  return (
    <div className="col-span-full flex flex-col gap-4 md:col-span-3">
      <img
        className="col-span-1 row-span-3 max-h-80 w-full object-cover"
        src={`/news/${img}`}
        alt="blog post image"
        width="380"
        height="320"
      />
      <div className="flex flex-col gap-4">
        <div className="col-start-2 text-lg font-semibold">{title}</div>
      </div>
    </div>
  );
};

export default Blog;
