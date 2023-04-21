import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CategoryCard from "../component/CategoryCard";
const CategoriesSection =()=>{
    return(
        <div className="py-10 pt-14 md:pt-32">
            <div className="page-width">
                <h2 className="text-2xl text-center font-bold text-white md:text-4xl mb-14">Explore creators by categories</h2>
                <div className="overflow-x-auto">
                <div className="category__tabs">
                    <span className="active_tab category_tab">Fitness</span>
                    <span className="category_tab">Cosplay</span>
                    <span className="category_tab">Magic</span>
                    <span className="category_tab">Adventure</span>
                </div>
                </div>
                <div className="-mx-6">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        scrollbar={{ draggable: true }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.5,
                                spaceBetween: 10,
                                centeredSlides: true
                            },
                            575: {
                                slidesPerView: 2.2,
                                spaceBetween: 20,
                                centeredSlides: true
                            },
                            768: {
                                slidesPerView: 3.2,
                                spaceBetween: 20,
                                centeredSlides: true
                            },
                            1199: {
                                slidesPerView: 4,
                                centeredSlides: false
                            },
                        }}
                    >
                        <SwiperSlide><CategoryCard /></SwiperSlide>
                        <SwiperSlide><CategoryCard /></SwiperSlide>
                        <SwiperSlide><CategoryCard /></SwiperSlide>
                        <SwiperSlide><CategoryCard /></SwiperSlide>
                        <SwiperSlide><CategoryCard /></SwiperSlide>
                        <SwiperSlide><CategoryCard /></SwiperSlide>
                        <SwiperSlide><CategoryCard /></SwiperSlide>
                        <SwiperSlide><CategoryCard /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default CategoriesSection;