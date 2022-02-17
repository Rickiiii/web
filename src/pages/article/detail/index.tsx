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

  useEffect(() => {
    getData('http://127.0.0.1:7001/article/getOne', {
      id: props.location.query.id,
    }).then((res: any) => {
      if (res?.code === 0) {
        const { title: newTitle, content } = res?.data || {};
        setHtmlContent(content);
        setTitle(newTitle);
      }
    });
  }, []);

  const editArticle = () => {
    history.push(`/createArticle?id=${props.location.query.id}`);
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
        <CommentsSection comments={[{ content: 1 }]} />
      </div>
    </div>
  );
};

export default Detail;
