'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormik } from 'formik';
import { signUpSchema } from '@/services/user/register/schema';
import { useUserRegister } from '@/services/user/register/hooks/useUserRegister';

export function RegisterForm() {
  const { UserRegisterMutation, UserRegisterStatus } = useUserRegister();

  const signUpFormik = useFormik({
    initialValues: {
      email: '',
      fullname: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signUpSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      UserRegisterMutation({
        email: values.email,
        fullname: values.fullname,
        password: values.password,
      });
    },
  });
  return (
    <Card className='mx-auto max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <form onSubmit={signUpFormik.handleSubmit}>
        <CardContent>
          <div className='grid gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                name='email'
                placeholder='m@example.com'
                onChange={signUpFormik.handleChange}
                onBlur={signUpFormik.handleBlur}
                value={signUpFormik.values.email}
              />
              {signUpFormik.errors.email ? (
                <Label className='text-red-500'>
                  {signUpFormik.errors.email}
                </Label>
              ) : null}
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='fullname'>Fullname</Label>
              </div>
              <Input
                id='fullname'
                type='fullname'
                name='fullname'
                placeholder='John Doe'
                onChange={signUpFormik.handleChange}
                onBlur={signUpFormik.handleBlur}
                value={signUpFormik.values.fullname}
              />
              {signUpFormik.errors.fullname ? (
                <Label className='text-red-500'>
                  {signUpFormik.errors.fullname}
                </Label>
              ) : null}
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
              </div>
              <Input
                id='password'
                type='password'
                name='password'
                placeholder='******'
                onChange={signUpFormik.handleChange}
                onBlur={signUpFormik.handleBlur}
                value={signUpFormik.values.password}
              />
              {signUpFormik.errors.password ? (
                <Label className='text-red-500'>
                  {signUpFormik.errors.password}
                </Label>
              ) : null}
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='confirmPassword'>Confirm Password</Label>
              </div>
              <Input
                id='confirmPassword'
                type='password'
                name='confirmPassword'
                placeholder='******'
                onChange={signUpFormik.handleChange}
                onBlur={signUpFormik.handleBlur}
                value={signUpFormik.values.confirmPassword}
              />
              {signUpFormik.errors.confirmPassword ? (
                <Label className='text-red-500'>
                  {signUpFormik.errors.confirmPassword}
                </Label>
              ) : null}
            </div>
            <Button
              type='submit'
              disabled={UserRegisterStatus === 'pending'}
              className='bg-extends-purple hover:bg-extends-secondaryPurple'
            >
              Login
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Already register??{' '}
            <Link
              href='/signin'
              className='text-extends-purple hover:underline'
            >
              Sign in
            </Link>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}
