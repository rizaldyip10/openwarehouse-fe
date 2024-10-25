import store1 from "@/assets/images/bl-1.png"
import store2 from "@/assets/images/bl-2.png"
import store3 from "@/assets/images/bl-3.png"
import Image from "next/image"

export default function PopularStoreList() {
  const stores = [
    { id: 1, image: store1 },
    { id: 2, image: store2 },
    { id: 3, image: store3 },
    { id: 4, image: store1 },
    { id: 5, image: store2 },
    { id: 6, image: store3 },
  ];

  return (
    <div className='w-max md:w-full lg:w-max grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
      {stores.map((store) => (
        <div 
          key={store.id} 
          className="w-32 p-4 group"
        >
          <Image 
            src={store.image} 
            alt="store" 
            className="w-20 h-20 grayscale hover:filter-none transition-all duration-300 ease-in-out"
          />
        </div>
      ))}
    </div>
  )
}