import { Button } from '@/components/ui/button';

export default function Subtotal() {
  return (
    <div className='flex w-full flex-col rounded-md border bg-extends-darkNavy pb-2 text-extends-softGrey'>
      <div>
        <div className='flex w-full items-center justify-between border-b-2 border-dashed border-extends-softGrey p-4'>
          <div className='w-[65%] text-extends-brokenWhite'>Order Summary</div>
          <div className='w-[35%]'>Rp. 100.000</div>
        </div>
        <div className='flex w-full items-center justify-between border-b-2 border-dashed border-extends-softGrey p-4'>
          <div className='w-[65%] text-extends-brokenWhite'>
            Shipping Charge
          </div>
          <div className='w-[35%]'>Rp. 100.000</div>
        </div>
        <div className='flex w-full items-center justify-between border-extends-softGrey p-4'>
          <div className='w-[65%] text-extends-brokenWhite'>Promo Code</div>
          <div className='w-[35%]'>-Rp. 100.000</div>
        </div>
        <div className='flex w-full items-center justify-between border-t-2 border-extends-softGrey p-4 font-bold text-extends-brokenWhite'>
          <div className='w-[65%]'>Order Summary</div>
          <div className='w-[35%]'>Rp. 100.000</div>
        </div>
      </div>
      <div className='flex w-full items-center justify-center gap-2'>
        <Button className='hover:bg-extends-secondaryPurple w-[45%] bg-extends-purple'>
          Continue shopping
        </Button>
        <Button className='hover:bg-extends-secondaryPurple w-[45%] bg-extends-purple'>
          Back to cart
        </Button>
      </div>
      <div className='p-4 text-extends-softGrey'>
        <span className='text-white'>Note : </span>It is a long established fact
        that a reader will be distracted by the readable content of a page when
        looking at its layout.
      </div>
    </div>
  );
}
