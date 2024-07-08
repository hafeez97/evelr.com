// app/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    if (pathname === '/') {
        return NextResponse.rewrite(new URL('/home', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/',
};
