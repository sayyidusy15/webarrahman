/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import supabase from '@/utils/supabaseClient';

export default function Features(){
    
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
        const { data, error } = await supabase
        .from("features")
        .select()
        .order('id', { ascending: true }); 
        if (error) {
            console.error('Error fetching features data:', error);
        } else {
            setData(data);
        }
        };

        getData();
    }, []);

    return(
        // <!-- FEATURES SECTION START -->
        <section className="-mt-[70px] relative z-[2]">
            <div className="mx-[19.71%] xxxl:mx-[14.71%] xxl:mx-[9.71%] xl:mx-[5.71%] md:mx-[12px]">
            
                <div  className="grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-[30px]">
                    {/* <!-- single feature --> */}
                    {data.map((features_data,index)=>(
                    <div key={index} className="bg-[#FAF9F6] hover:bg-edyellow border-t-[7px] border-edyellow hover:border-edpurple duration-[400ms] p-[30px] sm:p-[25px] group relative z-[1] before:absolute before:-z-[1] before:inset-0 before:bg-[url('/assets/img/faeture-bg.jpg')] before:mix-blend-hard-light before:opacity-0 before:duration-[400ms] hover:before:opacity-15">
                        <span className="icon">
                            <img src={features_data?.img_features} alt="img features" className="mb-[11px]"/>
                        </span>
                        <h4 className="font-semibold text-[24px] xl:text-[22px] mb-[3px] text-edblue"><a href="#" className="hover:text-edpurple">
                            {features_data?.title_features}
                            </a></h4>
                        <p className="text-edgray2 group-hover:text-black mb-[18px]">
                            {features_data?.desc_features}</p>
                        <a href={features_data?.navigation_features} className="text-edblue hover:text-edpurple"><span className="text-[14px]"><i className="fa-solid fa-angle-right"></i></span> View More</a>
                    </div>
                    ))}
                </div>

            </div>
        </section>
        
    )
}