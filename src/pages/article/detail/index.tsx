import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import CommentsSection from './components/commentsSection';
import MDEditor from '@uiw/react-md-editor';
import { getData } from '@/utils';
import S from './index.less';

interface IProps {
  location: { query: { id: string; [propsName: string]: string } };
}

const Detail: React.FC<IProps> = (props) => {
  const [htmlContent, setHtmlContent] = useState('');
  const [title, setTitle] = useState('');
  const [comments, setComments] = useState<{ content: string }[]>([]);

  const { id } = props.location.query;

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = () => {
    getData('article/getOne', {
      id,
    }).then((res) => {
      if (res?.code === 0) {
        const { title: newTitle, content, comment } = res?.data || {};
        setHtmlContent(content);
        setTitle(newTitle);
        setComments(comment.map((i: string) => ({ content: i })));
      }
    });
  };

  const editArticle = () => {
    history.push(`/createArticle?id=${id}`);
  };

  return (
    <div className={S.articleDetailContainer}>
      <div className={S.contentSection}>
        <div className={S.articleContainer}>
          <h1 className={S.title} onDoubleClick={editArticle}>
            {title}
          </h1>
          <MDEditor.Markdown source={htmlContent} />
          {/* <div
            className={S.content}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          /> */}
        </div>
        <CommentsSection id={id} comments={comments} refresh={getArticle} />
      </div>
    </div>
  );
};

export default Detail;
