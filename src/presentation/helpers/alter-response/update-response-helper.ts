export const updateDataResponse = (data: string): string => {
  const dataAndHours = data.split(' ')
  return dataAndHours[0]
}