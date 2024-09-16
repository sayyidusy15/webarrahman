export default function BottomNavbar(){
    return(
        // <!-- bottom header -->
        <div className="px-[30px] xxl:px-[15px] lg:px-[20px] py-[28px] lg:py-[18px] flex justify-between to-be-fixed">
            <div className="logo xxs:max-w-[40%]"><a href="index.html"><img src="/assets/img/logo.png" alt="logo" className="logo"/></a></div>

            <div className="flex lg:items-center lg:gap-[60px] xxs:gap-[30px]">
                <div className="flex items-center gap-[100px] xl:gap-[30px] lg:gap-y-0">
                    {/* <!-- nav --> */}
                    <div className="ed-header-nav-container">
                        <ul className="to-go-to-sidebar-in-mobile ed-header-nav flex lg:flex-col gap-x-[43px] xl:gap-x-[33px] font-kanit text-[17px] font-normal">
                            <li className="has-sub-menu relative">
                                <a role="button">Home</a>

                                <ul className="ed-header-submenu">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="index-2.html">Home 02</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html">About us</a></li>
                            <li className="has-sub-menu relative">
                                <a role="button">Courses</a>

                                <ul className="ed-header-submenu">
                                    <li><a href="course-grid.html">Courses Grid</a></li>
                                    <li><a href="course-filter.html">Courses Filter</a></li>
                                    <li><a href="course-details.html">Course Details</a></li>
                                </ul>
                            </li>
                            <li className="has-sub-menu relative">
                                <a role="button">Pages</a>

                                <ul className="ed-header-submenu">
                                    <li><a href="teachers.html">Teachers</a></li>
                                    <li><a href="teacher-details.html">Teacher Details</a></li>
                                    <li><a href="events.html">Events</a></li>
                                    <li><a href="events-2.html">Events V.2</a></li>
                                    <li><a href="event-details.html">Event Details</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="coming-soon.html">Coming Soon Page</a></li>
                                    <li><a href="404.html">Error 404</a></li>
                                </ul>
                            </li>
                            <li className="has-sub-menu relative">
                                <a role="button">News</a>

                                <ul className="ed-header-submenu">
                                    <li><a href="news-grid.html">News Grid</a></li>
                                    <li><a href="news-list.html">News List</a></li>
                                    <li><a href="news-details.html">News Details</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact us</a></li>
                        </ul>
                    </div>

                    {/* <!-- right actions --> */}
                    <div className="flex items-center gap-x-[60px] xxs:gap-[30px]">
                        <button className="ed-search-opener-btn group">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M15.962 15.9063L12.0216 12.0025C13.0011 10.8356 13.5911 9.33716 13.5911 7.70448C13.5911 3.992 10.5427 0.97168 6.79561 0.97168C3.04849 0.97168 0 3.992 0 7.70448C0 11.4167 3.04849 14.4368 6.79561 14.4368C8.44348 14.4368 9.95601 13.8523 11.1338 12.8819L15.0743 16.7858C15.1968 16.9072 15.3575 16.9679 15.5181 16.9679C15.6788 16.9679 15.8395 16.9072 15.9621 16.7858C16.2072 16.5429 16.2072 16.1491 15.962 15.9063ZM1.25549 7.70448C1.25549 4.67786 3.74076 2.21553 6.79561 2.21553C9.85038 2.21553 12.3356 4.67786 12.3356 7.70448C12.3356 10.7309 9.85038 13.1929 6.79561 13.1929C3.74076 13.1929 1.25549 10.7309 1.25549 7.70448Z" className="fill-edblue group-hover:fill-edpurple" />
                                </g>
                            </svg>
                        </button>
                        <button className="ed-cart-opener-btn group">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M12.9894 13.6354H6.93871C6.06616 13.6354 5.2925 13.0682 5.05637 12.2557L3.01122 5.38995C2.93856 5.14134 2.69705 4.97072 2.42122 4.97072H0.818742C0.446713 4.97072 0.145996 4.67212 0.145996 4.30421C0.145996 3.93629 0.446713 3.6377 0.818742 3.6377H2.42122C3.29377 3.6377 4.06676 4.2049 4.30289 5.01737L4.68568 6.30374H14.9753C15.3951 6.30374 15.7934 6.50169 16.0403 6.83361C16.2852 7.16287 16.3558 7.57477 16.234 7.96402L14.8462 12.3283C14.5744 13.1161 13.8296 13.6354 12.9894 13.6354Z" className="fill-edblue group-hover:fill-edpurple" />
                                    <path d="M7.54617 16.9687C6.80414 16.9687 6.20068 16.3707 6.20068 15.6353C6.20068 14.9 6.80414 14.302 7.54617 14.302C8.28821 14.302 8.89167 14.9 8.89167 15.6353C8.89167 16.3707 8.28821 16.9687 7.54617 16.9687Z" className="fill-edblue group-hover:fill-edpurple" />
                                    <path d="M12.2556 16.9687C11.5136 16.9687 10.9102 16.3707 10.9102 15.6353C10.9102 14.9 11.5136 14.302 12.2556 14.302C12.9977 14.302 13.6011 14.9 13.6011 15.6353C13.6011 16.3707 12.9977 16.9687 12.2556 16.9687Z" className="fill-edblue group-hover:fill-edpurple" />
                                </g>
                            </svg>
                        </button>
                        <a href="contact.html" className="ed-btn to-go-to-sidebar-in-mobile lg:m-[20px]">apply now</a>
                    </div>
                </div>

                {/* <!-- mobile menu button --> */}
                <button type="button" className="ed-mobile-menu-open-btn hidden lg:inline-block text-edblue text-[18px]"><i className="fa-solid fa-bars"></i></button>
            </div>
        </div>
    )
}