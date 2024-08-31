export function validateEmail(value: string) {
  return /\S+@\S+\.\S+/.test(value)
}

export function validatePhone(value: string) {
  return /^\d{10,11}$/.test(value)
}