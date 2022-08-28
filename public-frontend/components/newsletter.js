import Image from "next/image";
import image from "../public/sunset.jpg";

function Newsletter (){
    return(
        <div className="border flex rounded-tl-3xl mt-8 rounded-br-3xl items-center hover:scale-90 transition ease-out transform duration-300 bg-cover bg-[url('../public/shape.png')]  mx-4 my-4 w-full h-[369px] px-8 py-16 shadow-lg">
        <div className="w-1/3">
            <p className="font-heebo text-[36.5px] font-bold text-white leading-10">Receive the latest Azgardland Newsletter updates</p>
            
        </div>

        <div className="w-2/3 relative h-full">
        <div className="w-full absolute bottom-5 space-x-2 flex">
        <div className="bg-white px-2 py-2 rounded-lg w-full">
           <input className="w-full" type='text' placeholder='contact.alithemes@gmail.com'/>
        </div>
            <div>
                <button className="bg-[#EC2390] text-white px-4 py-2 rounded-lg w-full text-[20px] font-heebo font-bold">Subscribe</button>
            </div>
        </div>


        </div>
            
        </div>
    )
}

export default Newsletter;