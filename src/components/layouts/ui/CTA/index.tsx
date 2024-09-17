export default function CTA(){
    return(
        // <!-- CTA SECTION START -->
        <section className="bg-edpurple relative z-[1] overflow-hidden">
            <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
                <div className="flex md:flex-col items-center gap-[60px] lg:gap-[40px] md:gap-y-[20px]">
                    <div className="grow md:pt-[60px]">
                        <h6 className="ed-section-sub-title ed-section-sub-title--white">ARE YOU READY FOR THIS OFFER</h6>
                        <h2 className="ed-section-title !text-white mb-[36px]">50% Offer For Very First 60 <span className="font-normal text-[40px] xxl:text-[35px] xl:text-[30px] xs:text-[28px] xxs:text-[25px]">Student’s & Mentors</span></h2>
                        <div className="flex flex-wrap gap-[16px]">
                            <a href="#" className="ed-btn !bg-edyellow !text-black hover:!bg-edblue hover:!text-white">Become a student</a>
                            <a href="#" className="ed-btn !bg-transparent !text-white border border-white hover:!bg-white hover:!text-edblue">Become a teacher</a>
                        </div>
                    </div>

                    {/* <!-- image --> */}
                    <div className="shrink-0 relative z-[1] pr-[40px] lg:pr-0">
                        <img src="/assets/img/cta-img.png" alt="image"/>
                        <img src="/assets/img/cta-img-vector.svg" alt="vector" className="absolute right-[0] lg:right-[-40px] top-[20px] -z-[1] max-w-[460px]"/>
                    </div>
                </div>
            </div>

            {/* <!-- vector --> */}
            <div>
                <img src="/assets/img/cta-vector-1.png" alt="vector" className="absolute -z-[1] bottom-0 left-0 pointer-events-none"/>
                <img src="/assets/img/cta-vector-2.png" alt="vector" className="absolute -z-[1] top-0 right-0 pointer-events-none"/>
            </div>
        </section>
    )
}