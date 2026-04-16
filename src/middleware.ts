import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the homepage and the about page
  if (pathname === '/' || pathname === '/about') {
    return NextResponse.next();
  }

  // We rewrite the request to a non-existent path so that Next.js 
  // automatically handles it with its default 404 Not Found page
  // while keeping the original URL in the user's browser.
  return NextResponse.rewrite(new URL('/404', request.url));
}

// The matcher ensures middleware is only triggered on document pathways
// and ignored for static files, APIs, and Next.js internal calls.
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
