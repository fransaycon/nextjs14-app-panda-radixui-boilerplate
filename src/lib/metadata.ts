import { Metadata } from "next"

export function createMetadata({
  title,
  description,
  link,
}: {
  title: string
  description: string
  link: string
}): Metadata {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ""),
    title,
    description,
    alternates: {
      canonical: link,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      shortcut: [
        {
          url: "/favicon.ico",
          type: "image/x-icon",
        },
      ],
      icon: [
        {
          url: `/favicon.ico`,
          type: "image/x-icon",
        },
        {
          url: `/favicon-32x32.png`,
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: `/favicon-16x16.png`,
          sizes: "16x16",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: `/apple-touch-icon.png`,
          sizes: "180x180",
        },
      ],
    },
    openGraph: {
      title,
      type: "article",
      siteName: "NextJS App Router + PandaCSS + RadixUI Boilerplate",
      description,
      url: link,
      images: [
        {
          url: `/social-preview.png`,
          alt: "NextJS App Router + PandaCSS + RadixUI Boilerplate",
        },
      ],
    },
    twitter: {
      card: "summary",
      site: "@ezu_xyz",
      title,
      description,
      images: [
        {
          url: `/social-preview.png`,
          alt: "NextJS App Router + PandaCSS + RadixUI Boilerplate",
        },
      ],
    },
    manifest: `/site.webmanifest`,
    other: {
      title,
      "mask-icon": `/safari-pinned-tab.svg" color="#5bbad5`,
      "msapplication-TileColor": "#da532c",
      "theme-color": "#ffffff",
    },
  }
}
