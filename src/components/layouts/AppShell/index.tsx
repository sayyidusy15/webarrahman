import Script from "next/script";
import Cart from "../ui/cart";
import Search from "../ui/search";
import SideBar from "../ui/sidebar";
import TopNavbar from "../ui/topnavbar";
import BottomNavbar from "../ui/bottomnavbar";
import Banner from "../ui/banner";

type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props : AppShellProps) =>  {
    const { children } = props;
    return (
        <div>
            {children}
            <div className="ed-overlay group">
                <div className="fixed inset-0 z-[100] group-[.active]:bg-edblue/80 duration-[400ms] pointer-events-none group-[.active]:pointer-events-auto"></div>
            </div>
            <Cart/>
            <Search/>
            <SideBar/>

            <header className="absolute z-[99] top-0 inset-x-[100px] xxl:inset-x-[30px] xl:inset-x-0 bg-white rounded-bl-[10px] rounded-br-[10px]">
                <TopNavbar/>
                <BottomNavbar/>
            </header>

            <main>
                <Banner/>
            </main>


            
            
            {/* script js */}
            <Script type="module" src="/assets/vendor/swiper/swiper-bundle.min.js"/>
            <Script type="module" src="/assets/vendor/fslightbox/fslightbox.js"/>
            <Script type="module" src="/assets/js/main.js"/>
        </div>
    )
}

export default AppShell