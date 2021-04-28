import React from 'react'
import Resume from './components/Resume'
import Tools from './components/Tools'
import S from './index.less'

interface IProps {
  children: React.ReactNode;
}

const Layout = (props: IProps) => {

  return (
    <div className={S.container}>
      <div className={S.body}>
        <div className={S.leftResume}>
          <Resume />
        </div>
        <div className={S.content}>
          {props.children}
        </div>
        <div className={S.rightTools}>
          <Tools />
        </div>
      </div>
    </div>
  )
}

export default Layout