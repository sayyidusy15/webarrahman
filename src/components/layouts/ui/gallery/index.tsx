export default function Gallery(){
    return(
        // <!-- GALLERY SECTION START -->
        <div className="overflow-hidden">
            <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
                <h5 className="font-semibold text-[24px] text-edblue text-center mb-[40px] relative z-[1] before:absolute before:-z-[1] before:w-[100%] before:h-[1px] before:left-0 before:top-[50%] before:bg-[#D9D9D9] before:-translate-y-[50%]"><span className="bg-white px-[20px]">Our School Gallery</span></h5>

                {/* <!-- gallery slider --> */}
                <div className="ed-gallery-slider swiper overflow-visible">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide max-w-max">
                            <a href="assets/img/gallery-img-1.jpg" data-fslightbox="gallery" className="block rounded-[40px] overflow-hidden"><img src="assets/img/gallery-img-1.jpg" alt="Gallery image"/></a>
                        </div>
                        <div className="swiper-slide max-w-max">
                            <div className="relative rounded-[40px] overflow-hidden">
                                <img src="assets/img/gallery-img-2.jpg" alt="Gallery image"/>
                                <a href="https://youtu.be/5ppDzM8m9lI?si=zml3HbV176DBsZlg" data-fslightbox="gallery" className="flex items-center justify-center w-[60px] aspect-square bg-white rounded-full text-[#3746D2] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] before:border before:absolute before:top-[50%] before:-translate-y-[50%] before:left-[50%] before:-translate-x-[50%] before:w-[calc(100%+15px)] before:h-[calc(100%+15px)] before:rounded-full before:transition before:duration-[400ms] hover:bg-edpurple hover:text-white hover:before:border-edpurple"><i className="fa-solid fa-play"></i></a>
                            </div>
                        </div>
                        <div className="swiper-slide max-w-max">
                            <a href="assets/img/gallery-img-3.jpg" data-fslightbox="gallery" className="block rounded-[40px] overflow-hidden"><img src="assets/img/gallery-img-3.jpg" alt="Gallery image"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}