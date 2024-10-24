import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@radix-ui/react-separator';

export default function OrderSummary() {
  return (
    <div className='flex flex-col rounded-md border bg-white'>
      <div className='p-4'>Order Summary</div>
      <Separator className='w-full' />
      <Table>
        <TableHeader>
          <TableRow className='bg-slate-200'>
            <TableHead className='w-[50%] px-4 py-2 text-left'>
              PRODUCTS
            </TableHead>
            <TableHead className='w-[25%] px-4 py-2 text-left'>
              QUANTITY
            </TableHead>
            <TableHead className='w-[25%] px-4 py-2 text-center'>
              TOTAL
            </TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      <ScrollArea className='h-[200px] w-full'>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className='w-[50%] text-left font-medium'>
                INV001
              </TableCell>
              <TableCell className='w-[25%] text-left'>1</TableCell>
              <TableCell className='w-[25%] text-center'>Rp. 100.000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='w-[50%] text-left font-medium'>
                INV002
              </TableCell>
              <TableCell className='w-[25%] text-left'>2</TableCell>
              <TableCell className='w-[25%] text-center'>Rp. 200.000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='w-[50%] text-left font-medium'>
                INV002
              </TableCell>
              <TableCell className='w-[25%] text-left'>2</TableCell>
              <TableCell className='w-[25%] text-center'>Rp. 200.000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='w-[50%] text-left font-medium'>
                INV002
              </TableCell>
              <TableCell className='w-[25%] text-left'>2</TableCell>
              <TableCell className='w-[25%] text-center'>Rp. 200.000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='w-[50%] text-left font-medium'>
                INV002
              </TableCell>
              <TableCell className='w-[25%] text-left'>2</TableCell>
              <TableCell className='w-[25%] text-center'>Rp. 200.000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='w-[50%] text-left font-medium'>
                INV002
              </TableCell>
              <TableCell className='w-[25%] text-left'>2</TableCell>
              <TableCell className='w-[25%] text-center'>Rp. 200.000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ScrollArea>
      <Table>
        <TableBody>
          <TableRow className='font-bold'>
            <TableCell className='w-[50%] text-left'>TOTAL</TableCell>
            <TableCell className='w-[25%] text-left'>3</TableCell>
            <TableCell className='w-[25%] text-center'>Rp. 300.000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
