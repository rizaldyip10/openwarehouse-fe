import { Button } from "@/components/ui/button";
import Image from "next/image";
import collectionImg from "@/assets/images/pro-1.png";

export default function CollectionCard() {
  return (
    <div className="w-full flex flex-col md:flex-row border bg-white p-8 rounded-md shadow-sm justify-between items-center">
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
                <h1 className="text-4xl text-black font-semibold">Shoes Collection!</h1>
                <p className="text-xl text-gray-500">Launch Offer 15% Off</p>
            </div>
            <Button
                className="bg-purple-800 w-max hover:bg-purple-800 rounded-none"
            >
                View Collection
            </Button>
        </div>
        <Image src={collectionImg} alt="collection-img" className="w-72 h-72 md:w-40 md:h-40" />
    </div>
  )
}
