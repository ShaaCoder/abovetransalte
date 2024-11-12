import { NextResponse } from 'next/server';
import { parse } from 'cookie';

export function middleware(req) {
  const cookies = parse(req.headers.get('cookie') || '');
  const authToken = cookies.authToken;

  // Check if the user is authenticated
  if (!authToken && req.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login if not authenticated
  }

  return NextResponse.next(); // Proceed if authenticated or on login page
}
