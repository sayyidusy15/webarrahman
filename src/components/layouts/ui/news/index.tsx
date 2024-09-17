export default function News(){
    return (
        // <!-- NEWS SECTION START -->
        <section className="pt-[120px] xl:pt-[80px] md:pt-[60px]">
            <div className="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                {/* <!-- heading --> */}
                <div className="flex flex-wrap items-end justify-between mb-[60px] lg:mb-[40px] gap-[15px]">
                    {/* <!-- left --> */}
                    <div className="max-w-[35%] md:max-w-[40%] sm:max-w-none">
                        <h6 className="ed-section-sub-title">latest news</h6>
                        <h2 className="ed-section-title">our latest news & blog </h2>
                    </div>

                    {/* <!-- right --> */}
                    <a href="news-grid.html" className="ed-btn !h-[56px] gap-[10px] border border-[#E5E5E5] !bg-transparent !text-edpurple hover:!bg-edpurple hover:!border-edpurple hover:!text-white">View all blog <span><i className="fa-solid fa-arrow-right-long"></i></span></a>
                </div>

                {/* <!-- news cards --> */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-[30px]">
                    {/* <!-- news big card --> */}
                    <div className="rounded-[20px] bg-edoffwhite overflow-hidden">
                        {/* <!-- img --> */}
                        <div className="relative">
                            <img src="/assets/img/blog-big.jpg" alt="blog cover" className="w-full aspect-[570/290]"/>
                            {/* <!-- date --> */}
                            <div className="absolute top-[30px] left-[30px] bg-[#ECF0F5] rounded-[10px] font-medium text-[14px] text-black inline-block uppercase overflow-hidden text-center">
                                <span className="bg-edpurple text-white block py-[3px] rounded-[10px]">10</span>
                                <span className="px-[11px] py-[2px] block">June</span>
                            </div>
                        </div>

                        {/* <!-- txt --> */}
                        <div className="px-[30px] xxs:px-[20px] py-[22px] pt-[27px]">
                            {/* <!-- infos --> */}
                            <div className="flex items-center gap-[16px] mb-[9px]">
                                {/* <!-- single info --> */}
                                <div className="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                    <span><img src="/assets/img/icon/user-filled-purple.svg" alt="icon"/></span>
                                    <span>By Admin</span>
                                </div>

                                {/* <!-- single info --> */}
                                <div className="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                    <span><img src="/assets/img/icon/comment.svg" alt="icon"/></span>
                                    <span>2 Comments</span>
                                </div>
                            </div>
                            <h5 className="font-medium text-[20px]"><a href="news-details.html" className="hover:text-edpurple">Collaboratively pontificate bleeding edge resources with inexpensive methodologies</a></h5>
                        </div>
                    </div>

                    {/* <!-- right / news small cards --> */}
                    <div className="bg-edoffwhite rounded-[20px] p-[30px] xxs:p-[20px] space-y-[26px]">
                        {/* <!-- single news --> */}
                        <div className="flex xxs:flex-col gap-x-[25px] gap-y-[15px] items-center xxs:items-start border-b last:border-0 pb-[26px] last:pb-0">
                            {/* <!-- img --> */}
                            <div className="shrink-0 rounded-[10px] overflow-hidden">
                                <img src="/assets/img/news-2-img-2.jpg" alt="blog cover" className="w-[142px] aspect-[142/153] object-cover"/>
                            </div>

                            {/* <!-- txt --> */}
                            <div>
                                {/* <!-- infos --> */}
                                <div className="flex items-center gap-[16px] mb-[9px]">
                                    {/* <!-- single info --> */}
                                    <div className="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                        <span><img src="/assets/img/icon/user-filled-purple.svg" alt="icon"/></span>
                                        <span>By Admin</span>
                                    </div>

                                    {/* <!-- single info --> */}
                                    <div className="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                        <span><img src="/assets/img/icon/comment.svg" alt="icon"/></span>
                                        <span>2 Comments</span>
                                    </div>
                                </div>
                                <h5 className="font-medium text-[20px] mb-[17px]"><a href="news-details.html" className="hover:text-edpurple">Collaboratively pontificate bleedi edge resources</a></h5>

                                {/* <!-- date --> */}
                                <div className="bg-[#ECF0F5] rounded-[10px] font-medium text-[14px] text-black inline-block uppercase overflow-hidden text-center">
                                    <span className="bg-edpurple text-white block py-[3px] rounded-[10px]">10</span>
                                    <span className="px-[11px] py-[2px] block">June</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- single news --> */}
                        <div className="flex xxs:flex-col gap-x-[25px] gap-y-[15px] items-center xxs:items-start border-b last:border-0 pb-[26px] last:pb-0">
                            {/* <!-- img --> */}
                            <div className="shrink-0 rounded-[10px] overflow-hidden">
                                <img src="/assets/img/news-2-img-3.jpg" alt="blog cover" className="w-[142px] aspect-[142/153] object-cover"/>
                            </div>

                            {/* <!-- txt --> */}
                            <div>
                                {/* <!-- infos --> */}
                                <div className="flex items-center gap-[16px] mb-[9px]">
                                    {/* <!-- single info --> */}
                                    <div className="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                        <span><img src="/assets/img/icon/user-filled-purple.svg" alt="icon"/></span>
                                        <span>By Admin</span>
                                    </div>

                                    {/* <!-- single info --> */}
                                    <div className="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                        <span><img src="/assets/img/icon/comment.svg" alt="icon"/></span>
                                        <span>2 Comments</span>
                                    </div>
                                </div>
                                <h5 className="font-medium text-[20px] mb-[17px]"><a href="news-details.html" className="hover:text-edpurple">Collaboratively pontificate bleedi edge resources</a></h5>

                                {/* <!-- date --> */}
                                <div className="bg-[#ECF0F5] rounded-[10px] font-medium text-[14px] text-black inline-block uppercase overflow-hidden text-center">
                                    <span className="bg-edpurple text-white block py-[3px] rounded-[10px]">10</span>
                                    <span className="px-[11px] py-[2px] block">June</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}