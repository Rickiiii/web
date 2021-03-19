import React from 'react'
import { IMenuList } from '../../inteface'
import S from './index.less'

interface IProps {
  data: IMenuList[]
}

const Menu: React.FC<IProps> = ({ data = [] }) => {
  return (
    <ul className={S.ul}>
      {
        data.map(item => (
          <li>
            <a href={item.route}>{item.label}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default Menu