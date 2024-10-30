'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const orders = [
  {
    orderId: 'ORD001',
    productTitle: 'Wireless Headphones',
    deliveryMethod: 'Express',
    date: '2024-10-25',
    status: 'Shipped',
    paymentMethod: 'Credit Card',
    totalAmount: '$150.00',
  },
  {
    orderId: 'ORD002',
    productTitle: 'Smartphone Case',
    deliveryMethod: 'Standard',
    date: '2024-10-20',
    status: 'Pending',
    paymentMethod: 'PayPal',
    totalAmount: '$20.00',
  },
  {
    orderId: 'ORD003',
    productTitle: 'Laptop Stand',
    deliveryMethod: 'Express',
    date: '2024-10-18',
    status: 'Delivered',
    paymentMethod: 'Bank Transfer',
    totalAmount: '$75.00',
  },
  {
    orderId: 'ORD004',
    productTitle: 'Wireless Mouse',
    deliveryMethod: 'Standard',
    date: '2024-10-22',
    status: 'Delivered',
    paymentMethod: 'Credit Card',
    totalAmount: '$25.00',
  },
  {
    orderId: 'ORD005',
    productTitle: 'Bluetooth Speaker',
    deliveryMethod: 'Express',
    date: '2024-10-24',
    status: 'Shipped',
    paymentMethod: 'PayPal',
    totalAmount: '$50.00',
  },
  {
    orderId: 'ORD006',
    productTitle: 'Portable Charger',
    deliveryMethod: 'Standard',
    date: '2024-10-19',
    status: 'Pending',
    paymentMethod: 'Bank Transfer',
    totalAmount: '$30.00',
  },
  {
    orderId: 'ORD007',
    productTitle: 'Smartwatch',
    deliveryMethod: 'Express',
    date: '2024-10-21',
    status: 'Shipped',
    paymentMethod: 'Credit Card',
    totalAmount: '$100.00',
  },
];

export default function TableDemo() {
  return (
    <div className='rounded-md bg-extends-brokenWhite p-2'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Order ID</TableHead>
            <TableHead>Product & Title</TableHead>
            <TableHead>Delivery Method</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead className='text-right'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='bg-white'>
          {orders.map((order) => (
            <TableRow key={order.orderId} className='border-b-2 border-dashed'>
              <TableCell className='font-medium'>{order.orderId}</TableCell>
              <TableCell>{order.productTitle}</TableCell>
              <TableCell>{order.deliveryMethod}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.paymentMethod}</TableCell>
              <TableCell className='text-right'>{order.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
