import React, { memo } from 'react'
import S from './index.less'

const Comments = () => {
  return (
    <div className={S.content}>
      <form className={S.pannel}>
        <header>
          <div className={S.avatar} />
          <input
            name="author"
            type='text'
            placeholder='点击此处输入你的称呼'
            maxLength={10}
          />
        </header>
        <textarea
          name="comment"
          aria-required
          placeholder='你也来说两句吧！点击这里输入留言内容'
          maxLength={9999}
        />
        <div className={S.personalInfo}>
          <input
            name='url'
            type='text'
            placeholder='个人主页或微博网址'
            maxLength={99}
          />
          <button name='submit' type='submit'>保存</button>
        </div>
        <p>
          <strong>隐私说明：</strong>
          你的 IP 地址会被保存，但只会公开显示你当前所在的城市名。
        </p>
      </form>
    </div>
  )
}

export default memo(Comments)