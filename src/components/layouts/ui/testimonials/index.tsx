

export default function Testimonials() {
    

    return (
        // <!-- TESTIMONIAL SECTION START -->
        <section className="py-[120px] xl:py-[80px] md:py-[60px]">
            <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
                <div className="flex md:flex-col items-start gap-y-[40px]">
                    {/* <!-- testimonial --> */}
                    <div className="max-w-[50%] md:max-w-full">
                        {/* <!-- heading --> */}
                        <div className="pb-[40px] sm:pb-[20px] bg-[url('/assets/img/testimonial-heading-vector.svg')] bg-no-repeat bg-left-bottom bg-[length:1000px] mb-[40px]  md:bg-none md:mb-0">
                            <h6 className="ed-section-sub-title">Testimonials</h6>
                            <h2 className="ed-section-title !text-[30px]">Students Feedback</h2>
                        </div>

                        <div className="flex xxs:flex-col gap-[15px] items-center relative pr-[35px]">
                            <div className="ed-testimonial-slider swiper max-w-full">
                                <div className="swiper-wrapper">
                                    {/* <!-- single testimony --> */}
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="inline-flex gap-[6px] text-[14px] mb-[20px]">
                                                <span className="text-[#F39F5F]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F39F5F]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F39F5F]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F39F5F]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#BCBCBC]"><i className="fa-solid fa-star"></i></span>
                                            </div>
                                            <p className="text-edgray mb-[24px]">Nullam dignissim ante scelerisque the is euismod fermentum odio sem semper the is erat a feugiat leo urna eget eros. Duis Aenean a imperdiet risus. Aliquam pellentesque.</p>
                                            <div>
                                                <h6 className="font-semibold text-[18px] text-edblue mb-[4px]">Ronald Richards</h6>
                                                <span className="text-edgray">Co, Founder</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- single testimony --> */}
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="inline-flex gap-[6px] text-[14px] mb-[20px]">
                                                <span className="text-[#F39F5F]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F39F5F]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F39F5F]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F39F5F]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#BCBCBC]"><i className="fa-solid fa-star"></i></span>
                                            </div>
                                            <p className="text-edgray mb-[24px]">Nullam dignissim ante scelerisque the is euismod fermentum odio sem semper the is erat a feugiat leo urna eget eros. Duis Aenean a imperdiet risus. Aliquam pellentesque.</p>
                                            <div>
                                                <h6 className="font-semibold text-[18px] text-edblue mb-[4px]">Ronald Richards</h6>
                                                <span className="text-edgray">Co, Founder</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- single testimony --> */}
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="inline-flex gap-[6px] text-[14px] mb-[20px]">
                                                <span className="text-[#F39F5F]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F39F5F]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F39F5F]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F39F5F]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#BCBCBC]"><i className="fa-solid fa-star"></i></span>
                                            </div>
                                            <p className="text-edgray mb-[24px]">Nullam dignissim ante scelerisque the is euismod fermentum odio sem semper the is erat a feugiat leo urna eget eros. Duis Aenean a imperdiet risus. Aliquam pellentesque.</p>
                                            <div>
                                                <h6 className="font-semibold text-[18px] text-edblue mb-[4px]">Ronald Richards</h6>
                                                <span className="text-edgray">Co, Founder</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-[10px] items-center absolute z-[1] bottom-[10px] right-0 ed-testimonial-slider-controls">
                                    <button className="prev hover:text-edpurple"><i className="fa-solid fa-arrow-left-long"></i></button>
                                    <div className="ed-testimonial-slider-pagination font-semibold text-[14px] text-edblue"></div>
                                    <button className="next hover:text-edpurple"><i className="fa-solid fa-arrow-right-long"></i></button>
                                </div>
                            </div>

                            {/* <!-- slider dots --> */}
                            <div className="flex items-start flex-col xxs:hidden shrink-0 space-y-[40px] relative z-[1] before:absolute before:top-[50%] before:-translate-y-[50%] before:right-[28px] before:w-[138px] before:h-[420px] before:bg-[url('/assets/img/testimonial-img-slider-vector.svg')] before:bg-no-repeat before:bg-center before:bg-[length:100%_100%] before:-z-[1] before:opacity-10 before:pointer-events-none">
                                <div className="rounded-full overflow-hidden inline-block border border-edpurple p-[5px] even:ml-[40px]">
                                    <img src="/assets/img/user-2.png" alt="user" className="rounded-full w-[90px] aspect-square"/>
                                </div>
                                <div className="rounded-full overflow-hidden inline-block border border-edpurple p-[5px] even:ml-[40px]">
                                    <img src="/assets/img/user-3.png" alt="user" className="rounded-full w-[90px] aspect-square"/>
                                </div>
                                <div className="rounded-full overflow-hidden inline-block border border-edpurple p-[5px] even:ml-[40px]">
                                    <img src="/assets/img/user-4.png" alt="user" className="rounded-full w-[90px] aspect-square"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- upcoming events --> */}
                    <div>
                        {/* <!-- heading --> */}
                        <div className="pb-[40px] sm:pb-[20px] flex justify-end md:justify-start bg-[url('/assets/img/testimonial-heading-vector.svg')] bg-no-repeat bg-right-bottom bg-[length:1000px] mb-[40px] md:bg-none md:mb-0">
                            <div>
                                <h6 className="ed-section-sub-title">Event</h6>
                                <h2 className="ed-section-title !text-[30px]">Upcoming Events</h2>
                            </div>
                        </div>
                        <div className="grow space-y-[30px]">
                            {/* <!-- single upcoming event --> */}
                            <div className="bg-white flex lg:flex-col items-start gap-x-[20px] gap-y-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-[20px] p-[30px] xxs:p-[20px]">
                                {/* <!-- date --> */}
                                <div className="bg-edyellow rounded-[10px] font-medium text-[16px] text-black inline-block uppercase overflow-hidden text-center shrink-0">
                                    <span className="bg-edpurple text-white text-[20px] block py-[7px] px-[30px] rounded-[10px]">2024</span>
                                    <span className="px-[15px] p-[10px] block leading-[1.44] font-semibold">20 <span className="block">Oct</span></span>
                                </div>

                                {/* <!-- text --> */}
                                <div>
                                    <h5 className="font-semibold text-[20px] mb-[7px]"><a href="#" className="hover:text-edpurple">SAT Implementation Workshops November 2026</a></h5>
                                    <h6 className="text-edpurple font-medium">11:00 - 13:30</h6>
                                    <p className="border-t border-[#002147]/20 pt-[17px] mt-[10px]">There are many variations of passages of Lorem Ipsum available, but the majority</p>
                                </div>
                            </div>

                            {/* <!-- single upcoming event --> */}
                            <div className="bg-white flex lg:flex-col items-start gap-x-[20px] gap-y-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-[20px] p-[30px] xxs:p-[20px]">
                                {/* <!-- date --> */}
                                <div className="bg-edyellow rounded-[10px] font-medium text-[16px] text-black inline-block uppercase overflow-hidden text-center shrink-0">
                                    <span className="bg-edpurple text-white text-[20px] block py-[7px] px-[30px] rounded-[10px]">2024</span>
                                    <span className="px-[15px] p-[10px] block leading-[1.44] font-semibold">20 <span className="block">Oct</span></span>
                                </div>

                                {/* <!-- text --> */}
                                <div>
                                    <h5 className="font-semibold text-[20px] mb-[7px]"><a href="#" className="hover:text-edpurple">SAT Implementation Workshops November 2026</a></h5>
                                    <h6 className="text-edpurple font-medium">11:00 - 13:30</h6>
                                    <p className="border-t border-[#002147]/20 pt-[17px] mt-[10px]">There are many variations of passages of Lorem Ipsum available, but the majority</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}