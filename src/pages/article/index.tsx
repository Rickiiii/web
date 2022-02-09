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

const defaultData = [{
    id: 1,
    type: 1,
    title: 'Gravatar 头像不显示了',
    content: '好久没写文章，收到留言然后进入博客看看，发现头像显示不出来，不知道是不是gravatar被墙了，修改下。在 config.inc.php 添加：defin...',
    time: '2022-01-21',
   commentsNum: 10,
   img: require('../../images/alien.jpg'),
 }, {
   id: 2,
   type: 2,
   title: 'Gravatar 头像不显示了',
   content: '好久没写文章，收到留言然后进入博客看看，发现头像显示不出来，不知道是不是gravatar被墙了，修改下。在 config.inc.php 添加：defin...',
   time: '2022-01-22',
   commentsNum: 10,
   img: require('../../images/alien.jpg'),
 }, {
   id: 3,
   type: 3,
   title: 'Gravatar 头像不显示了',
   content: '好久没写文章，收到留言然后进入博客看看，发现头像显示不出来，不知道是不是gravatar被墙了，修改下。在 config.inc.php 添加：defin...',
   time: '2022-01-23',
   commentsNum: 10,
   img: require('../../images/alien.jpg'),
 }, {
   id: 4,
   type: 4,
   title: 'Gravatar 头像不显示了',
   content: '好久没写文章，收到留言然后进入博客看看，发现头像显示不出来，不知道是不是gravatar被墙了，修改下。在 config.inc.php 添加：defin...',
   time: '2022-01-24',
   commentsNum: 10,
   img: require('../../images/alien.jpg'),
 }, {
   id: 5,
   type: 5,
   title: 'Gravatar 头像不显示了',
   content: '好久没写文章，收到留言然后进入博客看看，发现头像显示不出来，不知道是不是gravatar被墙了，修改下。在 config.inc.php 添加：defin...',
   time: '2022-01-25',
   commentsNum: 10,
   img: require('../../images/alien.jpg'),
 }]

const Article: React.FC<IProps> = () => {

  const [data, setData] = useState<IArticle[]>(defaultData)

  useEffect(() => {
    getData('http://127.0.0.1:7001/article/list').then((res: any) => {
      setData(res.data || defaultData)
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