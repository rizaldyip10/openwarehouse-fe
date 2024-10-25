import { LucideIcon, Truck } from 'lucide-react'
import React from 'react'

interface IBennefitsCard {
    icon: LucideIcon;
    title: string;
    color: string;
    description: string;
}

export default function BennefitsCard({
    icon,
    title,
    color,
    description
}: IBennefitsCard) {
    const Icon = icon;
  return (
    <div className='w-full flex flex-col p-6 gap-2 rounded-md bg-white shadow-sm'>
        <Icon className={`w-7 h-7 text-${color}-700`} />
        <h1 className='font-semibold text-lg'>Fast Delivery</h1>
        <p className='text-slate-500 text-sm font-medium'>
            It is a long established fact that a reader will be distracted. Contrary to popular belief.                                
        </p>
    </div>
  )
}
