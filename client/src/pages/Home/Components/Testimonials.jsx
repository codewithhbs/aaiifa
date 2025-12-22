import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
    return (
        <section className="testimonials section-padding-md bg-color-light">
            <div className="container">

               <div className="d-flex align-items-center justify-content-between w-100">
    <div className="section-heading heading-layout1 paragraph-layout1 flex-grow-1 d-flex justify-content-center">
        <div className="text-center">
            <div className="our-team-subtitle mb-2 px-4">OUR CLIENTS</div>
            <h2 className="our-team-title mb-4 px-4">Happy with Customers</h2>
        </div>
    </div>

    <div className="owl-custom-nav-layout1 ms-3">
        <button className="rt-prev swiper-button-prev">
            <i className="fas fa-angle-left"></i>
        </button>
        <button className="rt-next swiper-button-next">
            <i className="fas fa-angle-right"></i>
        </button>
    </div>
</div>


                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    loop={true}
                    spaceBetween={30}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 3 },
                    }}
                >
                    <SwiperSlide>
                        <div className="fxt-testimonial-box-layout1">
                            <div className="item-qoute">
                                <i className="flaticon-double-quotes"></i>
                            </div>
                            <p>
 AIIFA has played a key role in uniting the induction furnace community and giving strong representation to over 1000 units. Their work continues to improve production standards and support overall industry-wide growth across the nation remarkably.
</p>

                            <div className="item-client">
                                {/* <div className="item-img">
                                    <img src="media/figure/testimonial1.jpg" alt="testimonial" />
                                </div> */}
                                <div className="item-content">
                                    <h3 className="item-title">R. K. Sharma</h3>
                                    <div className="item-subtitle">Steel Plant Owner</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="fxt-testimonial-box-layout1">
                            <div className="item-qoute">
                                <i className="flaticon-double-quotes"></i>
                            </div>
                            <p>
  The Association’s impact on India’s steel sector is impressive. Their
  continuous initiatives support furnace operators and rolling mills, helping
  strengthen domestic production and ensuring steady progress toward
  sustainable and modern industry practices.
</p>

                            <div className="item-client">
                                {/* <div className="item-img">
                                    <img src="media/figure/testimonial2.jpg" alt="testimonial" />
                                </div> */}
                                <div className="item-content">
                                    <h3 className="item-title">Manoj Mehta</h3>
                                    <div className="item-subtitle">Rolling Mill Consultant</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="fxt-testimonial-box-layout1">
                            <div className="item-qoute">
                                <i className="flaticon-double-quotes"></i>
                            </div>
                            <p>
  AIIFA brings together knowledgeable and dedicated professionals committed to
  the industry’s future. Their guidance and leadership have consistently
  helped shape better practices and create a stronger, more progressive steel
  ecosystem nationwide.
</p>

                            <div className="item-client">
                                {/* <div className="item-img">
                                    <img src="media/figure/testimonial3.jpg" alt="testimonial" />
                                </div> */}
                                <div className="item-content">
                                    <h3 className="item-title">Saikat Barman</h3>
                                    <div className="item-subtitle">Industry Professional</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </section>
    );
}