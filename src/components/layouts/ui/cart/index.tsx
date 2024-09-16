export default function Cart(){
    return (
        // <!-- cart -->
        <div className="ed-cart-bar group">
        <div className="w-[420px] max-w-full fixed z-[100] right-0 top-0 h-full bg-white flex flex-col translate-x-[100%] duration-[400ms] group-[.active]:translate-x-0">
            {/* <!-- heading --> */}
            <div className="flex items-center justify-between px-[25px] border-b border-edgray/20 pb-[23px] pt-[22px]">
                <h5 className="text-[20px]">My Cart List</h5>
                <h6>(03 Items)</h6>
            </div>

            {/* <!-- cart items --> */}
            <div>
                {/* <!-- single cart item --> */}
                <div className="flex items-center gap-[20px] py-[30px] px-[25px] border-b border-edgray/20">
                    <img src="/assets/img/cart-item-1.jpg" alt="Cart Item Image" className="rounded-[10px] shrink-0"/>
                    <div className="grow">
                        <h6 className="font-medium text-[18px] text-edblue"><a href="course-details.html" className="hover:text-edpurple">Web Development</a></h6>
                        <h6 className="font-medium text-edgray">$15.00</h6>
                    </div>
                    <button className="text-[20px] text-edgray shrink-0 hover:text-edpurple">x</button>
                </div>

                {/* <!-- single cart item --> */}
                <div className="flex items-center gap-[20px] py-[30px] px-[25px] border-b border-edgray/20">
                    <img src="/assets/img/cart-item-2.jpg" alt="Cart Item Image" className="rounded-[10px] shrink-0"/>
                    <div className="grow">
                        <h6 className="font-medium text-[18px] text-edblue"><a href="course-details.html" className="hover:text-edpurple">Digital Marketing</a></h6>
                        <h6 className="font-medium text-edgray">$15.00</h6>
                    </div>
                    <button className="text-[20px] text-edgray shrink-0 hover:text-edpurple">x</button>
                </div>

                {/* <!-- single cart item --> */}
                <div className="flex items-center gap-[20px] py-[30px] px-[25px] border-b border-edgray/20">
                    <img src="/assets/img/cart-item-3.jpg" alt="Cart Item Image" className="rounded-[10px] shrink-0"/>
                    <div className="grow">
                        <h6 className="font-medium text-[18px] text-edblue"><a href="course-details.html" className="hover:text-edpurple">WordPress Development</a></h6>
                        <h6 className="font-medium text-edgray">$15.00</h6>
                    </div>
                    <button className="text-[20px] text-edgray shrink-0 hover:text-edpurple">x</button>
                </div>
            </div>

            {/* <!-- cart bottom --> */}
            <div className="mt-auto px-[25px] mb-[30px]">
                <div className="flex items-center justify-between font-medium text-[18px] text-edblue mb-[33px]">
                    <span>Total</span>
                    <span>$999</span>
                </div>
                <div className="space-y-[15px]">
                    <a href="#" className="ed-btn w-full !rounded-[10px] !bg-transparent border border-edblue !text-edblue hover:!bg-edblue hover:!text-white">Proceed to checkout</a>
                    <a href="#" className="ed-btn w-full !rounded-[10px]">Proceed to checkout</a>
                </div>
            </div>
        </div>
    </div>
    )
}