import Image from "next/image";
import image from "../public/sunset.jpg";

function LatestNewsInfo ({title}){
    return(
        <div className='flex items-center'>
            <div>
              <Image className='rounded-md' src={image} alt="Sunset in the mountains" width={100} height={100} />
            </div>

            <div className='px-2 py-2'>
              <div>
                <p className='font-montserrat font-semibold text-[14px] leading-4'> You should have this information before job interview</p>
              </div>

              <div className='flex space-x-2 items-center py-1'>
               <Image className='rounded-full' src={image} alt="Sunset in the mountains" width={30} height={30} />
               <p className='font-sans font-normal text-[12px] text-[#1F2938] '>Sugar Rosie</p>
               <p className='text-[#A0ABB8] font-sans font-normal text-[12px] '>2 hours ago</p>

              </div>
            </div>


            </div>
    )
}

export default LatestNewsInfo;