import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormik } from 'formik';
import { UserPinValidationSchema } from '@/services/user/pin/schema';
import { useUserPin } from '@/services/user/pin/hooks/useUserPin';
import { useEffect, useState } from 'react';

interface UserPinProps {
  title: string;
}

export default function UserPin(props: UserPinProps) {
  const { title } = props;
  const { UserPinMutation, UserPinStatus } = useUserPin();
  const [isOpen, setIsOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      pin: '',
      confirmPin: '',
    },
    validationSchema: UserPinValidationSchema,
    onSubmit: (values) => {
      UserPinMutation(values.pin);
    },
  });

  useEffect(() => {
    if (UserPinStatus === 'success') {
      formik.resetForm();
      setIsOpen(false);
    }
  }, [UserPinStatus]);

  useEffect(() => {
    if (isOpen === false) {
      formik.resetForm();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsOpen(true)}
          className='bg-extends-purple text-white hover:bg-extends-secondaryPurple hover:text-white'
        >
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>User Pin</DialogTitle>
          <DialogDescription>Input your pin for transaction.</DialogDescription>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <div className='grid gap-6 py-4'>
            <div className='flex flex-col items-start gap-2'>
              <Label htmlFor='pin' className='text-right'>
                Pin
              </Label>
              <Input
                id='pin'
                name='pin'
                type='password'
                placeholder='******'
                className='col-span-3'
                value={formik.values.pin}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.pin && formik.errors.pin && (
                <div className='col-span-4 text-sm text-red-500'>
                  {formik.errors.pin}
                </div>
              )}
            </div>
            <div className='flex flex-col items-start gap-2'>
              <Label htmlFor='confirmPin' className='text-right'>
                Confirm Pin
              </Label>
              <Input
                id='confirmPin'
                name='confirmPin'
                type='password'
                placeholder='******'
                className='col-span-3'
                value={formik.values.confirmPin}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPin && formik.errors.confirmPin && (
                <div className='col-span-4 text-sm text-red-500'>
                  {formik.errors.confirmPin}
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button
              type='submit'
              disabled={UserPinStatus === 'pending'}
              className='mt-5 bg-extends-purple text-white hover:bg-extends-secondaryPurple hover:text-white'
            >
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
