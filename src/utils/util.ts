// 数组转化成对象
export const arrayToObj = (
  arr: { label: string; value: number | string }[],
) => {
  if (Array.isArray(arr) && arr.length > 0) {
    const returnObj: any = {};
    arr.forEach((item) => {
      returnObj[item.value] = item.label;
    });
    return returnObj;
  } else {
    return {};
  }
};

// JSON的深拷贝方法
export function deepCloneByJson<T>(data: T): T {
  if (typeof data !== 'object') {
    return {} as T;
  } else {
    return JSON.parse(JSON.stringify(data));
  }
}
