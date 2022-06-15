export function parseName(input: string, secondInput?: string): string {
  if (secondInput)
    input += `/${secondInput}`

  input = input.toLowerCase()

  const inputArray = input.split(' ')

  return `zabiegi/${inputArray.join('_')}`
}
