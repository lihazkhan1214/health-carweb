import React from 'react';
import Image from 'next/image';

function HeroSection() {
    return (
        <div className="relative   w-full" style={{height:"100%"}}>

            <div className="w-full relative">
                <div className="bgImage relative ">
                    <Image


                        src="/img/banner v3.png"

                        alt="Description"

                        width={4000}
                        height={750}



                    />
                </div>
            </div>
            <div className=" sm:w-2/4 md:mt-4 lg:mt-0 lg:w-2/4 flex flex-col justify-center sm:ml-10  absolute top-0 " style={{ height: "100%" }}>
                <h1 className='ml-2 sm:ml-0 mb-2 sm:mb-10 w-2/4 sm:w-3/4  text-[#5A5A5A] text-sm sm:text-lg  md:text-2xl lg:text-4xl 2xl:text-6xl font-medium leading-16 '>

                    Senior care services
                    designed to <span className='text-[#CB5A6F]'>support
                        and assist </span>you in
                    the comfort
                    of your home.


                </h1>




                <div className='hidden sm:block sm:mb-10  text-[#2F2F2F]  text-xs lg:text-sm sm:w-2/4 lg:w-full'>Our services are delivered by trained professionals</div>
                <div className="">
                    <button className='bg-[#CB5A6F] ml-2 sm:ml-0 mb-2 sm:mb-10 text-[#FFF] text-xs sm:text-base font-bold rounded px-4 py-2'>Apply For Care</button>
                </div></div>



        </div>
    )
}

export default HeroSection