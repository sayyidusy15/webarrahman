export default function TopNavbar (){
    return(
        // <!-- top header -->
        <div className="bg-edblue flex items-center justify-between lg:justify-center lg:gap-x-[20px]">
            {/* <!-- contacts --> */}
            <div className="flex items-center gap-x-[32px] xl:gap-x-[15px] gap-y-[6px] py-[18px] pl-[30px] xl:pl-[10px] lg:pl-0 lg:order-2 sm:pt-0 sm:pb-[10px] xl:hidden">
                {/* <!-- single contact --> */}
                <a href="mailto:info@example.com" className="flex items-center gap-x-[10px] font-light text-white/80">
                    <span className="icon shrink-0 xl:hidden">
                        <img src="/assets/img/icon/mail.svg" alt="icon"/>
                    </span>
                    <span>info@example.com</span>
                </a>
                {/* <!-- single contact --> */}
                <a href="tel:+20866660112" className="flex items-center gap-x-[10px] font-light text-white/80">
                    <span className="icon shrink-0 xl:hidden">
                        <img src="/assets/img/icon/phone.svg" alt="icon"/>
                    </span>
                    <span>+208-6666-0112</span>
                </a>
            </div>

            {/* <!-- notice --> */}
            <p className="font-medium text-white text-[16px] xxs:text-[14px] xl:pl-[15px] lg:order-1 lg:w-full lg:my-[10px] text-center lg:text-left sm:text-center">Edutics Flash Discount: Starting at <span className="text-edyellow">$3.49/mo</span> for a Limited time</p>

            {/* <!-- actions --> */}
            <div className="shrink-0 flex items-center gap-x-[30px] xl:gap-x-[15px] text-white lg:order-3 sm:hidden">
                <div className="flex gap-x-[30px] xl:gap-x-[15px]">
                    <a href="#" className="flex items-center gap-x-[10px] font-light text-white/80"><span className="icon shrink-0"><img src="/assets/img/icon/chat.svg" alt="icon"/></span> Live Chat</a>
                    <a href="#" className="flex items-center gap-x-[10px] font-light text-white/80"><span className="icon shrink-0"><img src="/assets/img/icon/avatar.svg" alt="icon"/></span> Login</a>
                </div>
                <a href="#" className="ed-btn !h-[60px] !rounded-none sm:!px-[15px]">Guardian Access</a>
            </div>
        </div>
    )
}