import { StaticImageData } from "next/image";

export type ProductType = {
    name: string;
    price: number;
    category: string;
    rating: number;
    imageUrl: StaticImageData;
};