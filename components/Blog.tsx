import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import useBreakpoint from "@/hooks/useBreakpoint";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";

const posts = [
    {
        title: "1 Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        description:
            "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    },
    {
        title: "2 Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        description:
            "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    },
    {
        title: "3 Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        description:
            "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    },
    {
        title: "4 Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        description:
            "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    },
];

const Blog: React.FC = () => {
    const breakpoint = useBreakpoint();
    return (
        <React.Fragment>
            <Swiper
                spaceBetween={50}
                modules={[Navigation]}
                slidesPerView={
                    breakpoint === "lg" ? 3 : breakpoint === "md" ? 2 : 1
                }
                loop
                navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
            >
                {posts.map((item, i) => (
                    <SwiperSlide key={item.title + i}>
                        <Post post={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="arrow-left absolute -left-20 top-1/2 cursor-pointer">
              <ChevronLeftIcon className="text-black w-10 h-10"/>
            </button>
            <button className="arrow-right absolute -right-20 top-1/2 cursor-pointer">
              <ChevronRightIcon className="text-black w-10 h-10"/>
              </button>
        </React.Fragment>
    );
};

type PostProps = {
    post: {
        title: string;
        description: string;
    };
};

const Post: React.FC<PostProps> = ({ post: { title, description } }) => {
    return (
        <div className="col-span-full md:col-span-3 flex flex-col gap-4">
            <img
                className="col-span-1 row-span-3 max-h-60 w-full object-cover"
                src="https://placehold.co/600x550"
                alt="s"
            />
            <div className="flex flex-col gap-4">
                <div className="col-start-2 font-semibold text-lg line-clamp-2 max-h-14">
                    {title}
                </div>
            </div>
        </div>
    );
};

export default Blog;
