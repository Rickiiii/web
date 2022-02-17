import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import ArticleCell from './components/articleCell';
import NavigateBar from './components/navigateBar';
import QueueAnim from 'rc-queue-anim';
import { Pagination, Spin } from 'antd';
import { OverPack } from 'rc-scroll-anim';
import { getData } from '@/utils';
import { IArticle } from './interface';
import { ILocation } from '@/interface';
import S from './index.less';

interface IProps extends ILocation {}

const Article: React.FC<IProps> = ({ location }) => {
  const [data, setData] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageConf, setPageConf] = useState({ page: 1, pageSize: 5, total: 0 });

  useEffect(() => {
    getList();
  }, []);

  const getList = (
    page = pageConf.page,
    pageSize = pageConf.pageSize,
    type: undefined | number = undefined,
  ) => {
    let newType = parseInt(location.query.type);
    if (typeof type === 'number') {
      newType = type;
    }
    setLoading(true);
    getData('http://localhost:7001/article/list', {
      page,
      pageSize,
      type: newType,
    })
      .then((res: any) => {
        if (res?.code === 0) {
          const { list, page, pageSize, total } = res?.data || {};
          setData(list);
          setPageConf({ page, pageSize, total });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChangePage = (page: number, pageSize: number) => {
    console.log(page, pageSize);
    setPageConf({ ...pageConf, page, pageSize });
    getList(page, pageSize);
  };

  const handleItemClick = (type: number) => {
    history.push(`/article?type=${type}`);
    getList(1, pageConf.pageSize, type);
  };

  return (
    <div className={S.articleContainer}>
      <header>
        <NavigateBar
          handleItemClick={handleItemClick}
          type={parseInt(location.query.type)}
        />
      </header>
      <Spin spinning={loading}>
        <div className={S.content} style={{ height: data.length * 248 }}>
          {data.map((item) => (
            <OverPack playScale={0.1} key={`${item.title}${item.time}`}>
              <QueueAnim type="bottom" key="ul" leaveReverse>
                <div
                  key={`${item.title}${item.time}`}
                  onClick={() => history.push(`/article/detail?id=${item.id}`)}
                >
                  <ArticleCell value={item} />
                </div>
              </QueueAnim>
            </OverPack>
          ))}
        </div>
      </Spin>
      <div className={S.paginationWrapper}>
        <Pagination
          total={pageConf.total}
          pageSize={pageConf.pageSize}
          current={pageConf.page}
          onChange={handleChangePage}
          pageSizeOptions={[5, 10, 20]}
          showSizeChanger
        />
      </div>
    </div>
  );
};

export default Article;
