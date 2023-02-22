import Image from "next/image";
import {RiFlag2Line} from "react-icons/ri";
import {useRouter} from "next/router";
import {CurrentTheme} from "../../styles/colorSchemes";


function PortfolioCard ({ title, description, image, id, onClick }) {
    const Router = useRouter();
    return (
        <div className="max-w-sm rounded shadow-lg" style={{backgroundColor: CurrentTheme.contrast}}>
            <div className="rounded-lg px-6 pt-4" >
                <Image className="rounded-lg" src={image} alt="Sunset in the mountains"  height="150" width="300"/></div>
            <div className="px-6 pt-2">
                <div className="font-bold text-xl">
                    <text className="line-clamp-2">
                        {title}
                    </text>
                </div>
                <p style={{color:CurrentTheme.text}}>
                    {description}
                </p>
            </div>

            <div className="px-6 pt-4 pb-2 flex space-between">
            <div className="rounded-md flex-grow">
            <div className="w-fit rounded cursor-pointer mb-3" style={{backgroundColor: CurrentTheme.secondary}} onClick={() => Router.push({
                    pathname: "/portfolios/post",
                    query:{id: id}
                })}>
                <span className="inline-block text-sm font-semibold text-gray-700 p-2" style={{color: CurrentTheme.text}}> Keep Reading </span>
            </div>

            </div>
            <div className="items-center">
                <RiFlag2Line className="text-gray-700 text-lg" />
            </div>

            </div>
        </div>
    )
}

export default PortfolioCard;
