import React from 'react'
import { articleCategoryList } from '../../constants'
// @ts-ignore
import imgs from '@/images/category'
import S from './index.less'

const NavigateBar: React.FC = () => {

  console.log(imgs, 'imgs')

  return (
    <div className={S.navigateContainer}>
      <ul>
        {articleCategoryList.map(item => (
          // <img src='../../../../images/category/1.png' />
          <li
            key={item.value}
            style={{ backgroundImage: `url($)` }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavigateBar