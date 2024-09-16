export default function Features(){
    return(
        // <!-- FEATURES SECTION START -->
        <section className="-mt-[70px] relative z-[2]">
            <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
                <div className="grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-[30px]">
                    {/* <!-- single feature --> */}
                    <div className="bg-[#FAF9F6] hover:bg-edyellow border-t-[7px] border-edyellow hover:border-edpurple duration-[400ms] p-[30px] sm:p-[25px] group relative z-[1] before:absolute before:-z-[1] before:inset-0 before:bg-[url('/assets/img/faeture-bg.jpg')] before:mix-blend-hard-light before:opacity-0 before:duration-[400ms] hover:before:opacity-15">
                        <span className="icon">
                            <img src="/assets/img/feature-1.svg" alt="feature" className="mb-[11px]"/>
                        </span>
                        <h4 className="font-semibold text-[24px] xl:text-[22px] mb-[3px] text-edblue"><a href="#" className="hover:text-edpurple">School Life</a></h4>
                        <p className="text-edgray2 group-hover:text-black mb-[18px]">Eimply dummy text printing ypese tting industry. Ipsum has been the</p>
                        <a href="#" className="text-edblue hover:text-edpurple"><span className="text-[14px]"><i className="fa-solid fa-angle-right"></i></span> View More</a>
                    </div>

                    {/* <!-- single feature --> */}
                    <div className="bg-[#FAF9F6] hover:bg-edyellow border-t-[7px] border-edyellow hover:border-edpurple duration-[400ms] p-[30px] sm:p-[25px] group relative z-[1] before:absolute before:-z-[1] before:inset-0 before:bg-[url('/assets/img/faeture-bg.jpg')] before:mix-blend-hard-light before:opacity-0 before:duration-[400ms] hover:before:opacity-15">
                        <span className="icon">
                            <img src="/assets/img/feature-2.svg" alt="feature" className="mb-[11px]"/>
                        </span>
                        <h4 className="font-semibold text-[24px] xl:text-[22px] mb-[3px] text-edblue"><a href="#" className="hover:text-edpurple">Academics </a></h4>
                        <p className="text-black group-hover:text-black mb-[18px]">Eimply dummy text printing ypese tting industry. Ipsum has been the</p>
                        <a href="#" className="text-edblue hover:text-edpurple"><span className="text-[14px]"><i className="fa-solid fa-angle-right"></i></span> View More</a>
                    </div>

                    {/* <!-- single feature --> */}
                    <div className="bg-[#FAF9F6] hover:bg-edyellow border-t-[7px] border-edyellow hover:border-edpurple duration-[400ms] p-[30px] sm:p-[25px] group relative z-[1] before:absolute before:-z-[1] before:inset-0 before:bg-[url('/assets/img/faeture-bg.jpg')] before:mix-blend-hard-light before:opacity-0 before:duration-[400ms] hover:before:opacity-15">
                        <span className="icon">
                            <img src="/assets/img/feature-3.svg" alt="feature" className="mb-[11px]"/>
                        </span>
                        <h4 className="font-semibold text-[24px] xl:text-[22px] mb-[3px] text-edblue"><a href="#" className="hover:text-edpurple">Community</a></h4>
                        <p className="text-edgray2 group-hover:text-black mb-[18px]">Eimply dummy text printing ypese tting industry. Ipsum has been the</p>
                        <a href="#" className="text-edblue hover:text-edpurple"><span className="text-[14px]"><i className="fa-solid fa-angle-right"></i></span> View More</a>
                    </div>
                </div>
            </div>
        </section>
        
    )
}