import React from 'react'
import AVA1 from '../../assets/avatar1.jpg'
import AVA2 from '../../assets/avatar2.jpg'
import AVA3 from '../../assets/avatar3.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './testimonials.css'

const Testimonials = () => {
  return (
    <section>
        <h5>Reviw from clients</h5>
        <h2>Testimonials</h2>

        <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
            <SwiperSlide className='testimonial'>
                <div className='client__avatar'>
                    <img src={AVA1} alt="Avatar one" />
                </div>
                    <h5 className='client__name'>Bussines</h5>
                    <small className='client__review'>
                        Andres es el mejor de lo programdors. Sit itaque neque laboriosam accusamus deserunt earum, et alias deleniti, iste quaerat eius, natus placeat ut delectus odit. Eaque ipsam enim accusamus?
                    </small>
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
                <div className='client__avatar'>
                    <img src={AVA2} alt="Avatar one" />
                </div>
                    <h5 className='client__name'>Bussines</h5>
                    <small className='client__review'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit itaque neque laboriosam accusamus deserunt earum, et alias deleniti, iste quaerat eius, natus placeat ut delectus odit. Eaque ipsam enim accusamus?
                    </small>
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
                <div className='client__avatar'>
                    <img src={AVA3} alt="Avatar one" />
                </div>
                    <h5 className='client__name'>Bussines</h5>
                    <small className='client__review'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit itaque neque laboriosam accusamus deserunt earum, et alias deleniti, iste quaerat eius, natus placeat ut delectus odit. Eaque ipsam enim accusamus?
                    </small>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Testimonials