import { Button } from '@/components/ui/button';
import { TbExternalLink } from 'react-icons/tb';
import Link from 'next/link';
import Image from 'next/image';
import { StoreDataProps } from '@/services/store/interfaces';

export default function StoreCard(props: StoreDataProps) {
  const { imageUrl, name, slug } = props;
  return (
    <div className='flex h-[300px] w-[300px] flex-col items-center justify-between rounded-md border border-gray-200 shadow-md'>
      <div className='group flex h-full w-full items-center justify-center bg-extends-brokenWhite'>
        <Image
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
          className='h-32 w-32 transform transition-all duration-300 ease-in-out group-hover:scale-110'
        />
      </div>
      <div className='flex h-full w-full flex-col items-center justify-center gap-4 bg-white'>
        <div className='text-extends-softGrey'>{name}</div>
        <div>Review</div>
        <Link href={'/'} className='w-[90%]'>
          <Button className='w-full rounded-none border border-dashed border-slate-300 bg-white text-extends-purple hover:bg-extends-softPink'>
            Visit <TbExternalLink size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
