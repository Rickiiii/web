import React from 'react'
import S from './index.less'

interface IProps {

}

const Header = (props: IProps) => {
  return (
    <div className={S.header}>
      <div className={S.logo} />
      {/* <Menu /> */}
      {/* <Search /> */}
      {/* <Avatar /> */}
    </div>
  )
}

export default Header