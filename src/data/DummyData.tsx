import { ProductType } from "../types/Product";
import pro1 from "@/assets/images/01 copy.png";
import pro2 from "@/assets/images/04.png";
import pro3 from "@/assets/images/03.png";
import pro4 from "@/assets/images/02.png";
import pro5 from "@/assets/images/pro-4.png";
import pro6 from "@/assets/images/pro-2.png";
import pro7 from "@/assets/images/pro-3.png";
import { Headset, RefreshCcw, Truck, Wallet } from "lucide-react";


export const ProductListData: ProductType[] = [
    {
        name: "White Table Camera",
        rating: 4.8,
        category: "Electronic",
        price: 49,
        imageUrl: pro1
    },
    {
        name: "N95 Covid Mask",
        rating: 4.8,
        category: "Covid Safety",
        price: 49,
        imageUrl: pro2
    },
    {
        name: "Imported VR Box",
        rating: 4.8,
        category: "Entertainment",
        price: 49,
        imageUrl: pro3
    },
    {
        name: "New Colorful Shoes",
        rating: 4.8,
        category: "Footwear",
        price: 49,
        imageUrl: pro4
    },
    {
        name: "Mannat 530 Bluetooth Wireless",
        rating: 4.8,
        category: "Entertainment",
        price: 49,
        imageUrl: pro5
    },
    {
        name: "Robo Men Oversized hoo - Blue",
        rating: 4.8,
        category: "Clothes",
        price: 49,
        imageUrl: pro6
    },
    {
        name: "Mannat HD, Smart LED Fire TV",
        rating: 4.8,
        category: "Electronic",
        price: 49,
        imageUrl: pro7
    },
    
];

export const CollectionsData = [
    {
        title: "Shoes Collection!",
        description: "Launch Offer 15% Off",
        imageURL: pro4,
        href: "/"
    },
    {
        title: "T-Shirt Collection!",
        description: "Launch Offer 30% Off",
        imageURL: pro6,
        href: "/"
    },
]

export const BennefitsData = [
    {
        icon: Truck,
        color: "green",
        title: "Fast Delivery",
        description: "It is a long established fact that a reader will be distracted. Contrary to popular belief."
    },
    {
        icon: RefreshCcw,
        color: "red",
        title: "Returns In 30 Days",
        description: "It is a long established fact that a reader will be distracted. Contrary to popular belief."
    },
    {
        icon: Headset,
        color: "yellow",
        title: "Online Supoort 24/7",
        description: "It is a long established fact that a reader will be distracted. Contrary to popular belief."
    },
    {
        icon: Wallet,
        color: "purple",
        title: "Secure Payment",
        description: "It is a long established fact that a reader will be distracted. Contrary to popular belief."
    },
]