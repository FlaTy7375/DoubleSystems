// middleware.js

import { NextResponse } from 'next/server';

const defaultLocale = 'ru';
const locales = ['ru', 'en'];

function getLocale(request) {
  // Ваша логика определения локали (пользователь, заголовок и т.д.)
  return defaultLocale; 
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Если локаль не найдена, перенаправляем на локаль по умолчанию.
  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    
    // Перенаправляем с / на /ru, сохраняя остальной путь.
    // Например: /about-us -> /ru/about-us
    request.nextUrl.pathname = `/${locale}${pathname}`;
    
    // Используем rewrite вместо redirect, если вы хотите, чтобы URL в строке оставался без локали,
    // но внутренне обрабатывался локализованным макетом. 
    // Однако, для простоты и соответствия вашей логике смены языка (в LanguageContext), 
    // часто лучше использовать redirect для явного префикса в URL.
    return NextResponse.redirect(request.nextUrl);
  }
  
  // Если локаль присутствует, продолжаем выполнение
  return NextResponse.next();
}

export const config = {
  // 🚀 ИСПРАВЛЕННЫЙ ПАТТЕРН MATCHER
  matcher: [
    /*
     * Соответствует всем путям запроса, кроме тех, что начинаются с:
     * - /api (API-маршруты)
     * - /_next (Внутренние файлы Next.js)
     * - /admin (Админка Payload) 👈 КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ
     * - /assets, /images, /payload (Ваши статичные ресурсы и группы маршрутов, которые не должны быть локализованы)
     * - Файлы (.ico, .json и т.д.)
     */
    '/((?!api|_next|admin|assets|images|favicon.ico|manifest.json|payload).*)',
  ],
};