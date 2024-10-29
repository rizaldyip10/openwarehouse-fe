import { LoginForm } from './_components/login-form';

export default function SignInPage() {
  return (
    <div className='flex min-h-screen flex-grow items-center justify-center gap-5 bg-extends-bgDefault px-24 py-12'>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}
