import OrderSummary from './_components/OrderSummary';
import Subtotal from './_components/Subtotal';
import DeliveryAddress from './_components/DeliveryAddress';
import Payment from './_components/Payment';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa6';

export default function CheckoutPage() {
  return (
    <div className='flex min-h-screen flex-grow justify-center gap-5 bg-extends-bgDefault px-24 py-12'>
      <div className='flex w-[40%] flex-col gap-4'>
        <OrderSummary />
        <Subtotal />
      </div>
      <div className='flex w-[60%] flex-col gap-4'>
        <DeliveryAddress />
        <div className='flex items-center gap-4'>
          <div className='w-[50%]'>
            <Payment
              title='Master Card'
              description='Last time used: 21 march 2023'
              icons={<FaCcMastercard size={50} />}
            />
          </div>
          <div className='w-[50%]'>
            <Payment
              title='Visa Card'
              description='Last time used: 21 march 2023'
              icons={<FaCcVisa size={50} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
