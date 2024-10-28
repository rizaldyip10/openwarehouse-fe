import { ProductType } from "@/types/Product";
import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star } from "lucide-react";
import { currencyFormatter } from "@/utils/CurrencyFormatter";

interface IProductCard extends HTMLAttributes<HTMLDivElement> {
    product: ProductType;
};

export const ProductCard: FC<IProductCard> = ({ product, className, ...props }) => {
    return (
        <div 
            className={cn(
                "w-full flex flex-col items-center gap-2 border shadow-sm bg-white cursor-pointer",
                className
            )}
            {...props}
        >
            <div className="w-full flex justify-center items-center bg-extends-bgDefault py-4 group">
                <Image 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-44 h-44 transition-all duration-300 ease-in-out transform group-hover:scale-110"
                />
            </div>
            <div className="w-full p-4 flex flex-col items-center gap-4">
                <div className="w-max py-0 px-2 text-[12px] border border-slate-200 text-slate-500 rounded-md">
                    <p>{ product.category }</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <h1 className="text-xl font-semibold text-slate-500 dark:text-gray-400 block">{ product.name }</h1>
                    <div className="w-max flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <p className="text-slate-800 font-semibold">{ product.rating }</p>
                    </div>
                    <h1 className="mt-2 font-medium text-2xl">{ currencyFormatter(product.price)}</h1>
                </div>
                <Button
                    variant="outline"
                    className="px-4 py-1 lg:px-4 bg-transparent  text-purple-500 text-base  transition hover:bg-purple-500/10 hover:text-purple-500 border border-slate-200 border-dashed font-medium w-full"
                >
                    Buy Now
                </Button>
            </div>
        </div>
    )
};