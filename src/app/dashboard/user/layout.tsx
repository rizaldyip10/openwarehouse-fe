import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Dashboard',
  description: 'Advanced form example using react-hook-form and Zod.',
};

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import UserProfileData from './_components/UserProfileData';
import { Separator } from '@/components/ui/separator';
import UserNav from './_components/UserNav';
import LoaderUserDashboard from './_components/UserDashboardLoader';

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function UserDashboardLayout({ children }: SettingsLayoutProps) {
  return (
    <LoaderUserDashboard allowedRoles={['user']}>
      <div className='flex min-h-screen flex-grow justify-center gap-5 bg-extends-bgDefault px-24 py-12'>
        <div className='flex w-[80%] flex-col gap-4'>
          <div className='flex flex-col'>
            <UserNav />
            <Separator className='z-10' />
          </div>
          {children}
        </div>
        <div className='grid h-fit w-[20%] gap-4 p-4'>
          <div className='flex items-center justify-center'>
            <Avatar className='h-44 w-44'>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <UserProfileData />
        </div>
      </div>
    </LoaderUserDashboard>
  );
}
