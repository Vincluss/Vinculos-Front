import Style from "../css/carrossel_home.module.css";
import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function carrossel_todos() {

    const data = [
        { id: "1", image: 'https://www.sp.senai.br/images/senai.svg'},
        { id: "2", image: 'https://www.sp.senai.br/images/senai.svg'},
        { id: "3", image: 'https://www.sp.senai.br/images/senai.svg'},
        { id: "4", image: 'https://www.sp.senai.br/images/senai.svg'},
    ]

    return (
        <>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
            >
              {data.map( (item) => (
                <SwiperSlide key={item.id}>
                    <img
                        src={item.image}
                        alt="Slider"
                        className="slide-item"
                    />
                </SwiperSlide>
              ))}
            </Swiper>
        </>
    )
}