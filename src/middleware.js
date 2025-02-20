import { NextResponse } from 'next/server';

export function middleware(request) {
  const authToken = request.cookies.get('token')?.value;

  const protectedPaths = ['/products', '/products/add'];
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  if (!authToken && isProtectedPath) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/products/:path*',
    '/products/add',
  ]
};