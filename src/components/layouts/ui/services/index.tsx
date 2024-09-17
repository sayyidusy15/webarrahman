export default function Services(){
    return (
        // <!-- SERVICES SECTION START -->
        <section className="py-[120px] xl:py-[80px] md:py-[60px] relative z-[1] overflow-hidden">
            <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
                <div className="flex md:flex-col gap-[45px] items-center">
                    <div>
                        <h6 className="ed-section-sub-title">my services</h6>
                        <h2 className="ed-section-title mb-[19px]">Learn to play, converse with confidence.</h2>
                        <p className="mb-[31px]">luctus. Curabitur nibh justo imperdiet non ex non tempus faucibus urna Aliquam at elit vitae dui sagittis maximus eget vitae.</p>

                        <div className="flex flex-wrap gap-x-[24px] gap-y-[15px]">
                            <a href="#" className="ed-btn">know more</a>
                            <div className="flex items-center gap-[16px]">
                                <span className="icon bg-edyellow w-[44px] aspect-square rounded-full outline-[1px] outline outline-edyellow outline-offset-[2px] flex items-center justify-center">
                                    <img src="/assets/img/icon/phone.svg" alt="call icon" className="w-[22px]"/>
                                </span>

                                <span className="txt font-semibold text-etBlack">
                                    <span className="block text-[16px] font-medium text-edgray mb-[2px] opacity-80">Call Us Now</span>
                                    <a href="tel:+208-555-0112" className="font-semibold text-[18px] hover:text-edyellow">+208-555-0112</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-[30px] max-w-[50%] md:max-w-full shrink-0 grow">
                        {/* <!-- single service --> */}
                        <div className="flex xxs:flex-col items-center xxs:items-start gap-x-[20px] gap-y-[15px] odd:ml-[86px] lg:odd:ml-[56px] xxs:odd:ml-[26px]">
                            {/* <!-- icon --> */}
                            <span className="shrink-0 w-[90px] aspect-square rounded-[8px] bg-[#F39F5F]/20 flex items-center justify-center">
                                <img src="/assets/img/service-1.svg" alt="icon"/>
                            </span>

                            <div>
                                <h6 className="font-semibold text-[18px] text-edblue mb-[5px]">Maths</h6>
                                <p className="text-edgray">Adipiscing elit Praesent luctus laoreet iaculis Curabitur rutrum lectus augue, ut pulvinar.</p>
                            </div>
                        </div>

                        {/* <!-- single service --> */}
                        <div className="flex xxs:flex-col items-center xxs:items-start gap-x-[20px] gap-y-[15px] odd:ml-[86px] lg:odd:ml-[56px] xxs:odd:ml-[26px]">
                            {/* <!-- icon --> */}
                            <span className="shrink-0 w-[90px] aspect-square rounded-[8px] bg-edpurple/15 flex items-center justify-center">
                                <img src="/assets/img/service-2.svg" alt="icon"/>
                            </span>

                            <div>
                                <h6 className="font-semibold text-[18px] text-edblue mb-[5px]">Bible Studies</h6>
                                <p className="text-edgray">Adipiscing elit Praesent luctus laoreet iaculis Curabitur rutrum lectus augue, ut pulvinar.</p>
                            </div>
                        </div>

                        {/* <!-- single service --> */}
                        <div className="flex xxs:flex-col items-center xxs:items-start gap-x-[20px] gap-y-[15px] odd:ml-[86px] lg:odd:ml-[56px] xxs:odd:ml-[26px]">
                            {/* <!-- icon --> */}
                            <span className="shrink-0 w-[90px] aspect-square rounded-[8px] bg-[#70A6B1]/20 flex items-center justify-center">
                                <img src="/assets/img/service-3.svg" alt="icon"/>
                            </span>

                            <div>
                                <h6 className="font-semibold text-[18px] text-edblue mb-[5px]">Flex-care</h6>
                                <p className="text-edgray">Adipiscing elit Praesent luctus laoreet iaculis Curabitur rutrum lectus augue, ut pulvinar.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- vectors --> */}
            <div className="xxl:hidden">
                <img src="/assets/img/service-vector-1.svg" alt="vector" className="absolute -z-[1] bottom-[140px] left-[45px]"/>
                <img src="/assets/img/form-notice-vector-1.svg" alt="vector" className="absolute -z-[1] top-[140px] right-[40px]"/>
            </div>
        </section>
    )
}