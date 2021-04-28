import React, { Component } from 'react'
import { TOOLS_LIST } from './constants'
import S from './index.less'

interface IProps {

}

interface IState {
    list: number[]
}

export default class Resume extends Component<IProps, IState> {
  state = {
    list: [],
  }

  getData = () => {
    return new Promise((reject) => {
        reject('aa')
    })
  }

  render() {
      console.log(this.state)
    return (
      <div className={S.container}>
          <div className={S.header}>
              小工具/小玩意
          </div>
          <div className={S.body}>
            {
                TOOLS_LIST.map(item => (
                    <div className={S.item} key={item.route}>
                        {item.name}
                    </div>
                ))
            }
          </div>
      </div>
    )
  }
}