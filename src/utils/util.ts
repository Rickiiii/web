export const arrayToObj = (arr: { label: string; value: number | string }[]) => {
  if (Array.isArray(arr) && arr.length > 0) {
    const returnObj: any = {}
    arr.forEach(item => {
      returnObj[item.value] = item.label
    })
    return returnObj
  } else {
    return {}
  }
}