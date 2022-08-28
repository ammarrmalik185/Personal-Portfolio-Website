import Image from "next/image";
import image from "../public/sunset.jpg";

function RelatedPostCard(){
    return(
        <div className="px-4 py-4 rounded-md border border-[#061224] w-full space-y-1">
            <Image className="rounded-lg" src={image} alt="Sunset in the mountains" width={230} height={150} />
            <div className="flex justify-between font-sans font-normal text-[12px] text-[#111112]">
                <p>Sarah Harding</p>
                <p>06 September</p>
            </div>
            <p className="font-montserrat font-semibold text-[14px] text-[#111112] leading-normal">
                    How To Create a Resume for a Job in Social Media
            </p>
        </div>
    )
}

export default RelatedPostCard;
