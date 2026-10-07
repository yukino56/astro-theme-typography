/** Prefix local absolute URLs with the deployment base, without duplicating it. */
export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//'))
    return path

  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  if (path === base || path.startsWith(`${base}/`) || path.startsWith(`${base}?`) || path.startsWith(`${base}#`))
    return path

  return `${base}${path}`
}
