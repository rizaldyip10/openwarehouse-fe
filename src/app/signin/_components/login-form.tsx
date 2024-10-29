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
import { signInSchema } from '@/services/user/login/schema';
import { useUserLogin } from '@/services/user/login/hooks/useUserLogin';
import useStore from '@/zustand';

export function LoginForm() {
  const { UserLoginMutation, UserLoginLoading } = useUserLogin();
  const signInFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      UserLoginMutation({
        email: values.email,
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
      <form onSubmit={signInFormik.handleSubmit}>
        <CardContent>
          <div className='grid gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                name='email'
                placeholder='m@example.com'
                onChange={signInFormik.handleChange}
                onBlur={signInFormik.handleBlur}
                value={signInFormik.values.email}
              />
              {signInFormik.errors.email ? (
                <Label className='text-red-500'>
                  {signInFormik.errors.email}
                </Label>
              ) : null}
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
                {/* <Link href='#' className='ml-auto inline-block text-sm underline'>
                Forgot your password?
              </Link> */}
              </div>
              <Input
                id='password'
                type='password'
                name='password'
                placeholder='******'
                onChange={signInFormik.handleChange}
                onBlur={signInFormik.handleBlur}
                value={signInFormik.values.password}
              />
              {signInFormik.errors.password ? (
                <Label className='text-red-500'>
                  {signInFormik.errors.password}
                </Label>
              ) : null}
            </div>
            <Button
              type='submit'
              disabled={UserLoginLoading}
              className='bg-extends-purple hover:bg-extends-secondaryPurple'
            >
              Login
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Don&apos;t have an account?{' '}
            <Link href='#' className='text-extends-purple hover:underline'>
              Sign up
            </Link>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}
