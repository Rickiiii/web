import React from 'react'
import { articleCategoryList } from '../../constants'
import S from './index.less'

const NavigateBar: React.FC = () => {

  console.log(require(`@/images/category/1.png`), 'imgs')

  return (
    <div className={S.navigateContainer}>
      <ul>
        {[{ label: '全部文章', value: 0 }].concat(articleCategoryList).map(item => (
          <li
            key={item.value}
            style={{ backgroundImage: `url(${require(`@/images/category/${item.value || 0}.png`).default})` }}
          >
            <div className={S.text}>
              {item.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavigateBar