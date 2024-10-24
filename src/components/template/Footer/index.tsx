import { Button } from '@/components/ui/button';
import { FaTwitter, FaFacebook, FaGooglePlusG } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-extends-darkNavy divide-y px-4 text-white'>
      <div className='container mx-auto flex flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0'>
        <div className='lg:w-1/3'>
          <a
            rel='noopener noreferrer'
            href='#'
            className='flex justify-center space-x-3 lg:justify-start'
          >
            <div className='flex h-12 w-12 items-center justify-center rounded-full dark:bg-violet-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                fill='currentColor'
                className='h-5 w-5 flex-shrink-0 rounded-full'
              >
                <path d='M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z'></path>
              </svg>
            </div>
            <div>
              <div className='self-center text-2xl font-semibold'>
                Brand name
              </div>
              <div className='text-extends-softGrey w-[400px] self-center text-left'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
            </div>
          </a>
        </div>
        <div className='grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4 lg:w-2/3'>
          <div className='space-y-3'>
            <h3 className='uppercase tracking-wide'>Product</h3>
            <ul className='text-extends-softGrey space-y-1'>
              <li className='hover:text-white hover:underline'>
                <a rel='noopener noreferrer' href='#'>
                  Features
                </a>
              </li>
              <li className='hover:text-white hover:underline'>
                <a rel='noopener noreferrer' href='#'>
                  Integrations
                </a>
              </li>
              <li className='hover:text-white hover:underline'>
                <a rel='noopener noreferrer' href='#'>
                  Pricing
                </a>
              </li>
              <li className='hover:text-white hover:underline'>
                <a rel='noopener noreferrer' href='#'>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h3 className='uppercase tracking-wide'>Company</h3>
            <ul className='text-extends-softGrey space-y-1'>
              <li className='hover:text-white hover:underline'>
                <a rel='noopener noreferrer' href='#'>
                  Privacy
                </a>
              </li>
              <li className='hover:text-white hover:underline'>
                <a rel='noopener noreferrer' href='#'>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h3 className='uppercase'>Developers</h3>
            <ul className='text-extends-softGrey space-y-1'>
              <li className='hover:text-white hover:underline'>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:text-white hover:underline'
                >
                  Public API
                </a>
              </li>
              <li className='hover:text-extends-softGrey hover:underline'>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:text-white hover:underline'
                >
                  Documentation
                </a>
              </li>
              <li className='hover:text-extends-softGrey hover:underline'>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:text-white hover:underline'
                >
                  Guides
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <div className='uppercase'>Contact Us</div>
            <div className='text-extends-softGrey'>
              1884 George Avenue Mobile, AL 36603
            </div>
            <div className='flex justify-start space-x-3'>
              <Button
                variant='outline'
                className='border-extends-softGrey bg-extends-darkNavy flex h-10 w-10 items-center justify-center self-center rounded-full'
              >
                <FaFacebook />
              </Button>
              <Button
                variant='outline'
                className='border-extends-softGrey bg-extends-darkNavy flex h-10 w-10 items-center justify-center self-center rounded-full'
              >
                <FaTwitter />
              </Button>
              <Button
                variant='outline'
                className='border-extends-softGrey bg-extends-darkNavy flex h-10 w-10 items-center justify-center self-center rounded-full'
              >
                <FaGooglePlusG />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='py-6 text-center text-sm'>
        © 1968 Company Co. All rights reserved.
      </div>
    </footer>
  );
}
