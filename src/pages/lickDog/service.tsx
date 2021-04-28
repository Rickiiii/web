import { getData } from '@/utils'

// 获取搜索字段
export async function getA(params?: Object) {
    const url = '127.0.0.1:7002/home/text';
    return getData(url, params)
}