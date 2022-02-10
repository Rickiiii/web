import React, { useEffect, useState } from 'react'
import CommentsSection from './components/commentsSection'
import { getData } from '@/utils'
import S from './index.less'

interface IProps {
  match: { params: { id: string, [propsName: string]: string } };
}

const defaultHtml = <p>123</p>

const Detail: React.FC<IProps> = ({ match }) => {

  const [htmlContent, setHtmlContent] = useState('<p>1234<p/>')

  // useEffect(() => {
  //   getData('http://127.0.0.1:7001/article/detail', {
  //     id: match.params.id,
  //   }).then((res: any) => {
  //     setHtmlContent(res.data || defaultHtml)
  //   })
  // }, [])

  return (
    <div className={S.articleDetailContainer}>
      <div className={S.content} dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <CommentsSection comments={[{ content: 1 }]}/>
    </div>
  )
}

export default Detail