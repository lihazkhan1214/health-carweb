import React from 'react';
import Image from 'next/image';

function ServiceHome({flxself, title, desc, img,imgflex, orderLeft, orderRight, bgcolor }) {
    return (
        <>

            <div className={`w-full relative flex md:gap-0 flex-col md:flex-row py-8 px-16 bg-[${bgcolor}]`}>
                <div className={`md:w-1/2 md:px-4 lg:px-2 xl:px-0 ${orderLeft}  flex flex-col items-center justify-center`}>
                    <Image className={`${imgflex}`} src={img} alt='.dldldkf' width={478} height={488} />


                </div>
                <div className={`md:w-1/2  md:px-4 lg:px-2 xl:px-0   ${orderRight}  flex  flex-col justify-between  `}>
                    <div className={`${flxself} text-[#5A5A5A] text-sm`}>services</div>

                    <h1 className='text-[##5A5A5A]   md:text-2xl lg:text-4xl 2xl:text-6xl font-medium'>{title}</h1>
                    <p className='text-[#5A5A5A]  text-justify lg:text-2xl  xl:text-4xl'>{desc}</p>
                    <div className={`${flxself}`}>
                    <button className={`  bg-[#CB5A6F] text-[#FFF] font-bold text-base  rounded px-8 py-2`}>Learn More</button>
                    
                    </div>

               



                </div>


            </div>





        </>
    )
}

export default ServiceHome;