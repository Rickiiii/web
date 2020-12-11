import { render } from '@testing-library/react'
import React from 'react'
import Header from './components/header'

interface IProps {

}

const Layout = (props: IProps) => {
  return (
    <Header />
  )
}

export default Layout