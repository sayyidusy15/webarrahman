import { useEffect } from "react";
import Swiper from "swiper/bundle";

export default function Banner() {
  useEffect(() => {
    // Pastikan Swiper hanya diinisialisasi di sisi klien
    if (typeof window !== "undefined") {
      new Swiper(".ed-banner-slider", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
        navigation: {
          prevEl: ".ed-banner-slider-nav .prev",
          nextEl: ".ed-banner-slider-nav .next",
        },
      });
    }
  }, []);

  return (
    // <!-- BANNER SECTION START -->
    <section>
      <div className="ed-banner-slider swiper relative">
        <div className="swiper-wrapper">
          {/* <!-- single slide --> */}
          <div className="swiper-slide">
            <div className="pt-[390px] md:pt-[300px] xs:pt-[280px] pb-[205px] bg-[url('/assets/img/banner-bg-1.jpg')] bg-no-repeat bg-center bg-cover relative z-[1] before:absolute before:-z-[1] before:inset-0 before:bg-edblue/70 before:pointer-events-none">
              <div className="mx-[10%] md:mx-[15px]">
                <div className="text-white w-[48%] xl:w-[60%] md:w-[70%] sm:w-[80%] xs:w-full">
                  <h6 className="font-medium uppercase tracking-[3px] mb-[16px]">
                    Welcome to School in{" "}
                    <span className="text-edyellow">NY</span>
                  </h6>
                  <h2 className="font-bold text-[clamp(35px,4.57vw,80px)] leading-[1.13] mb-[15px]">
                    The Best School in Your Town
                  </h2>
                  <p className="leading-[1.75] mb-[41px]">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled
                  </p>
                  <div className="flex items-center gap-[20px]">
                    <a href="contact.html" className="ed-btn">
                      Apply now
                    </a>
                    <a
                      href="about.html"
                      className="ed-btn !bg-transparent border border-white hover:!bg-white hover:text-edpurple"
                    >
                      About us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- single slide --> */}
          <div className="swiper-slide">
            <div className="pt-[390px] md:pt-[300px] xs:pt-[280px] pb-[205px] bg-[url('/assets/img/banner-bg-2.jpg')] bg-no-repeat bg-center bg-cover relative z-[1] before:absolute before:-z-[1] before:inset-0 before:bg-edblue/70 before:pointer-events-none">
              <div className="mx-[10%] md:mx-[15px]">
                <div className="text-white w-[48%] xl:w-[60%] md:w-[70%] sm:w-[80%] xs:w-full">
                  <h6 className="font-medium uppercase tracking-[3px] mb-[16px]">
                    Welcome to School in{" "}
                    <span className="text-edyellow">NY</span>
                  </h6>
                  <h2 className="font-bold text-[clamp(35px,4.57vw,80px)] leading-[1.13] mb-[15px]">
                    The Best School in Your Town
                  </h2>
                  <p className="leading-[1.75] mb-[41px]">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled
                  </p>
                  <div className="flex items-center gap-[20px]">
                    <a href="#" className="ed-btn">
                      Apply now
                    </a>
                    <a
                      href="#"
                      className="ed-btn !bg-transparent border border-white hover:!bg-white hover:text-edpurple"
                    >
                      About us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- icon nav --> */}
        <div className="ed-banner-slider-nav absolute z-[1] top-[50%] xs:top-[80%] right-[130px] md:right-[60px] sm:right-[40px] xs:hidden flex flex-col gap-[15px] *:w-[40px] *:h-[40px] *:rounded-full *:border *:border-white/20 *:text-white *:text-[18px]">
          <button className="prev hover:bg-edyellow hover:border-edyellow hover:text-black">
            <i className="fa-solid fa-angle-up"></i>
          </button>
          <button className="next leading-[43px] hover:bg-edyellow hover:border-edyellow hover:text-black">
            <i className="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </div>
    </section>
    // <!-- BANNER SECTION END -->
  );
}
