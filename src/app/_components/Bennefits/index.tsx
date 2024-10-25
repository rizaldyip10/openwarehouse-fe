import { BennefitsData } from "@/app/data/DummyData";
import BennefitsCard from "./BennefitsCard";

export default function BennefitsSection() {
  return (
    <div className="w-full flex items-center justify-center py-6">
        <div className="w-full 2xl:w-[1440px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {BennefitsData.map((bennefit, index) => (
                <BennefitsCard 
                    key={index}
                    icon={bennefit.icon}
                    title={bennefit.title}
                    description={bennefit.description}
                    color={bennefit.color}
                />
            ))}
        </div>
    </div>
  )
}
