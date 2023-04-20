const isError = (error: any | unknown): error is Error => {
  return !!error?.message
}
export default isError
