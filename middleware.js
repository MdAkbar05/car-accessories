import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import getAuthEmail from "./utils/getAuthToken";

export async function middleware(request) {
  // Read token stored by NextAuth in cookies
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Token contains user email
  const userEmail = token?.email;

  // admin email from env
  const adminEmail = getAuthEmail();

  // Your custom auth (e.g., match with backend email)
  const authEmail = userEmail === adminEmail; // Or compare with DB

  if (token) {
    if (authEmail) {
      return NextResponse.next();
    } else {
      const url = request.nextUrl.clone();
      url.pathname = "/unauthorized";
      return NextResponse.redirect(url);
    }
  } else {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: "/dashboard/:path*",
};
