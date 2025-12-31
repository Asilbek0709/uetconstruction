"use client"
import "../globals.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Slider() {
    return(
        <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ 
                clickable: true, 
                renderBullet: (index, className) => {
                    return `
                        <span class="${className} custom-line">
                            <span class="progress"></span>
                        </span>
                    `
                }
            }}
            autoplay={{ 
                delay: 4000,
                disableOnInteraction: false,
            }}
            loop
            className="heroSwiper"
        >
           
                <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar2.jpg')"}}>
                    <div className="overlay" >
                        <h1>XORAZM SARIMAY 126MW PROJECT</h1>
                        <Link className='hover-link' href={'/projects'}>Projects</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar3.jpg')"}}>
                    <div className="overlay">
                        <h1>XORAZM SARIMAY 126MW PROJECT</h1>
                        <Link className='hover-link' href={'/projects'}>Projects</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar4.jpg')"}}>
                    <div className="overlay">
                        <h1>YANGI YO'L PLANT</h1>
                        <Link className='hover-link' href={'/projects'}>Projects</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar5.jpg')"}}>
                    <div className="overlay">
                        <h1>BEKABAD MANUFACTURING PLANT</h1>
                        <Link className='hover-link' href={'/projects'}>Projects</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar7.jpg')"}}>
                    <div className="overlay">
                        <h1>CONSTRUCTION OF A 30 KW SOLAR PHOTOVOLTAIC POWER PLANT AT KORLI-TOG STATION</h1>
                        <Link className='hover-link' href={'/projects'}>Projects</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar8.jpg')"}}>
                    <div className="overlay">
                        <h1>Waste Water Treatment Park</h1>
                        <Link className='hover-link' href={'/projects'}>Projects</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar1.jpg')"}}>
                    <div className="overlay">
                        <h1>XORAZM SARIMAY 126MW PROJECT</h1>
                        <Link className='hover-link' href={'/projects'}>Projects</Link>             
                    </div>
                </div>
            </SwiperSlide> 
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar9.jpg')"}}>
                    <div className="overlay">
                        <h1>PRESIDENTIAL SCHOOL</h1>
                        <Link className='hover-link' href={'/projects'}>Projects</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar10.jpg')"}}>
                    <div className="overlay">
                        <h1>Waste Water Treatment Park</h1>
                        <Link className='hover-link' href={'/projects'}>Projects</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar11.jpg')"}}>
                    <div className="overlay">
                        <h1>SOLAR PHOTOVOLTAIC POWER PLANT</h1>
                        <Link className='hover-link' href={'/projects'}>Projects</Link>             
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}