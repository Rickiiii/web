import Home from '@/pages/home'
import Tool from '@/pages/tool'
import Article from '@/pages/article'
import CreateArticle from '@/pages/createArticle'
import ArticleDetail from '@/pages/article/detail'

export const menuList = [{
  label: 'Home',
  link: 'home',
  component: Home,
}, {
  label: 'Tool',
  link: 'tool',
  component: Tool,
}, {
  label: 'Article',
  link: 'article',
  component: Article,
}]

export const unshowLink = [{
  label: 'ArticleDetail',
  link: 'articleDetail',
  component: ArticleDetail,
}]

export const personalLink = [{
  link: 'ricCreateArticle',
  component: CreateArticle,
}]