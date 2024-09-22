/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import supabase from '@/utils/supabaseClient';

export default function About (){
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
        const { data, error } = await supabase
        .from("about_us_landingPage")
        .select()
        .order('id', { ascending: true }); 
        if (error) {
            console.error('Error fetching features data:', error);
        } else {
            setData(data);
        }
        };

        getData();
    }, []);

    return(
        // <!-- ABOUT SECTION START -->
        <section className="py-[120px] xl:py-[80px] md:py-[60px]">
            <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
            {data.map((about_data,index)=>(
                <div key={index} className="flex md:flex-col justify-between items-center gap-x-[60px] xl:gap-x-[40px] gap-y-[40px]">
                    {/* <!-- img --> */}
                    <div className="max-w-[50%] md:max-w-full grow relative">
                        <img src={about_data.img_about} alt="about image"/>
                        <img src="/assets/img/about-img-vector.svg" alt="vector" className="absolute -top-[25px] left-[25px] -z-[1] w-[90%] max-w-[100%]"/>
                    </div>

                    {/* <!-- txt --> */}
                    <div className="max-w-[50%] md:max-w-full shrink-0 grow">
                        <h6 className="ed-section-sub-title">about us</h6>
                        <h2 className="ed-section-title mb-[9px]">{about_data.title_about}</h2>
                        <p className="text-edgray">{about_data.desc_about}</p>
                        {/* <!-- infos --> */}
                        <div className="flex xs:flex-col gap-y-[15px] gap-x-[30px] xxl:gap-x-[20px] mt-[16px] xxs:mb-[30px] pb-[30px] border-b border-[#dbdbdb] mb-[26px]">
                            {/* <!-- single info --> */}
                            <div className="flex items-center lg:flex-col lg:items-start md:flex-row md:items-center gap-[20px] xl:gap-[15px]">
                                <div className="shrink-0 bg-edpurple h-[80px] xl:h-[70px] aspect-square rounded-[6px] flex items-center justify-center">
                                    <img src="/assets/img/icon/target.svg" alt="icon"/>
                                </div>

                                {/* <!-- txt --> */}
                                <div>
                                    <h6 className="font-semibold text-[18px] text-edblue mb-[5px]">MISI</h6>
                                    <p className="text-[16px] text-edgray">{about_data.misi}</p>
                                </div>
                            </div>

                            <div className="flex items-center lg:flex-col lg:items-start md:flex-row md:items-center gap-[20px] xl:gap-[15px]">
                                <div className="shrink-0 bg-edpurple h-[80px] xl:h-[70px] aspect-square rounded-[6px] flex items-center justify-center">
                                    <img src="/assets/img/icon/book-light.svg" alt="icon"/>
                                </div>

                                {/* <!-- txt --> */}
                                <div>
                                    <h6 className="font-semibold text-[18px] text-edblue mb-[5px]">VISI</h6>
                                    <p className="text-[16px] text-edgray">{about_data.visi}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-[24px] gap-y-[20px]">
                            <div className="flex gap-x-[8px]">
                                <div className="rounded-full overflow-hidden w-[58px] aspect-square shrink-0">
                                    <img src="/assets/img/user_img.png" alt="Principal" className="w-[58px] aspect-square"/>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-[18px] text-black mb-[4px]">SMAS UNGGULAN AR-RAHMAN</h5>
                                    <h6 className="text-edgray">Kabupaten<span className="text-edpurple"> SUKABUMI</span></h6>
                                </div>
                            </div>
                            <a href="#" className="ed-btn">Lihat Selengkapnya</a>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </section>
        
    )
}