export default function Footers(){
    return(
        // <!-- FOOTER SECTION START -->
    <footer className="bg-edblue relative z-[1] before:absolute before:inset-0 before:-z-[1] before:bg-[url('/assets/img/footer-bg.png')] before:opacity-[15%] before:bg-no-repeat before:bg-cover before:bg-center text-white">
        <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
            {/* <!-- footer top --> */}
            <div className="flex flex-wrap justify-between gap-[35px] pt-[100px] pb-[58px] border-b border-white/20">
                {/* <!-- footer about --> */}
                <div className="max-w-[370px] xxs:max-w-full">
                    <a href="index.html" className="inline-block mb-[23px]"><img src="assets/img/logo-light.png" alt="logo"/></a>
                    <p className="text-[#D9D9D9] mb-[19px]">Nullam interdum libero vitae pretium aliquam donec nibh purus laoreet in ullamcorper vel malesuada sit amet enim.</p>

                    <ul className="space-y-[17px]">
                        <li className="flex items-center gap-[8px]">
                            <span className="icon"><img src="assets/img/call-icon-yellow.svg" alt="icon"/></span>
                            <a href="tel:+6108-666-0112" className="hover:text-edyellow">+6108-666-0112</a>
                        </li>

                        <li className="flex items-center gap-[8px]">
                            <span className="icon"><img src="assets/img/message-yellow.svg" alt="icon"/></span>
                            <a href="mailto:info@gmail.com" className="hover:text-edyellow">info@gmail.com</a>
                        </li>
                    </ul>
                </div>

                {/* <!-- footer widget --> */}
                <div>
                    <h6 className="font-semibold text-[18px] pb-[15px] mb-[30px] relative before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-[20px] before:bg-edyellow after:absolute after:bottom-0 after:left-[30px] after:h-[1.5px] after:w-[63px] after:bg-white">Quick Links</h6>

                    <div className="space-y-[18px]">
                        <a href="#" className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"><span className="icon"><img src="assets/img/double-arrow.svg" alt="icon"/></span> Edutics About</a>
                        <a href="#" className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"><span className="icon"><img src="assets/img/double-arrow.svg" alt="icon"/></span> Contact Us</a>
                        <a href="#" className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"><span className="icon"><img src="assets/img/double-arrow.svg" alt="icon"/></span> Blog & News</a>
                        <a href="#" className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"><span className="icon"><img src="assets/img/double-arrow.svg" alt="icon"/></span> FAQ’S</a>
                        <a href="#" className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"><span className="icon"><img src="assets/img/double-arrow.svg" alt="icon"/></span> Login / Register</a>
                    </div>
                </div>

                {/* <!-- footer widget --> */}
                <div>
                    <h6 className="font-semibold text-[18px] pb-[15px] mb-[30px] relative before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-[20px] before:bg-edyellow after:absolute after:bottom-0 after:left-[30px] after:h-[1.5px] after:w-[63px] after:bg-white">Main Navigation</h6>

                    <div className="space-y-[18px]">
                        <a href="#" className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"><span className="icon"><img src="assets/img/double-arrow.svg" alt="icon"/></span> Admission</a>
                        <a href="#" className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"><span className="icon"><img src="assets/img/double-arrow.svg" alt="icon"/></span> Research</a>
                        <a href="#" className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"><span className="icon"><img src="assets/img/double-arrow.svg" alt="icon"/></span> Academics</a>
                        <a href="#" className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"><span className="icon"><img src="assets/img/double-arrow.svg" alt="icon"/></span> Student Life</a>
                        <a href="#" className="flex items-center gap-[10px] opacity-80 hover:text-edyellow"><span className="icon"><img src="assets/img/double-arrow.svg" alt="icon"/></span> Conferences</a>
                    </div>
                </div>

                {/* <!-- footer widget --> */}
                <div className="max-w-[300px]">
                    <h6 className="font-semibold text-[18px] pb-[15px] mb-[30px] relative before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-[20px] before:bg-edyellow after:absolute after:bottom-0 after:left-[30px] after:h-[1.5px] after:w-[63px] after:bg-white">Newsletter</h6>

                    <div>
                        <p className="text-[#d9d9d9]/80 mb-[21px]">Sign up to seargin weekly newsletter to get the latest updates.</p>

                        {/* <!-- newsltr form --> */}
                        <form className="border border-white/20 rounded-full flex h-[56px] p-[4px]">
                            <input type="email" name="email" placeholder="Enter Email Address" className="text-[14px] bg-transparent w-full rounded-full focus:outline-none px-[20px]"/>
                            <button className="bg-edyellow rounded-full aspect-square flex items-center justify-center hover:bg-edpurple"><img src="assets/img/icon/submit-icon.svg" alt="icon"/></button>
                        </form>

                        {/* <!-- social links --> */}
                        <div className="flex gap-[20px] mt-[30px]">
                            <span className="pl-[30px] font-medium text-[#d9d9d9] relative before:absolute before:left-0 before:top-[50%] before:-translate-y-[50%] before:h-[1px] before:w-[20px] before:bg-[#d9d9d9]">Follow on</span>
                            <span className="inline-flex gap-[16px] text-[#d9d9d9]">
                                <a href="#" className="hover:text-edyellow"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="hover:text-edyellow"><i className="fa-brands fa-x-twitter"></i></a>
                                <a href="#" className="hover:text-edyellow"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="#" className="hover:text-edyellow"><i className="fa-brands fa-youtube"></i></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- footer bottom --> */}
            <div className="flex flex-wrap items-center justify-between gap-[15px] pt-[20px] pb-[50px] text-[#d9d9d9]">
                <p>&copy; All Copyright 2024 by Edutics</p>

                <div className="flex flex-wrap gap-[40px] xxs:gap-[15px]">
                    <a href="#" className="hover:text-edyellow">Terms & Conditions</a>
                    <a href="#" className="hover:text-edyellow">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
    )
}