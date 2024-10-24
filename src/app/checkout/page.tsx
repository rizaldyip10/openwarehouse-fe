import OrderSummary from './_components/OrderSummary';
import Subtotal from './_components/Subtotal';

export default function CheckoutPage() {
  return (
    <div className='flex min-h-screen flex-grow justify-center gap-5 bg-extends-bgDefault px-24 py-12'>
      <div className='flex w-[40%] flex-col gap-4'>
        <OrderSummary />
        <Subtotal />
      </div>
      <div className='w-[60%] bg-blue-300'>
        <div>Delivery Address</div>
        <div className='flex items-center gap-4'>
          <div>Master Card</div>
          <div>Visa Card</div>
        </div>
      </div>
    </div>
  );
}
