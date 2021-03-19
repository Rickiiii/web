import React, { Component } from 'react'
import { MENU } from './constants'
import Menu from '../Menu'
import S from './index.less'

interface IProps {

}

interface IState {

}

export default class Resume extends Component<IProps, IState> {
  state = {

  }

  render() {
    return (
      <div className={S.container}>
        <div className={S.body}>
          <div className={S.header}>
            <div className={S.introduce}>
              <div className={S.avatar} />
              <div className={S.introduceText}>
                <h1>Ricki</h1>
                <p>Ricki的个人博客</p>
              </div>
            </div>
          </div>
          <div className={S.menu}>
            <Menu data={MENU} />
          </div>
        </div>
      </div>
    )
  }
}