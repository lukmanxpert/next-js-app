import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const userInfo = {
    role: "user",
};
const isServicePage = request.nextUrl.pathname.startsWith("/services");
const isAdmin = userInfo.role === 'admin'
  if (isServicePage && !isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/services/:path*',
// }
