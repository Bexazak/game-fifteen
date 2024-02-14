export function useTimeFormat(time) {
  const seconds = time % 60
  const minutes = Math.floor(time / 60)
  const hours = Math.floor(minutes / 60)

  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}