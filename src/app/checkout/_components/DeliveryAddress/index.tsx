import { Separator } from '@/components/ui/separator';
import LabelWithInput from '../LabelWithInput';
import { Button } from '@/components/ui/button';

export default function DeliveryAddress() {
  return (
    <div className='flex flex-col rounded-md border bg-white'>
      <div className='p-4'>Order Summary</div>
      <Separator />
      <div className='grid grid-cols-6 gap-4 p-4'>
        <div className='col-span-3'>
          <LabelWithInput
            label='First Name'
            placeholder='First Name'
            type='text'
            isRequired={true}
          />
        </div>
        <div className='col-span-3'>
          <LabelWithInput
            label='Last Name'
            placeholder='Last Name'
            type='text'
            isRequired={true}
          />
        </div>
        <div className='col-span-3'>
          <LabelWithInput
            label='Delivery Address'
            placeholder='Delivery Address'
            type='text'
            isRequired={true}
          />
        </div>
        <div className='col-span-3'>
          <LabelWithInput label='Address' placeholder='Address' type='text' />
        </div>
        <div className='col-span-2'>
          <LabelWithInput
            label='City'
            placeholder='City'
            type='text'
            isRequired={true}
            isSelectOption={true}
            selectContent={['Jakarta', 'Bandung', 'Surabaya']}
          />
        </div>
        <div className='col-span-2'>
          <LabelWithInput
            label='State'
            placeholder='State'
            type='text'
            isRequired={true}
            isSelectOption={true}
            selectContent={['Jawa Barat', 'Jawa Tengah', 'Jawa Timur']}
          />
        </div>
        <div className='col-span-2'>
          <LabelWithInput
            label='Country'
            placeholder='Country'
            type='text'
            isRequired={true}
            isSelectOption={true}
            selectContent={['Jawa Barat', 'Jawa Tengah', 'Jawa Timur']}
          />
        </div>
        <div className='col-span-1'>
          <LabelWithInput
            label='Zip Code'
            placeholder='Zip Code'
            type='text'
            isRequired={true}
          />
        </div>
        <div className='col-span-3'>
          <LabelWithInput
            label='Email Address'
            placeholder='Email Address'
            type='email'
          />
        </div>
        <div className='col-span-2'>
          <LabelWithInput
            label='Mobile No'
            placeholder='Mobile No'
            type='text'
            isRequired={true}
          />
        </div>
      </div>
      <div className='flex gap-2 p-4'>
        <Button className='bg-extends-purple hover:bg-extends-secondaryPurple'>
          Save
        </Button>
        <Button
          variant={'outline'}
          className='text-red-500 hover:bg-red-500 hover:text-white'
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
