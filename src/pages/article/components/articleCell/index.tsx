import React, { EventHandler } from 'react';
import { IArticle } from '../../interface';
import { history } from 'umi';
import { articleCategoryObj } from '../../constants';
import S from './index.less';

interface IProps {
  value: IArticle;
}

const Cell: React.FC<IProps> = ({
  value: { title, content, type, time, commentsNum },
}) => {
  const handleCateClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    history.push(`/article?type=${type}`);
  };

  return (
    <div className={S.articleCellContainer}>
      <div className={S.leftImg}>
        <div className={S.category} onClick={handleCateClick}>
          {(articleCategoryObj as any)?.[type]}
        </div>
        <img
          src="https://unpkg.zhimg.com/hassan-assets/img/cover_IELTS_notes.png"
          alt="404"
        />
      </div>
      <div className={S.rightContent}>
        <div className={S.title}>{title}</div>
        <div className={S.content}>{content}</div>
        <div className={S.bottom}>
          <span className={S.time}>{time}</span>
          <span className={S.commentsNum}>{commentsNum}条评论</span>
        </div>
      </div>
    </div>
  );
};

export default Cell;
