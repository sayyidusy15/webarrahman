import Script from "next/script";
import Cart from "../ui/cart";
import Search from "../ui/search";
import SideBar from "../ui/sidebar";
import TopNavbar from "../ui/topnavbar";
import BottomNavbar from "../ui/bottomnavbar";
import Banner from "../ui/banner";
import Features from "../ui/features";
import About from "../ui/about";
import Admission from "../ui/admission";
import FormNotice from "../ui/form_notice";
import CTA from "../ui/CTA";
import Services from "../ui/services";
import Testimonials from "../ui/testimonials";
import Teacher from "../ui/teacher";
import News from "../ui/news";
import Partners from "../ui/partners";
import Footers from "../ui/footers";
// import Gallery from "../ui/gallery";


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
                <Features/>
                <About/>
                <Admission/>
                <FormNotice/>
                <CTA/>
                <Services/>
                {/* <Gallery/> */}
                <Testimonials/>
                <Teacher/>
                <News/>
                <Partners/>
            </main>
            <Footers/>
            
            {/* script js */}
            <Script type="module" src="/assets/vendor/swiper/swiper-bundle.min.js"/>
            <Script type="module" src="/assets/vendor/fslightbox/fslightbox.js"/>

            <Script type="module" src="/assets/js/main.js"/>
        </div>
    )
}

export default AppShell