import { Button } from '@/components/ui/button'

export default function PromoBanner() {
  return (
    <div className='w-full flex items-center justify-center py-6'>
        <div className='w-full 2xl:w-[1440px] flex flex-col items-center justify-center shadow-sm rounded-md py-10 bg-green-300 text-center gap-4'>
            <h1 className='text-[42px] font-semibold'>Just Launched new product</h1>
            <p className='text-2xl text-slate-500'>
                It is a long established fact that a reader will be distracted by the <br/>
                readable content of  a page layout.
            </p>
            <Button
                className="bg-purple-800 w-max hover:bg-purple-800 rounded-none"
            >
                View Collection
            </Button>
        </div>
    </div>
  )
}
