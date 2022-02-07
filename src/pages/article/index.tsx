import React, { useEffect, useState } from 'react'
import ArticleCell from './components/articleCell'
import NavigateBar from './components/navigateBar';
import QueueAnim from 'rc-queue-anim';
import { Pagination } from 'antd'
import { OverPack } from 'rc-scroll-anim';
import { getData } from '@/utils'
import { IArticle } from './interface';
import S from './index.less'

interface IProps {}

const Article: React.FC<IProps> = () => {

  const [data, setData] = useState<IArticle[]>([])

  useEffect(() => {
    getData('http://127.0.0.1:7001/article/list').then((res: any) => {
      setData(res.data)
    })
  }, [])

  return (
    <div className={S.articleContainer}>
      <header>
        <NavigateBar />
      </header>
      <div className={S.content} style={{ height: data.length * 248 }}>
        {
          data.map(item => (
            <OverPack playScale={[0.2, 0.1]} key={`${item.title}${item.time}`}>
              <QueueAnim
                type="bottom"
                key="ul"
                leaveReverse
              >
                <div key={`${item.title}${item.time}`}>
                  <ArticleCell value={item} />
                </div>
              </QueueAnim>
            </OverPack>
          ))
        }
      </div>
      <div className={S.paginationWrapper}>
        <Pagination
          total={data.length}
          pageSize={5}
          defaultCurrent={1}
        />
      </div>
    </div>
  )
}

export default Article