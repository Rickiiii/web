import { arrayToObj } from '@/utils/util'

enum articleCategory {
  knowledgeNote = 1,
  praticleCourse,
  dryShare,
  afterLunch,
  superiorReprint,
}

export const articleCategoryList = [{
  label: '知识笔记',
  value: articleCategory.knowledgeNote,
}, {
  label: '实用教程',
  value: articleCategory.praticleCourse,
}, {
  label: '干货分享',
  value: articleCategory.dryShare,
}, {
  label: '茶余饭后',
  value: articleCategory.afterLunch,
}, {
  label: '优质转载',
  value: articleCategory.superiorReprint,
}]

export const articleCategoryObj = arrayToObj(articleCategoryList)