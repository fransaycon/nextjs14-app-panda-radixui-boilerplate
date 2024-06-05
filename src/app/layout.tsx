import React from "react"
import { Poppins } from "next/font/google"
import "../styles/global.css"
import { createMetadata } from "@/lib/metadata"

interface RootLayoutProps {
  children: React.ReactNode
}

const poppins = Poppins({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
})

export const metadata = createMetadata({
  title: "A @fransaycon Boilerplate",
  description: "NextJS App Router + PandaCSS + RadixUI Boilerplate",
  link: "/",
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <main className={poppins.className}>{children}</main>
      </body>
    </html>
  )
}
