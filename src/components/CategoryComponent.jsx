import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { getCategories } from "../api/apiCategory";
import CardCategoryComponent from "./-child/CardCategoryComponent";

const CategoryComponent = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const res = getCategories();
    setCategories(res);
  });

  const listCategory = categories.map((category) => {
    return (
      <SwiperSlide key={category.id}>
        <CardCategoryComponent key={category.id} {...category} />
      </SwiperSlide>
    );
  });
  return (
    <>
      <h1 className="title" style={{color:"white"}}>Danh mục món ăn</h1>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        spaceBetween={10}
        modules={[Navigation]}
        breakpoints={{
          560: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          665: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          870: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },

          1300: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        }}
        className="mySwiper categories"
      >
        {listCategory}
      </Swiper>
    </>
  );
};

export default CategoryComponent;
