export default function Search() {
return (
    // <!-- search -->
    <div className="ed-search group">
        <form action="#" className="bg-white fixed z-[100] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[100px] md:h-[70px] xxs:h-[50px] w-[1224px] max-w-[95%] flex gap-[10px] rounded-full overflow-hidden px-[40px] xxs:px-[20px] pointer-events-none opacity-0 group-[.active]:pointer-events-auto group-[.active]:opacity-100 duration-[400ms]">
            <input type="search" name="ed-search" placeholder="Search Here..." className="bg-transparent w-full focus:outline-none"/>
            <button className="text-[25px] md:text-[22px] xxs:text-[20px]"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>
);
}
