import { format, parse } from "date-fns"

/**
 * Return the current time as a timestamp with time-zone (timestamptz)
 * See https://www.postgresql.org/docs/9.1/datatype-datetime.html
 */
export function timestamptzNow() {
  return format(Date.now(), "yyyy-MM-dd'T'HH:mm:ss.SSSX")
}

export function dateFromTimestamptzNow(dateString: string) {
  return parse(dateString, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", new Date())
}

export function calculateSecondsLeft(startDate: Date, seconds: number) {
  const endInSeconds = startDate.getTime() / 1000 + seconds
  const nowInSeconds = new Date().getTime() / 1000
  return endInSeconds - nowInSeconds
}
