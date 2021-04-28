// https://v1.alapi.cn/api/dog?format=text
import React from 'react'
import { getA } from './service'

export default class LickDog extends React.PureComponent {
  state = {

  }

  componentDidMount() {
    getA().then(res => {
      console.log(res)
    })
  }

  render() {
    console.log('dog')
    return (
      <div>123</div>
    )
  }
}