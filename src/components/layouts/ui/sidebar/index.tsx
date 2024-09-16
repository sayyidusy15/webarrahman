export default function SideBar(){
    return(
        // <!-- sidebar -->
    <div className="ed-sidebar">
        <div className="translate-x-[100%] transition-transform ease-linear duration-300 fixed right-0 w-full max-w-[25%] xl:max-w-[30%] lg:max-w-[40%] md:max-w-[50%] sm:max-w-[60%] xxs:max-w-full bg-white h-full z-[100] overflow-auto">
            {/* <!-- heading --> */}
            <div className="ed-sidebar-heading p-[20px] lg:p-[20px] border-b border-edgray/20">
                <div className="logo flex justify-between items-center">
                    <a href="index.html"><img src="/assets/img/logo.png" alt="logo"/></a>

                    <button type="button" className="ed-sidebar-close-btn border border-edgray/20 w-[45px] aspect-square shrink-0 text-black text-[22px] rounded-full hover:text-edpurple"><i className="fa-solid fa-xmark"></i></button>
                </div>
            </div>

            {/* <!-- mobile menu --> */}
            <div className="ed-header-nav-in-mobile"></div>
        </div>
    </div>
    )
}