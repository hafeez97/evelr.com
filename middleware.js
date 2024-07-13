// app/middleware.js
import { NextResponse } from 'next/server';


export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Exclude _next and public assets
    if (pathname.startsWith('/_next') || pathname.startsWith('/assets') || pathname.startsWith('/favicon.ico')) {
        return NextResponse.next();
    }

    // Redirect root path to /home
    if (pathname === '/') {
        return NextResponse.rewrite(new URL('/home', request.url));
    }

    // Dynamic handling for paths to redirect to /home/[path]
    if (!pathname.startsWith('/home')) {
        return NextResponse.rewrite(new URL(`/home${pathname}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/:path*'],
};
