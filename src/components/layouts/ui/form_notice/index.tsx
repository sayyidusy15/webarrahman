/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import supabase from '@/utils/supabaseClient';


export default function FormNotice(){
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
        const { data, error } = await supabase
        .from("acara")
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
    
    return (
        // <!-- FORM & NOTICE SECTION START -->
        <section className="py-[100px] xl:py-[70px] md:py-[50px] relative z-[1] overflow-hidden">
            <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
                <div className="flex lg:flex-col rounded-[20px] overflow-hidden bg-[#f5f4fe]">
                    {/* <!-- EVENT PPDB AR RAHMAN--> */}
                    <div className="grow max-w-[49%] lg:max-w-full">
                        {/* <!-- heading --> */}
                        <div className="bg-edpurple p-[22px] pl-[170px] xxl:pl-[130px] xs:pl-[40px] xxs:pl-[22px]">
                            <h6 className="ed-section-sub-title ed-section-sub-title--white">Event</h6>
                            <h3 className="font-semibold text-[30px] xxs:text-[25px] text-white">PPDB AR-RAHMAN</h3>
                        </div>

                        {/* <!-- main content --> */}
                        <div className="p-[40px] pr-0 lg:pr-[40px] text-center">
                            <img src="/assets/img/form-img.png" alt="form image" className="mx-auto drop-shadow-[0_4px_30px_rgba(0,0,0,0.1)] mb-[17px]"/>
                            <h5 className="text-[20px] text-edblue mb-[28px]">DOWNLOAD BROWSUR PPDB AR-RAHMAN</h5>
                            <div className="space-x-4">
                                <a href="/assets/pdf/notice.pdf" download className="ed-btn">PPDB SMA</a>
                                <a href="/assets/pdf/notice.pdf" download className="ed-btn">PPDB SMP</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- JADWAL ACARA AR RAHMAN --> */}
                    <div className="grow max-w-[51%] lg:max-w-full">
                        {/* <!-- heading --> */}
                        <div className="bg-edpurple p-[22px] pl-[170px] xxl:pl-[130px] xs:pl-[40px] xxs:pl-[22px]">
                            <h6 className="ed-section-sub-title ed-section-sub-title--white">JADWAL</h6>
                            <h3 className="font-semibold text-[30px] xxs:text-[25px] text-white">ACARA AR-RAHMAN</h3>
                        </div>
                        {/* <!-- main content --> */}
                        <div  className="p-[40px] xl:px-[25px] lg:pl-[70px] sm:pl-[50px] xxs:p-[15px] space-y-[22px]">
                        {/* {section content } */}
                        {data.map((acara_data,index)=>(
                            <div key={index} className="flex gap-x-[20px] items-center relative before:absolute before:h-[1px] before:w-[40px] xl:before:w-[30px] before:bg-edpurple before:right-[100%] before:top-[50%] before:-translate-y-[50%] xxs:before:content-none after:absolute after:w-[1px] after:h-[114%] after:bg-edpurple after:bottom-[50%] after:right-[calc(100%+40px)] xl:after:right-[calc(100%+30px)] xxs:after:content-none first:after:content-none">
                                <div className="xxs:hidden icon shrink-0 p-[14px] bg-white border border-[#d9d9d9] rounded-[10px] w-[110px] xl:w-[90px] aspect-square flex items-center justify-center">
                                    <img src="/assets/img/notice-icon.png" alt="icon"/>
                                </div>

                                <div className="pb-[26px] md:pb-[16px] border-b border-[#D9D9D9]">
                                    <h5 className="font-semibold text-[20px] text-edblue mb-[6px]"><a href="#" className="hover:text-edpurple">{acara_data.title_acara}</a></h5>
                                    <h6 className="font-medium text-edpurple mb-[10px]">{acara_data.date_acara}</h6>
                                    <p className="text-edgray">{acara_data.desc_acara}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- vectors --> */}
            <div>
                <img src="/assets/img/form-notice-vector-1.svg" alt="vector" className="absolute -z-[1] bottom-[296px] left-0"/>
                <img src="/assets/img/form-notice-vector-2.svg" alt="vector" className="absolute -z-[1] bottom-[192px] right-[90px]"/>
            </div>
        </section>
    )
}