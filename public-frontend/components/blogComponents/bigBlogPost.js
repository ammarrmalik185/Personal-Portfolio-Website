import Image from "next/image";

function LatestBlogPost(){
    return(
        <div className="rounded overflow-hidden shadow-lg border px-8 py-6">
            <div className="">
                <Image className="rounded-md" src="sunset.jpg" alt="Sunset in the mountains" width={579} height={330} />
            </div>

           {/* adding foto, name and date */}
        <div className="mt-4 w-[579px] ">
            <div className="flex space-x-2">
                 <Image className="rounded-sm" src="sunset.jpg" alt="Sunset in the mountains" width={30} height={30} />
                 <p className="font-jobhub font-normal text-[16px] text-[#111112]">Sarah Harding</p>
                 <p className="font-jobhub font-normal text-[16px] text-[#111112]">06 September</p>

            </div>

            <div>
               <p className="font-montserrat font-bold text-[24px]"> 21 Job Interview Tips: How To Make a Great Impression</p>
            </div>

            <div className="relative mt-12">
                 <div className="px-2 py-1 bg-[#071D90] text-white absolute bottom-0 left-0 w-fit">
                     <p>
                         Keep Reading
                      </p>

                 </div>

                 <div className="absolute bottom-2 right-0 flex space-x-2">
                 <div className="px-2 py-1 font-sans font-normal text-[12px] border bg-[#f3fbfb]">
                     <p>Recruitment</p>
                 </div>

                 <div className="px-2 py-1 font-sans font-normal text-[12px] border bg-[#f3fbfb]">
                      <p>Branding</p>
                 </div>


                 </div>

            </div>


        </div>

        </div>
    )
}

export default LatestBlogPost;
