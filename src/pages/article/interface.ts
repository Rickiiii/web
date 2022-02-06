export interface IArticle {
  id: number;
  type: number; // 文章类型 1知识笔记 2实用教程 3干货分享 4茶余饭后 5优质转载
  time: string;
  title: string;
  content: string;
  commentNum: number;
  img: string;
}