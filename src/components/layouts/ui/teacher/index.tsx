/* eslint-disable @typescript-eslint/no-explicit-any */
import supabase from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

export default function Teacher(){
    const[data, setData] = useState<any[]>([]);

    useEffect(()=>{

        //fetchdata
        const getData = async () => {
            const { data, error } = await supabase
            .from("teacher_data")
            .select()
            .order("id", { ascending: true });
            if (error) {
              console.error("Error fetching teacher_data data",data);
            } else {
              setData(data);
            }
          };
          getData();
    }
)

    return(
        // <!-- TEACHER SECTION START -->
        <section className="bg-[#FAF9F6] py-[120px] xl:py-[80px] md:py-[60px] relative z-[1]">
            <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
                {/* <!-- heading --> */}
                <div className="flex flex-wrap xs:flex-col xs:text-center justify-between items-center gap-y-[15px] mb-[46px] md:mb-[30px]">
                    <div>
                        <h6 className="ed-section-sub-title">Our Expert</h6>
                        <h2 className="ed-section-title">Our Expert teacher</h2>
                    </div>

                    <a href="#" className="ed-btn !bg-transparent border border-edpurple !text-edpurple hover:!bg-edpurple hover:!text-white">view all teacher <span className="icon pl-[10px]"><i className="fa-solid fa-arrow-right-long"></i></span></a>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-2 xxs:grid-cols-1 gap-[30px] lg:gap-[20px]">
                    {/* <!-- single teacher --> */}
                    {data.map((teacher_data, index)=>(    
                    <div key={index} className="ed-teacher group">
                        <div className="ed-teacher__img rounded-[16px] overflow-hidden">
                            <img src={teacher_data.img_teacher} alt="Team Member Image" className="w-full aspect-[370/375] duration-[400ms] group-hover:scale-110"/>
                        </div>

                        <div className="ed-teacher__txt bg-white relative z-[1] mx-[25px] lg:mx-[20px] md:mx-[15px] xs:mx-[5px] -mt-[44px] md:-mt-[15px] xs:mt-0 rounded-[16px] shadow-[0_4px_60px_rgba(18,96,254,0.12)] px-[25px] xl:px-[20px] md:px-[15px] pb-[30px] lg:pb-[25px] md:pb-[20px] before:w-full before:absolute before:-z-[1] before:h-full before:bg-white before:left-0 before:rounded-[16px] before:-top-[33px] before:skew-y-[4deg]">
                            <div className="ed-teacher-socials absolute right-[20px] -top-[43px]">
                                <div className="ed-speaker__socials flex flex-col gap-[8px] absolute -z-[2] text-[14px] opacity-0 transition duration-[400ms] bottom-[calc(100%+8px)] translate-y-[100%] group-hover:translate-y-0 group-hover:opacity-100">
                                    <a href={teacher_data.facebook_teacher} className="bg-white text-edpurple w-[36px] h-[36px] flex items-center justify-center rounded-full hover:text-white hover:bg-edpurple"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href={teacher_data.x_teacher} className="bg-white text-edpurple w-[36px] h-[36px] flex items-center justify-center rounded-full hover:text-white hover:bg-edpurple"><i className="fa-brands fa-x-twitter"></i></a>
                                    <a href={teacher_data.linkedin_teacher} className="bg-white text-edpurple w-[36px] h-[36px] flex items-center justify-center rounded-full hover:text-white hover:bg-edpurple"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href={teacher_data.instagram_teacher} className="bg-white text-edpurple w-[36px] h-[36px] flex items-center justify-center rounded-full hover:text-white hover:bg-edpurple"><i className="fa-brands fa-instagram"></i></a>
                                </div>
                                <div className="ed-teacher-socials__icon bg-edpurple w-[36px] aspect-square rounded-full bg-etBlue flex items-center justify-center">
                                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.89361 9.41703C9.22284 9.41703 8.61849 9.70668 8.19906 10.1675L4.42637 7.83088C4.52995 7.56611 4.58305 7.28429 4.58294 6.99999C4.58307 6.71568 4.52997 6.43386 4.42637 6.16909L8.19906 3.83238C8.61851 4.29318 9.22284 4.58297 9.89361 4.58297C11.1572 4.58297 12.1851 3.55501 12.1851 2.29143C12.1851 1.02785 11.1572 0 9.89361 0C8.63005 0 7.60209 1.02796 7.60209 2.29154C7.60204 2.57583 7.65514 2.85763 7.75866 3.1224L3.98608 5.45903C3.56663 4.99824 2.96231 4.70845 2.29154 4.70845C1.02796 4.70845 0 5.73652 0 6.99999C0 8.26354 1.02796 9.29152 2.29154 9.29152C2.96228 9.29152 3.56666 9.00185 3.98608 8.54094L7.75869 10.8776C7.65515 11.1424 7.60204 11.4242 7.60209 11.7085C7.60209 12.972 8.63003 14 9.89361 14C11.1572 14 12.1851 12.972 12.1851 11.7086C12.1851 10.445 11.1572 9.41703 9.89361 9.41703ZM8.43766 2.29154C8.43766 1.48873 9.09082 0.835596 9.89361 0.835596C10.6964 0.835596 11.3495 1.48873 11.3495 2.29154C11.3495 3.09435 10.6964 3.74748 9.89361 3.74748C9.09079 3.74748 8.43766 3.09432 8.43766 2.29154ZM2.29154 8.45593C1.48862 8.45593 0.835487 7.80277 0.835487 6.99999C0.835487 6.1972 1.48862 5.54404 2.29154 5.54404C3.09435 5.54404 3.74737 6.1972 3.74737 6.99999C3.74737 7.80277 3.09432 8.45593 2.29154 8.45593ZM8.43766 11.7085C8.43766 10.9057 9.09082 10.2525 9.89361 10.2525C10.6964 10.2525 11.3495 10.9057 11.3495 11.7084C11.3495 12.5112 10.6964 13.1644 9.89361 13.1644C9.09079 13.1644 8.43766 12.5112 8.43766 11.7084V11.7085Z" fill="white"></path>
                                    </svg>
                                </div>
                            </div>
                            <h5 className="font-semibold text-[20px] text-etBlack mb-[4px]"><a href="teacher-details.html" className="hover:text-etBlue">{teacher_data.name_teacher}</a></h5>
                            <span className="text-etGray text-[16px]">{teacher_data.role_teacher}</span>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            {/* <!-- vector --> */}
            <div>
                <img src="/assets/img/teacher-vector-1.svg" alt="vecotr" className="pointer-events-none absolute -z-[1] bottom-0 left-0"/>
                <img src="/assets/img/teacher-vector-2.svg" alt="vecotr" className="pointer-events-none absolute -z-[1] top-[105px] right-0"/>
            </div>
        </section>
    )
}