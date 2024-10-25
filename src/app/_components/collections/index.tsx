import { CollectionsData } from "@/app/data/DummyData";
import CollectionCard from "./CollectionCard";


export default function CollectionSection() {
  return (
    <div className="w-full flex items-center justify-center py-6">
      <div className="w-full 2xl:w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-4">
        {CollectionsData.map((collection, index) => (
          <CollectionCard 
            key={index}
            title={collection.title}
            description={collection.description}
            imageUrl={collection.imageURL}
            href={collection.href}
          />
        ))}
      </div>
    </div>
  )
}
