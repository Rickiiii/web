import React, { useState } from 'react'
import cx from 'classnames'
import Header from './components/header'
import { menuList } from '@/constants'
import S from './index.less'

interface IProps {
  children: React.ReactNode;
}

const Layout = (props: IProps) => {

  const [showMenu, setShowMenu] = useState(false)
  const [paddingValue, setPaddingValue] = useState(0)

  const handleMenuClick = () => {
    const value = document.body.clientHeight * 0.1
    setPaddingValue(value)
    setShowMenu(!showMenu)
  }

  const handleClickContainer = () => {
    // 只在menu点开的状态下生效
    if (showMenu) {
      setShowMenu(!showMenu)
    }
  }

  const pathName = window.location.pathname.substr(1)

  return (
    <div className={S.wrapper}>
      <div
        className={cx(S.container, {
          [S.showMenu]: showMenu,
        })}
        // style={showMenu ? { height: document.body.clientHeight - paddingValue * 2 } : {}}
        onClick={handleClickContainer}
      >
        <Header handleMenuClick={handleMenuClick} />
        <div className={S.content}>
          {props.children}
        </div>
      </div>
      <div
        className={S.menu}
        style={showMenu ? { paddingTop: paddingValue, paddingBottom: paddingValue } : {}}
      >
        <ul>
          {
            menuList.map(item => (
              <li key={item.label}>
                <a
                  className={cx(S.label, {
                    [S.isChosen]: pathName === item.link
                  })}
                  href={item.link}
                >
                  {item.label}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Layout