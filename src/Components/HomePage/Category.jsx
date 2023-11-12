import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"
import SectionTitle from '../title/SectionTitle';

const Category = () => {
    return (     
      <section className='mb-10'>
        <SectionTitle subHeading={"From 11.00am to 11.00 pm"} heading={"Order Online"}>
        </SectionTitle> 
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="text-3xl text-center -mt-12 text-white uppercase">Salad</h3>
          </SwiperSlide>
          <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-3xl text-center -mt-12 text-white uppercase">Pizzas</h3>
          </SwiperSlide>
          <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-3xl text-center -mt-12 text-white uppercase">Soups</h3>
          </SwiperSlide>
          <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-3xl text-center -mt-12 text-white uppercase">Desserts</h3>
          </SwiperSlide>
          <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-3xl text-center -mt-12 text-white uppercase">Salad</h3>
          </SwiperSlide>
        </Swiper>
        </section>
    );
};

export default Category;