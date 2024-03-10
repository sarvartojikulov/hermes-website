"use client";
import { Navigation } from "swiper/modules";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import { Headline } from "./Headline";
import { ViewfinderCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { InstagramMedia } from "@/base/types";

const Blog: React.FC<{feeds : InstagramMedia[]}> = ({feeds}) => {
  const [modal, setModal] = useState<boolean>(false);
  const [image, setImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const keyboardEvent = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      const isCombinedKey = event.ctrlKey || event.altKey || event.shiftKey;
      if (isCombinedKey) {
        return;
      }

      setModal(false);
      setImage(undefined);
    };
    document.addEventListener("keydown", keyboardEvent);

    return () => {
      document.removeEventListener("keydown", keyboardEvent);
    };
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
      {modal && image && (
        <div className="fixed left-0 top-0 z-10 h-screen w-screen overflow-auto bg-gray-900 bg-opacity-80">
          <div className="relative flex h-full w-full items-center justify-center">
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
            <div className="relative max-h-[600px] w-full cursor-pointer px-6 md:px-12">
              <img
                className="row-span-3 mx-auto max-h-[600px] w-full max-w-[1200px] object-contain"
                src={image}
                width={600}
                height={600}
                alt="blog post image"
                onClick={() => {
                  setModal(false);
                }}
              />
              <div
                className="absolute bottom-0 right-6 bg-black  bg-opacity-60 text-white md:right-12 "
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
              <Post post={item} onImageClick={toggleImage}/>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full mt-12 flex justify-between">
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
        {/* <button
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
        </button> */}
      </div>
    </React.Fragment>
  );
};

type PostProps = {
  post: InstagramMedia
  onImageClick: (img: string) => void;
};

const Post: React.FC<PostProps> = ({ post : {media_url, caption}, onImageClick }) => {
  const [isPriority, setIsPriority] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPriority(true);
    }, 3000);
  }, []);

  return (
    <div className="col-span-full flex flex-col gap-4 md:col-span-3">
      <div className="relative cursor-pointer ">
        <img
          className="col-span-1 row-span-3 w-full aspect-9/16 object-cover min-h-80 max-h-80"
          src={media_url}
          alt="blog post image"
          width="600"
          height="600"
          onClick={() => {
            onImageClick(media_url);
          }}
        />
        <div
          className="absolute bottom-0 right-0 bg-black bg-opacity-60 text-white "
          onClick={() => {
            onImageClick(media_url);
          }}
        >
          <ViewfinderCircleIcon width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
