import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(request: NextRequest) {
    const { isAuthenticated } = getKindeServerSession();
    if(!await isAuthenticated())
    {
        return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/dashboard', request.url))

    }
}

 
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard'],
}