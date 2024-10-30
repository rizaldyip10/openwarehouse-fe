// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Tentukan rute yang ingin Anda proteksi
const protectedRoutes = ['/dashboard', '/profile'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('acctkn')?.value;

  console.log(token);

  // if (
  //   !token &&
  //   protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  // ) {
  //   const loginUrl = new URL('/login', request.url);
  //   return NextResponse.redirect(loginUrl);
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
