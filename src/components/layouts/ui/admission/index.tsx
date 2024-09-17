export default function Admission(){
    return (
        // <!-- ADMISSION PROCESS SECTION START -->
        <section className="py-[120px] xl:py-[80px] md:py-[60px] bg-[#FAF9F6] relative z-[1]">
            <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
                <div className="flex flex-col gap-x-[85px] items-start relative">
                    {/* <!-- heading --> */}
                    <div className="relative w-full before:absolute before:bottom-0 before:mb-[8%] before:left-0 before:bg-[url('/assets/img/admission-title-vector.svg')] before:bg-no-repeat before:bg-[length:100%_100%] before:w-[100%] before:h-[88px] before:pointer-events-none lg:before:hidden">
                        <div className="shrink-0 max-w-[290px]">
                            <h6 className="ed-section-sub-title">Admission</h6>
                            <h2 className="ed-section-title !text-[30px] pb-[42px] lg:pb-0 mb-[40px] lg:mb-[20px]">Admission Process</h2>
                            <a href="#" className="ed-btn">Admission Now</a>
                        </div>
                    </div>

                    {/* <!-- cards --> */}
                    <div className="grid grid-cols-3 sm:grid-cols-2 xxs:grid-cols-1 gap-[24px] -mt-[140px] lg:mt-[25px] w-[66%] ml-auto lg:w-[100%]">
                        {/* <!-- single process --> */}
                        <div className="bg-white rounded-[10px] p-[24px] shadow-[0_4px_50px_rgba(0,0,0,0.09)]">
                            <span className="icon block mb-[13px]">
                                <img src="assets/img/admission-process-icon.svg" alt="admission process" className="mb-[11px]"/>
                            </span>
                            <h4 className="font-semibold text-[18px] mb-[5px] text-edblue"><a href="#" className="hover:text-edpurple">Request Info</a></h4>
                            <p className="text-edgray2 group-hover:text-black mb-[18px]">Penatibus Et Magnis Dis Parturient.</p>
                            <a href="#" className="ed-btn !h-[40px] !bg-white border !border-edpurple !text-edpurple !text-[14px] !font-semibold hover:!bg-edpurple hover:!text-white">Read More</a>
                        </div>

                        {/* <!-- single process --> */}
                        <div className="bg-white rounded-[10px] p-[24px] shadow-[0_4px_50px_rgba(0,0,0,0.09)]">
                            <span className="icon block mb-[13px]">
                                <img src="assets/img/admission-process-icon.svg" alt="admission process" className="mb-[11px]"/>
                            </span>
                            <h4 className="font-semibold text-[18px] mb-[5px] text-edblue"><a href="#" className="hover:text-edpurple">Apply Online</a></h4>
                            <p className="text-edgray2 group-hover:text-black mb-[18px]">Penatibus Et Magnis Dis Parturient.</p>
                            <a href="#" className="ed-btn !h-[40px] !bg-white border !border-edpurple !text-edpurple !text-[14px] !font-semibold hover:!bg-edpurple hover:!text-white">Read More</a>
                        </div>

                        {/* <!-- single process --> */}
                        <div className="bg-white rounded-[10px] p-[24px] shadow-[0_4px_50px_rgba(0,0,0,0.09)]">
                            <span className="icon block mb-[13px]">
                                <img src="assets/img/admission-process-icon.svg" alt="admission process" className="mb-[11px]"/>
                            </span>
                            <h4 className="font-semibold text-[18px] mb-[5px] text-edblue"><a href="#" className="hover:text-edpurple">Submit Form</a></h4>
                            <p className="text-edgray2 group-hover:text-black mb-[18px]">Penatibus Et Magnis Dis Parturient.</p>
                            <a href="#" className="ed-btn !h-[40px] !bg-white border !border-edpurple !text-edpurple !text-[14px] !font-semibold hover:!bg-edpurple hover:!text-white">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- vectors --> */}
            <div>
                <img src="assets/img/admission-vector-1.svg" alt="vector" className="absolute -z-[1] top-[156px] left-0"/>
                <img src="assets/img/admission-vector-2.svg" alt="vector" className="absolute -z-[1] bottom-[130px] right-[80px]"/>
            </div>
        </section>
    )
}