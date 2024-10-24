import { Button } from '@/components/ui/button';
import { TbExternalLink } from 'react-icons/tb';
import Link from 'next/link';

interface StoreCardProps {
  storeName: string;
  storeUrl?: string;
}

export default function StoreCard(props: StoreCardProps) {
  const { storeName, storeUrl } = props;
  return (
    <div className='flex h-[300px] w-[300px] flex-col items-center justify-between rounded-md border border-gray-200 shadow-md'>
      <div className='bg-extends-brokenWhite flex h-full w-full items-center justify-center'>
        Image
      </div>
      <div className='flex h-full w-full flex-col items-center justify-center gap-4 bg-white'>
        <div className='text-extends-softGrey'>{storeName}</div>
        <div>Review</div>
        <Link href={storeUrl ?? '#'} className='w-[90%]'>
          <Button className='text-extends-purple hover:bg-extends-softPink w-full rounded-none border border-dashed border-slate-300 bg-white'>
            Visit <TbExternalLink size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
