type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[]
  gtag: (...args: any[]) => void
}

declare const window: WindowWithDataLayer

export const sendPageViewEvent = (url: string): void => {
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    return
  }

  if (
    !window ||
    typeof window.dataLayer === "undefined" ||
    typeof window.gtag === "undefined"
  ) {
    console.log({
      event: "config",
      page: url,
    })
  } else {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}
