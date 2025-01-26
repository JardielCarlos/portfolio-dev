import { differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInSeconds, differenceInYears } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

/**
 * Convert a date to a relative time string, such as
 * "a minute ago", "in 2 hours", "yesterday", "3 months ago", etc.
 * using Intl.RelativeTimeFormat
 */
export function getRelativeTimeString(
  date: Date | number,
): string {
  const now = new Date()
  const targetDate = toZonedTime(new Date(date), 'UTC')

  const years = differenceInYears(now, targetDate)
  const totalMonths = differenceInMonths(now, targetDate)
  const months = totalMonths % 12
  const days = differenceInDays(now, targetDate) - (totalMonths * 30)
  const hours = differenceInHours(now, targetDate) % 24
  const minutes = differenceInMinutes(now, targetDate) % 60
  const seconds = differenceInSeconds(now, targetDate) % 60

  let result = ""

  if (years > 1) {
    result += `${years} anos`
  } else if (years === 1) {
    result += `1 ano`
  }

  if (months > 1) {
    if (result) result += ' e '
    result += `${months} meses`
  } else if (months === 1) {
    if (result) result += ' e '
    result += `1 mês`
  }

  if (!result) {
    if (days > 0) {
      result += `${days} dias`
    } else if (hours > 0) {
      result += `${hours} horas`
    } else if (minutes > 0) {
      result += `${minutes} minutos`
    } else {
      result += `${seconds} segundos`
    }
  }

  return result
}
