import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import Slider1 from '../../../assets/Slider1.jpeg'
import Slider2 from '../../../assets/Slider2.webp'
import Slider3 from '../../../assets/Slider3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { AuthContext } from '../../../Context/AuthContext';


const Banner = () => {
    return (
        <div>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                loop={true}
                pagination={{ clickable: true }}
                className="w-full h-[200px] sm:h-[300px] md:h-[650px]  "
            >
                {[Slider3, Slider1, Slider2].map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover "
                        />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Banner;