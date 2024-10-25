import { ReactNode } from 'react';
import LabelWithInput from '../LabelWithInput';
import { Button } from '@/components/ui/button';

interface PaymentProps {
  title: string;
  description: string;
  icons?: ReactNode;
}

const selectContent = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default function Payment(props: PaymentProps) {
  const { title, description, icons } = props;
  return (
    <div className='flex flex-col gap-5 rounded-md border bg-white p-4'>
      <div className='flex gap-2'>
        <div className='flex w-fit items-center justify-center'>{icons}</div>
        <div className='flex flex-col'>
          <div>{title}</div>
          <div className='text-extends-softGrey'>{description}</div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-3'>
          <LabelWithInput
            label='Name of card :'
            placeholder='Name'
            type='text'
          />
        </div>
        <div className='col-span-3'>
          <LabelWithInput
            label='Card No :'
            placeholder='---- ---- ----'
            type='text'
          />
        </div>
        <div className='col-span-1'>
          <LabelWithInput
            label='Expiry Month'
            placeholder='---- Select ----'
            type='text'
            isSelectOption={true}
            selectContent={selectContent}
          />
        </div>
        <div className='col-span-1'>
          <LabelWithInput
            label='Expiry Year'
            placeholder='---- Select ----'
            type='text'
            isSelectOption={true}
            selectContent={['2022', '2023', '2024', '2025']}
          />
        </div>
        <div className='col-span-1'>
          <LabelWithInput label='CVV' placeholder='CVV' type='text' />
        </div>
      </div>
      <Button className='hover:bg-extends-secondaryPurple w-full bg-extends-purple'>
        Confirm Payment
      </Button>
    </div>
  );
}
