// A path segment like `0.25.1` — three dot-separated numbers. Enough to tell a
// version segment apart from `guide`, `overview`, `latest`, etc.
export default function isSemVer(value: string): boolean {
  const parts = value.split('.')
  return parts.length === 3 && parts.every(part => part !== '' && Number.isInteger(Number(part)))
}
