import React from 'react'
import { Row, Col } from 'antd'
import { UnorderedListOutlined } from '@ant-design/icons';
import S from './index.less'

interface IProps {
  handleMenuClick: () => void;
}

const Header: React.FC<IProps> = ({ handleMenuClick }) => {

  const menuClick = () => {
    if (typeof handleMenuClick === 'function') {
      handleMenuClick()
    }
  }

  return (
    <div className={S.header}>
      <Row justify="space-between" className={S.row}>
        <Col span={1}>
          <a href='/home'>
            <div className={S.img} />
          </a>
        </Col>
        <Col span={1}>
          <UnorderedListOutlined className={S.icon} onClick={menuClick} />
        </Col>
      </Row>
    </div>
  )
}

export default Header