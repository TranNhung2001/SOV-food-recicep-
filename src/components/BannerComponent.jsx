import React from "react";
import fakeData from "../data/food.json";
import { Col, Row } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const BannerComponent = () => {
  const banner = fakeData.map((food, index) => {
    if (index < 3) {
      return (
        <SwiperSlide>
          <div className="slide">
            <Row
              gutter={[{ sm: 70 }, { sm: 24 }]}
              align={"middle"}
              justify={"center"}
            >
              <Col
                sm={24}
                lg={16}
                className="slide-img"
                style={{ padding: "0px" }}
              >
                <img src={food.img} />
              </Col>
              <Col sm={22} lg={7} className="slide-content">
                <h1 className="slide-title">{food.name}</h1>
                <p className="slide-decr">{food.decr}</p>
              </Col>
            </Row>
          </div>
        </SwiperSlide>
      );
    }
  });
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {banner}
      </Swiper>
    </>
  );
};

export default BannerComponent;
