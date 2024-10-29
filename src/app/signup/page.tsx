import { RegisterForm } from './_components/register-form';

export default function SignUpPage() {
  return (
    <div className='flex min-h-screen flex-grow items-center justify-center gap-5 bg-extends-bgDefault px-24 py-12'>
      <RegisterForm />
    </div>
  );
}
