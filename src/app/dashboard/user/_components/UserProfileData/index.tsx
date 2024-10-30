'use client';

import useStore from '@/zustand';
import { MdOutlineEmail, MdOutlinePerson } from 'react-icons/md';
import { Separator } from '@/components/ui/separator';

export default function UserProfileData() {
  const { email, fullname, pin } = useStore();

  return (
    <>
      <div className='flex items-center justify-center gap-2 text-extends-darkGrey'>
        <MdOutlineEmail size={15} className='text-blue-400' />
        {email}
      </div>
      <div className='flex items-center justify-center gap-2 text-extends-darkGrey'>
        <MdOutlinePerson size={20} className='text-blue-400' />
        {fullname}
      </div>
      <Separator className='bg-extends-darkGrey' />
      {pin ? (
        <div className='flex items-center justify-center text-extends-darkGrey'>
          Forgot Pin
        </div>
      ) : (
        <div className='flex items-center justify-center text-extends-darkGrey'>
          Create Pin
        </div>
      )}
    </>
  );
}
