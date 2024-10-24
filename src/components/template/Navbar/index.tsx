import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LuShoppingCart } from 'react-icons/lu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
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

export default function Navbar() {
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
              <DropdownMenu>
                <DropdownMenuTrigger className='text-extends-darkGrey flex items-center whitespace-nowrap text-[14px]'>
                  Best Matches
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={20}>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Button
              variant={'outline'}
              className='flex h-[50px] items-center rounded-none rounded-r-md border border-l-0 bg-white p-2 hover:bg-white'
            >
              <IoMdSearch className='text-black' size={30} />
            </Button>
          </div>
        </div>
        <div className='flex items-center gap-6'>
          <Button
            variant={'outline'}
            className='flex h-12 w-12 items-center justify-center rounded-full px-0 py-0'
          >
            <LuShoppingCart size={20} strokeWidth={2} />
          </Button>
          <div className='flex items-center gap-2'>
            <Avatar className='h-10 w-10'>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Label className='text-extends-darkGrey'>Maria Gibson</Label>
          </div>
        </div>
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
            <Link href={'/'} className='hover:text-extends-purple'>
              Home
            </Link>
            <Link href={'/'} className='hover:text-extends-purple'>
              Products
            </Link>
            <Link href={'/'} className='hover:text-extends-purple'>
              Stores
            </Link>
            <Link href={'/'} className='hover:text-extends-purple'>
              Checkout
            </Link>
          </div>
        </div>
        <div className='flex items-center gap-6'>
          <div>Promotion Assets</div>
        </div>
      </div>
    </div>
  );
}
