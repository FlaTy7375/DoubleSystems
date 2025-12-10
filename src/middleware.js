import { NextResponse } from 'next/server';

const defaultLocale = 'ru';
const locales = ['ru', 'en'];

function getLocale(request) {
  return defaultLocale; 
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    
    request.nextUrl.pathname = `/${locale}${pathname}`;
    
    return NextResponse.redirect(request.nextUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next|admin|assets|images|favicon.ico|manifest.json|payload).*)',
  ],
};