/* eslint-disable @typescript-eslint/no-explicit-any */
import supabase from "@/utils/supabaseClient";
import { useEffect, useState } from "react";
import Swiper from "swiper/bundle";

export default function Banner() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    // swiper
    if (typeof window !== "undefined") {
      new Swiper(".ed-banner-slider", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: ".ed-banner-slider-nav .prev",
          nextEl: ".ed-banner-slider-nav .next",
        },
      });
    }

    //fetchdata supabase
    const getData = async () => {
      const { data, error } = await supabase
        .from("banner")
        .select()
        .order("id", { ascending: true });
      if (error) {
        console.error("Error fetching banner data");
      } else {
        setData(data);
      }
    };
    getData();
  }, []);

  return (
    // <!-- BANNER SECTION START -->
    <section>
      <div className="ed-banner-slider swiper relative">
        <div className="swiper-wrapper">
          {/* <!-- single slide --> */}
          {data.map((banner_data, index) => (
            <div key={index} className="swiper-slide">
              <div className="pt-[390px] md:pt-[300px] xs:pt-[280px] pb-[205px]  bg-no-repeat bg-center bg-cover relative z-[1] before:absolute before:-z-[1] before:inset-0 before:bg-edblue/70 before:pointer-events-none"
              style={{
                backgroundImage: `url(${banner_data.img_banner})`
              }}
              >
                <div className="mx-[10%] md:mx-[15px]">
                  <div className="text-white w-[48%] xl:w-[60%] md:w-[70%] sm:w-[80%] xs:w-full">
                    <h6 className="font-medium uppercase tracking-[3px] mb-[16px]">
                      {banner_data.heading_banner}{" "}
                    </h6>
                    <h2 className="font-bold text-[clamp(35px,4.57vw,80px)] leading-[1.13] mb-[15px]">
                      {banner_data.title_banner}
                    </h2>
                    <p className="leading-[1.75] mb-[41px]">
                      {banner_data.desc_banner}
                    </p>
                    <div className="flex items-center gap-[20px]">
                      <a 
                      href={banner_data?.btn_nav_left} 
                      className="ed-btn">
                        {banner_data.btn_text_left}
                      </a>
                      <a
                        href={banner_data?.btn_nav_right}
                        className="ed-btn !bg-transparent border border-white hover:!bg-white hover:text-edpurple"
                      >
                        {banner_data.btn_text_right}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
