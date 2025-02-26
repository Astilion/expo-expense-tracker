/**
 * Returns a new Date that is the specified number of days before the input date
 * @param date The starting date
 * @param days The number of days to subtract
 * @returns A new Date object
 */
export function getDateMinusDays(date: Date, days: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
