import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { sendPageViewEvent } from "./lib/ga"

const EXEMPTIONS = ["/_next", "/favicon.ico", "/site.webmanifest"]

const pathIsExempted = (pathname: string) =>
  EXEMPTIONS.some((path) => pathname.startsWith(path))

export function middleware(request: NextRequest) {
  if (!pathIsExempted(request.nextUrl.pathname)) {
    console.log("Intercepting route: ", request.nextUrl.pathname)
    sendPageViewEvent(request.url)
  }

  return NextResponse.next()
}
