'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LuShoppingCart } from 'react-icons/lu';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IoMdSearch } from 'react-icons/io';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import useStore from '@/zustand';
import { useEffect } from 'react';
import { getCookie } from '@/config/cookie';
import { useKeepLogin } from '@/services/user/login/hooks/useKeepLogin';
import AvatarNav from '../AvatarNav';
import { MaskFullname } from '@/utils/MaskFullname';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface NavContent {
  contentName: string;
  url: string;
}

const navContent: NavContent[] = [
  {
    contentName: 'Home',
    url: '/',
  },
  {
    contentName: 'Products',
    url: '/products',
  },
  {
    contentName: 'Stores',
    url: '/store',
  },
  {
    contentName: 'Checkout',
    url: '/checkout',
  },
];

export default function Navbar() {
  const { isAuthenticated, fullname, logout } = useStore();

  const { keepLoginMutation } = useKeepLogin();

  useEffect(() => {
    const handleGetCookie = async () => {
      const userToken = await getCookie();

      if (userToken?.value) {
        keepLoginMutation();
      } else {
        return;
      }
    };
    handleGetCookie();
  }, [isAuthenticated]);

  return (
    <div>
      <div className='flex h-[60px] items-center justify-between bg-extends-bgDefault px-24 py-10'>
        <div className='flex items-center gap-14'>
          <img
            src='Logo/logogram-oxford.png'
            alt='Logo'
            className='h-[50px] w-[50px]'
          />
          <div className='flex'>
            <div className='flex h-[50px] w-[550px] items-center space-x-4 rounded-l-md border bg-white px-3'>
              <Input
                placeholder="I'm Shopping For..."
                className='border-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0'
              />
              <Separator
                orientation='vertical'
                className='h-10 w-[1px] bg-gray-200'
              />
              <Select>
                <SelectTrigger className='w-[200px] border-none'>
                  <SelectValue placeholder='All Categories' />
                </SelectTrigger>
                <SelectContent sideOffset={10}>
                  <SelectItem value='best matches'>Best Matches</SelectItem>
                  <SelectItem value='newest'>Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              variant={'outline'}
              className='flex h-[50px] items-center rounded-none rounded-r-md border border-l-0 bg-white p-2 hover:bg-white'
            >
              <IoMdSearch className='text-black' size={30} />
            </Button>
          </div>
        </div>
        {isAuthenticated ? (
          <div className='flex items-center gap-6'>
            <Button
              variant={'outline'}
              className='flex h-12 w-12 items-center justify-center rounded-full px-0 py-0'
            >
              <LuShoppingCart size={20} strokeWidth={2} />
            </Button>
            <div className='flex items-center gap-2'>
              <AvatarNav
                logout={logout}
                fullname={MaskFullname(fullname as string)}
              />
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-6'>
            <Link href={'/signin'}>
              <Button className='bg-extends-purple hover:bg-extends-secondaryPurple'>
                Sign In
              </Button>
            </Link>
            <Link href={'/signup'}>
              <Button
                variant={'outline'}
                className='border-dashed border-extends-purple bg-extends-lightPink text-extends-purple hover:border-white hover:bg-extends-purple hover:text-white'
              >
                Sign Up
              </Button>
            </Link>
          </div>
        )}
      </div>
      <div className='flex h-[60px] items-center justify-between border-b-2 px-24 py-10'>
        <div className='flex items-center gap-14'>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button className='bg-extends-lightPink text-extends-purple hover:bg-extends-lightPink'>
                <RxHamburgerMenu /> All Categories
              </Button>
            </HoverCardTrigger>
            <HoverCardContent align='start' sideOffset={10}>
              The React Framework created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
          <div className='flex h-[50px] min-w-[500px] items-center justify-between space-x-4 px-3'>
            {navContent.map((content: NavContent) => {
              return (
                <Link
                  href={content.url}
                  key={content.contentName}
                  className='hover:text-extends-purple'
                >
                  {content.contentName}
                </Link>
              );
            })}
          </div>
        </div>
        <div className='flex items-center gap-6'>
          <div>Promotion Assets</div>
        </div>
      </div>
    </div>
  );
}
