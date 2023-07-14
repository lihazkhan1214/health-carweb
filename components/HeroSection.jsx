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
                        height={700}



                    />
                </div>
            </div>
            <div className=" md:w-2/4 md:mt-8 lg:mt-0 lg:w-1/4 flex flex-col md:justify-center  px-8  md:absolute top-0 " style={{ height: "100%" }}>
                <h1 className='mb-10  text-[#5A5A5A] text-2xl font-extrabold leading-8 '>

                    Senior care services
                    designed to <span className='text-[#CB5A6F]'>support
                        and assist </span>you in
                    the comfort
                    of your home.


                </h1>




                <div className='mb-10 text-sm text-[#2F2F2F]'>Our services are delivered by trained professionals</div>
                <div className="">
                    <button className='bg-[#CB5A6F] mb-10 text-[#FFF] text-base font-bold rounded px-4 py-2'>Apply For Care</button>
                </div></div>



        </div>
    )
}

export default HeroSection