import  withAuth  from "next-auth/middleware"


export function middleware(request ) {
    if (request.nextUrl.pathname.startsWith("/create")){
        return withAuth(request)
    }
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/:path*',
};