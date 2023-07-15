import React from 'react'
import ServiceHome from '../../components/ServiceHome';

import HeroSection from '../../components/HeroSection';


function Services() {
    const services=[{
        img:'/img/service1.png',
        title:"Personal Care Assistance",
        desc:" Our caregivers provide assistance with activities of daily living (ADLs) such asbathing, dressing, grooming, toileting,and mobility support. We will ensurethe personal hygiene and physical well-being of seniors.",
        bgcolor:"#FFF",
        flxself:"self-end",
        imgflex:"self-start",
        orderLeft:"order-1",
        orderRight:"order-2"
       

    },
    {
        img:'/img/service2.png',
        title:"Medication Management",
        desc:" Caregivers will help seniors manage their medications, ensuring they take the correct dosages at the prescribed times.We will assist with organizing medication schedules and coordinating prescription refills.", 
        bgcolor:"##F5F5F5",
        flxself:"self-start",
        imgflex:"self-end",
        orderLeft:"order-2",
        orderRight:"order-1",

    },
    {
        img:'/img/service3.png',
        title:"Meal Preparation",
        desc:"Our home health aides will prepare nutritious meals that cater to seniors' dietary requirements. They will also accommodate specific dietary restrictions or preferences.",
        bgcolor:"#FFF",
        flxself:"self-end",
        imgflex:"self-start",
        orderLeft:"order-1",
        orderRight:"order-2"
       

    },
    {
        img:'/img/service4.png',
        title:"Companionship and Social Support",
        desc:" Caregivers offer companionship and engage in activities with seniors, providing emotional support, conversation, and helping to alleviate feelings of loneliness or isolation. They can participate in hobbies, games, or accompany seniors on outings.", 
        bgcolor:"##F5F5F5",
        flxself:"self-start",
        imgflex:"self-end",
        orderLeft:"order-2",
        orderRight:"order-1",

    },
    {
        img:'/img/service5.png',
        title:"Housekeeping",
        desc:"Caregivers will help with light housekeeping tasks, including tidying up, laundry, changing linens, and maintaining a safe and clean living environment for seniors.",
        bgcolor:"#FFF",
        flxself:"self-end",
        orderLeft:"order-1",
        imgflex:"self-start",
        orderRight:"order-2"
       

    },
    {
        img:'/img/service6.png',
        title:"Medication Reminders", 
        desc:"Caregivers will provide reminders to seniors to take their medications as prescribed, ensuring adherence to medication schedules.",
        bgcolor:"##F5F5F5",
        flxself:"self-start",
        imgflex:"self-end",
        orderLeft:"order-2",
        orderRight:"order-1",

    },
    {
        img:'/img/service7.png',
        title:"Monitoring Health Conditions",
        desc:"Caregivers will monitor and report changes in seniors' health conditions to healthcare professionals or family members, such as noting vital signs, symptoms, or concerns.",
        bgcolor:"#FFF",
        flxself:"self-end",
        imgflex:"self-start",
        orderLeft:"order-1",

        orderRight:"order-2"
       

    },
    {
        img:'/img/service8.png',
        title:"Respite Care", 
        desc:"We offer respite care services to provide temporary relief for family caregivers who need time off. This allows family caregivers to rest or attend to personal matters while knowing their loved ones are in capable hands.",
        bgcolor:"##F5F5F5",
        flxself:"self-start",
        imgflex:"self-end",
        orderLeft:"order-2",
        orderRight:"order-1",

    },
    {
        img:'/img/service9.png',
        title:"Alzheimer's and Dementia Care",
        desc:"We specialize in providing care for seniors with Alzheimer's disease or other forms of dementia. Caregivers receive training in dementia care techniques and can assist  with managing behavioral challenges, promoting a safe environment, and engaging in memory-enhancing activities.",
        bgcolor:"#FFF",
        flxself:"self-end",
        imgflex:"self-start",
        orderLeft:"order-1",
        orderRight:"order-2"
       

    },
    {
        img:'/img/service10.png',
        title:"Care Coordination", 
        desc:"We provide care coordination services to help seniors navigate the healthcare system and ensure they receive appropriate medical care. This can involve scheduling appointments, communicating with healthcare professionals, and coordinating home health services.",
        bgcolor:"##F5F5F5",
        flxself:"self-start",
        imgflex:"self-end",
        orderLeft:"order-2",
        orderRight:"order-1",

    },
    {
        img:'/img/service11.png',
        title:"Rehabilitation Support",
        desc:"For seniors recovering from surgery, illness,or injury, home care agencies can provide rehabilitation support. Caregivers can assist with exercises, mobility assistance, and following prescribed rehabilitation plans to help seniors regain strength and independence.",
        bgcolor:"#FFF",
        flxself:"self-end",
        imgflex:"self-start",
        orderLeft:"order-1",
        orderRight:"order-2"
       

    },
    {
        img:'/img/service12.png',
        title:"Palliative Care", 
        desc:"Season seniors offer palliative care services to provide comfort and support to seniors with serious illnesses. Our caregivers focus on managing pain, addressing symptoms, and enhancing the quality of life for seniors in need of specialized care.",
        bgcolor:"##F5F5F5",
        flxself:"self-start",
        imgflex:"self-end",
        orderLeft:"order-2",
        orderRight:"order-1",

    },
    {
        img:'/img/service13.png',
        title:"24/7 Care",
        desc:"Seasoned Senior caregivers provide around-the-clock care for seniors who nrequire continuous monitoring or assistance. This ensures that seniors have access to support and assistance at any time, including overnight care and emergency situations.",
        bgcolor:"#FFF",
        flxself:"self-end",
        imgflex:"self-start",
        orderLeft:"order-1",
        orderRight:"order-2"
       

    },
    {
        img:'/img/service14.png',
        title:"Regular Assessments and Care Plans", 
        desc:"We conduct assessments to evaluate seniors' needs and develop personalized care plans. These care plans outline the specific services required and are regularly reviewed and adjusted to accommodate changing needs.",
        bgcolor:"##F5F5F5",
        flxself:"self-start",
        imgflex:"self-end",
        orderLeft:"order-2",
        orderRight:"order-1",

    },
    {
        img:'/img/service15.png',
        title:"Hospice Care",
        desc:"In collaboration with hospice organizations,Seasoned Senior offers hospice care services for seniors nearing the end of life. Caregivers provide comfort, pain management, and emotional support to both the senior and their family during this difficult time.",
        bgcolor:"#FFF",
        flxself:"self-end",
        imgflex:"self-start",
        orderLeft:"order-1",
        orderRight:"order-2"
       

    },
    {
        img:'/img/service16.png',
        title:"Specialized Care Services", 
        desc:"Our caregivers and healthcare professionals are trained in specialized areas such as diabetes management, stroke recovery, wound care,or other specific medical conditions. These specialized services ensure that seniors receive tailored care based on their unique needs.",
        bgcolor:"##F5F5F5",
        flxself:"self-start",
        imgflex:"self-end",
        orderLeft:"order-2",
        orderRight:"order-1",

    },
    {
        img:'/img/service17.png',
        title:"Fall Prevention and Home Safety",
        desc:"Caregivers will assess the home environment for potential safety hazards and implement fall prevention measures. They may suggest modifications or adaptations to improve safety and reduce the risk of accidents.",
        bgcolor:"#FFF",
        flxself:"self-end",
        imgflex:"self-start",
        orderLeft:"order-1",
        orderRight:"order-2"
       

    },
    {
        img:'/img/service18.png',
        title:"Memory Care", 
        desc:"Our professionals provide specialized memory care services for seniors with Alzheimer's disease or other forms of dementia. Caregivers are trained in memory care techniques, ensuring the safety and well-being of seniors with cognitive impairment.",
        bgcolor:"##F5F5F5",
        flxself:"self-start",
        imgflex:"self-end",
        orderLeft:"order-2",
        orderRight:"order-1",

    },
    {
        img:'/img/service19.png',
        title:"Emotional Support and Companionship for Families",
        desc:"Seasoned Senior recognizes that caregiving also affects family members. We provide emotional support and resources for families, helping them navigate the challenges of caregiving and offering peace of mind.",
        bgcolor:"#FFF",
        flxself:"self-end",
        imgflex:"self-start",
        orderLeft:"order-1",
        orderRight:"order-2"
       

    },




]
  return (
    <>
    <HeroSection/>
    {
        services.map((item,ind)=>(

            <ServiceHome key={ind} imgflex={item.imgflex} flxself={item.flxself} title={item.title} img={item.img} orderLeft={item.orderLeft} orderRight={item.orderRight} bgcolor={item.bgcolor} desc={item.desc}/>
        ))
    }
    
    
    
    
    </>
  )
}

export default Services;