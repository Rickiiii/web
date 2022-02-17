import React from 'react';
import cx from 'classnames';
import { articleCategoryList } from '../../constants';
import S from './index.less';

interface IProps {
  handleItemClick: (type: number) => void;
  type: number;
}

const NavigateBar: React.FC<IProps> = ({ handleItemClick, type }) => {
  return (
    <div className={S.navigateContainer}>
      <ul>
        {[{ label: '全部文章', value: 0 }]
          .concat(articleCategoryList)
          .map((item) => (
            <li
              key={item.value}
              style={{
                backgroundImage: `url(${require(`@/images/category/${
                  item.value || 0
                }.png`)})`,
              }}
              onClick={() => handleItemClick(item.value)}
            >
              <div className={cx(S.text, { [S.chosen]: type === item.value })}>
                {item.label}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NavigateBar;
