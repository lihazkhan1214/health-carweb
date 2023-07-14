import React from 'react';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div className="bg-[#F5F5F5] px-8 py-10  flex flex-col md:flex-row  items-center justify-between">
            <div className="md:w-1/4">
                <Image src="/img/Seasoned Senior logo-03 1.png" width={150} height={150} />
                <div className="mt-1 hidden md:block font-sm font-thin text-[#020202]">
                    Senior Home Care Agency..


                </div>

            </div>
            <div className="md:w-3/4">

                <p className='text-[#8D8D8D] text-justify text-sm'>Senior care services designed to support and assist elderly individuals who wish to remain in the comfort of their own homes
                    while receiving the care they need. 
                </p>
                <p className='text-[#8D8D8D] text-justify text-sm'>Our services are delivered by trained professionals, such as caregivers, nurses, or home health aides.</p>
                <div className="hidden md:block">
                <div className="flex justify-between">
                
    
                
                
                <div className="text-sm text-[#8D8D8D] font-thin">Term of Use       - </div> 
                <div  className="text-sm text-[#8D8D8D] font-thin"> Privacy Policy      -   </div>  
                <div  className="text-sm text-[#8D8D8D] font-thin"> P Background Checks      -     </div>  
                <div  className="text-sm text-[#8D8D8D] font-thin">     Blog      -     </div>  
                <div  className="text-sm text-[#8D8D8D] font-thin">     
                Copyright Seasoned Senior 2023    </div> 
                       
                
                
                
                </div>








                </div>




            
            
                </div> 
                <div className="w-1/5 flex md:justify-end flex-row">   
                <FacebookIcon className='bg-[#CB5A6F] text-[#FFF] mx-2 cursor-pointer p-1 rounded-full'/ >  
<TwitterIcon className='bg-[#CB5A6F] text-[#FFF] mx-2 p-1 cursor-pointer rounded-full'/>
            <InstagramIcon className='bg-[#CB5A6F] mx-2 text-[#FFF] p-1  cursor-pointer rounded-full'/>

        </div>
     
   </div>
  )
}

export default Footer