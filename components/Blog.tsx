import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import useBreakpoint from "@/hooks/useBreakpoint";
import React from "react";

const posts = [
    {
        title: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        description:
            "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    },
    {
        title: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        description:
            "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    },
    {
        title: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        description:
            "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    },
    {
        title: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        description:
            "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    },
];

const Blog: React.FC = () => {
    const breakpoint = useBreakpoint();
    return (
        <div>
            <Swiper
                spaceBetween={50}
                modules={[Navigation]}
                slidesPerView={
                    breakpoint === "lg" ? 3 : breakpoint === "md" ? 2 : 1
                }
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            >
                {posts.map((item, i) => (
                    <SwiperSlide key={item.title + i}>
                        <Post post={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="arrow-left border border-black">Prev</button>
        <button className="arrow-right arrow">next</button>
        </div>
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
