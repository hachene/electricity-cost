export const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICS_CCLH_MEASUREMENT_ID || 'DUMMY-MEASUREMENT-ID'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}

type GTagEvent = {
  action: string
  category: string
  label: string
  value: number
}
