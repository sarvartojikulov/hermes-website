"use client";
import { Navigation } from "swiper/modules";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React  from "react";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import { InstagramMedia } from "@/base/types";

const Blog: React.FC<{feeds : InstagramMedia[]}> = ({feeds}) => {

  return (
    <React.Fragment>
      <div className="relative col-span-full">
        <div className="px-0 lg:px-12 2xl:px-12">
          <Swiper
            spaceBetween={50}
            modules={[Navigation, Pagination]}
            pagination={{el : ".swiper-pagination", dynamicBullets: true,}}
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
            {feeds.filter(item => item.media_type !== "VIDEO").map((item, i) => (
              <SwiperSlide key={item.id}>
                <Post post={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full mt-8 flex justify-between">
          <button
            className="arrow-left left-0  top-1/3 cursor-pointer md:-left-14 md:top-1/2 md:mt-0 lg:-left-1 xl:-left-8 2xl:-left-2"
            aria-label="Swipe left button"
          >
            <ChevronLeftIcon className="h-10 w-10 text-black" />
          </button>
          <div className="swiper-pagination"></div>
          <button
            className="arrow-right right-0 top-1/3 cursor-pointer md:-right-14 md:top-1/2 md:mt-0 lg:-right-1 xl:-right-8 2xl:-right-2"
            aria-label="Swipe right button"
          >
            <ChevronRightIcon className="h-10 w-10 text-black" />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

type PostProps = {
  post: InstagramMedia
};

const Post: React.FC<PostProps> = ({ post : {media_url, caption, permalink} }) => {

  return (
    <div className="col-span-full flex flex-col gap-4 md:col-span-3">
      <div className="relative cursor-pointer">
        <a target="_blank" href={permalink}>
          <img
            className="col-span-1 row-span-3 w-full aspect-9/16 object-cover min-h-80 max-h-80"
            src={media_url}
            alt="blog post image"
            width="600"
            height="600"
          />
        </a>
      </div>
      <div className="flex flex-col gap-4 ">
          <div className="col-start-2 text-lg font-semibold line-clamp-2">{caption}</div>
      </div>
    </div>
  );
};

export default Blog;
