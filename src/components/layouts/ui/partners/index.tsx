import { useEffect } from "react";
import Swiper from "swiper/bundle";

export default function Partners(){
    useEffect(() => {
        if (typeof window !== "undefined"){
            new Swiper(".ed-partners-slider",{
                slidesPerView: 2,
                spaceBetween: 130,
                autoplay: true,
                breakpoints: {
                    0: { slidesPerView: 2, spaceBetween: 40, },
                    480: { slidesPerView: 3, spaceBetween: 90, },
                    576: { slidesPerView: 3, },
                    768: { slidesPerView: 4, },
                    1200: { slidesPerView: 5, },
                    1400: { slidesPerView: 6, }
                },
            });
        }
    },[]);

    return(
        // <!-- partners -->
        <div className="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
            <div className="ed-partners-slider swiper my-[100px] xl:my-[70px] md:my-[50px]">
                <div className="swiper-wrapper">
                    {/* <!-- single partner --> */}
                    <div className="swiper-slide"><img src="assets/img/partner-1.png" alt="Partner Logo"/></div>
                    {/* <!-- single partner --> */}
                    <div className="swiper-slide"><img src="assets/img/partner-2.png" alt="Partner Logo"/></div>
                    {/* <!-- single partner --> */}
                    <div className="swiper-slide"><img src="assets/img/partner-3.png" alt="Partner Logo"/></div>
                    {/* <!-- single partner --> */}
                    <div className="swiper-slide"><img src="assets/img/partner-4.png" alt="Partner Logo"/></div>
                    {/* <!-- single partner --> */}
                    <div className="swiper-slide"><img src="assets/img/partner-5.png" alt="Partner Logo"/></div>
                    {/* <!-- single partner --> */}
                    <div className="swiper-slide"><img src="assets/img/partner-6.png" alt="Partner Logo"/></div>
                    {/* <!-- single partner --> */}
                    <div className="swiper-slide"><img src="assets/img/partner-1.png" alt="Partner Logo"/></div>
                    {/* <!-- single partner --> */}
                    <div className="swiper-slide"><img src="assets/img/partner-2.png" alt="Partner Logo"/></div>
                </div>
            </div>
        </div>
    )
}