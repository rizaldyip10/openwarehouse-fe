'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const navContent = [
  {
    name: 'Orders',
    url: '/dashboard/user',
  },
  {
    name: 'Invoice',
    url: '/dashboard/user/invoice',
  },
];

export default function UserNav() {
  const pathname = usePathname();
  return (
    <div className='z-40'>
      {navContent.map((content) => {
        return (
          <Link key={content.name} href={content.url}>
            <Button
              variant={'link'}
              className={`w-24 text-extends-darkGrey decoration-extends-darkGrey underline-offset-[15px] ${
                pathname === content.url ? 'underline' : ''
              }`}
            >
              {content.name}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
