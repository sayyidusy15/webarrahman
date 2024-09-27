/* eslint-disable @typescript-eslint/no-explicit-any */
import supabase from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

export default function News(){
    const [beritaBesarData, setBeritaBesarData] = useState<any[]>([]);
    const [beritaKecilData, setBeritaKecilData] = useState<any[]>([]);
    useEffect(() => {
        const getData = async () => {
            try{
                const[blog_big_news_response, blog_kecil_news_response] = await Promise.all([
                    supabase.from("blog_big_news_landingPage").select().order('id',{ascending:true}),
                    supabase.from("blog_landingPage").select().order('id',{ascending:true}),
                ]);
                if(blog_big_news_response.error){
                    console.error('Error fetching blog besar data:', blog_big_news_response.error);
                }else{
                    setBeritaBesarData(blog_big_news_response.data)
                }
                if(blog_kecil_news_response.error){
                    console.error('Error fetching blog kecil data:', blog_kecil_news_response.error);
                }else{
                    setBeritaKecilData(blog_kecil_news_response.data)
                }
            } catch(error){
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);
    return (
        // <!-- NEWS SECTION START -->
        <section className="pt-[120px] xl:pt-[80px] md:pt-[60px]">
            <div className="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                {/* <!-- heading --> */}
                <div className="flex flex-wrap items-end justify-between mb-[60px] lg:mb-[40px] gap-[15px]">
                    {/* <!-- left --> */}
                    <div className="max-w-[35%] md:max-w-[40%] sm:max-w-none">
                        <h6 className="ed-section-sub-title">Berita Terbaru</h6>
                        <h2 className="ed-section-title">Prestasi dan Berita Terbaru</h2>
                    </div>

                    {/* <!-- right --> */}
                    <a href="news-grid.html" className="ed-btn !h-[56px] gap-[10px] border border-[#E5E5E5] !bg-transparent !text-edpurple hover:!bg-edpurple hover:!border-edpurple hover:!text-white">Lihat semua berita<span><i className="fa-solid fa-arrow-right-long"></i></span></a>
                </div>

                {/* <!-- kartu berita section --> */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-[30px]">
                    {/* <!-- sisi kiri / berita besar --> */}
                    {beritaBesarData.map((blog_berita_besar_news_data,index)=>(
                    <div key={index} className="rounded-[20px] bg-edoffwhite overflow-hidden">
                        {/* <!-- img --> */}
                        <div className="relative">
                            <img src={blog_berita_besar_news_data.img_blog} alt="blog cover" className="w-full aspect-[570/290]"/>
                            {/* <!-- date --> */}
                            <div className="absolute top-[30px] left-[30px] bg-[#ECF0F5] rounded-[10px] font-medium text-[14px] text-black inline-block uppercase overflow-hidden text-center">
                                <span className="bg-edpurple text-white block py-[3px] rounded-[10px]">{blog_berita_besar_news_data.tanggal_blog}</span>
                                <span className="px-[11px] py-[2px] block">{blog_berita_besar_news_data.bulan_blog}</span>
                            </div>
                        </div>

                        {/* <!-- txt --> */}
                        <div className="px-[30px] xxs:px-[20px] py-[22px] pt-[27px]">
                            {/* <!-- infos --> */}
                            <div className="flex items-center gap-[16px] mb-[9px]">
                                {/* <!-- single info --> */}
                                <div className="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                    <span><img src="/assets/img/icon/user-filled-purple.svg" alt="icon"/></span>
                                    <span>{blog_berita_besar_news_data.author_blog}</span>
                                </div>

                                {/* <!-- single info comment --> */}
                                <div className="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                    <span><img src="/assets/img/icon/comment.svg" alt="icon"/></span>
                                    <span>2 Comments</span>
                                </div>
                            </div>
                            <h5 className="font-medium text-[20px]"><a href="news-details.html" className="hover:text-edpurple">{blog_berita_besar_news_data.title_blog}</a></h5>
                        </div>
                    </div>
                    ))}
                    
                    {/* <!-- sisi kanan / berita kecil --> */}
                    <div className="bg-edoffwhite rounded-[20px] p-[30px] xxs:p-[20px] space-y-[26px]">
                        {/* <!-- berita card --> */}
                        {beritaKecilData.map((blog_berita_kecil_news_data,index)=>(
                        <div key={index}  className="flex xxs:flex-col gap-x-[25px] gap-y-[15px] items-center xxs:items-start border-b last:border-0 pb-[26px] last:pb-0">
                            {/* <!-- img --> */}
                            <div className="shrink-0 rounded-[10px] overflow-hidden">
                                <img src={blog_berita_kecil_news_data.img_blog} alt="blog cover" className="w-[142px] aspect-[142/153] object-cover"/>
                            </div>

                            {/* <!-- txt --> */}
                            <div>
                                {/* <!-- infos --> */}
                                <div className="flex items-center gap-[16px] mb-[9px]">
                                    {/* <!-- single info --> */}
                                    <div className="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                        <span><img src="/assets/img/icon/user-filled-purple.svg" alt="icon"/></span>
                                        <span>{blog_berita_kecil_news_data.author_blog}</span>
                                    </div>

                                    {/* <!-- single info comment --> */}
                                    {/* <div className="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                        <span><img src="/assets/img/icon/comment.svg" alt="icon"/></span>
                                        <span>2 Comments</span>
                                    </div> */}
                                </div>
                                <h5 className="font-medium text-[20px] mb-[17px]"><a href="news-details.html" className="hover:text-edpurple">Collaboratively pontificate bleedi edge resources</a></h5>

                                {/* <!-- date --> */}
                                <div className="bg-[#ECF0F5] rounded-[10px] font-medium text-[14px] text-black inline-block uppercase overflow-hidden text-center">
                                    <span className="bg-edpurple text-white block py-[3px] rounded-[10px]">{blog_berita_kecil_news_data.tanggal_blog}</span>
                                    <span className="px-[11px] py-[2px] block">{blog_berita_kecil_news_data.bulan_blog}</span>
                                </div>
                            </div>
                        </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}