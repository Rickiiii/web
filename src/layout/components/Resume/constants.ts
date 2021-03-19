import { IMenuList } from '../../inteface'

export const OTHER_WEB_NAVIGATOR = [
  {
    link: 'https://blog.csdn.net/WonderGlans?spm=1008.2028.3001.5343',
    logo: '../../../images/avatar.jpg',
    toolTipText: 'CSDN',
  }
]

export const MENU: IMenuList[] = [
  {
    label: '首页',
    route: '/index',
  },
  {
    label: '逛逛',
    children: [
      {
        label: '文章',
        route: '/article',
      },
      {
        label: 'todoList',
        route: '/todo'
      }
    ],
  },
  {
    label: '舔狗日记',
    route: '/lickDog',
  }
]