import { render } from '@testing-library/react'
import React from 'react'
import Resume from './components/Resume'
import S from './index.less'

interface IProps {

}

const Layout = (props: IProps) => {
  return (
    <div className={S.container}>
      <div className={S.body}>
        <div className={S.leftResume}>
          <Resume />
        </div>
        <div className={S.content}></div>
        <div className={S.rightNavigator}></div>
      </div>
    </div>
  )
}

export default Layout