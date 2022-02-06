import React, { useEffect } from 'react'
import Comments from '@/components/comments'
import cx from 'classnames'
import lax from 'lax.js'
import S from './index.less'

interface IProps {
  
}

const Home: React.FC<IProps> = () => {

  useEffect(() => {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', () => window.scrollY)

    // Add animation bindings to elements
    lax.addElements('.lax1', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY+150", "elOutY"],
          [0, 0, 'screenWidth/5'],
        ],
        opacity: [
          ["elInY", "elCenterY+150", "elOutY"],
          [1, 1, 0],
        ]
      },
    })

    lax.addElements('.lax2', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY-120", "elOutY"],
          [0, 0, '-screenWidth/5'],
        ],
        opacity: [
          ["elInY", "elCenterY-120", "elOutY"],
          [1, 1, 0],
        ]
      },
    })

    lax.addElements('.lax3', {
      scrollY: {
        translateY: [
          ["elInY", "elCenterY-10+176", "elOutY"],
          [0, 0, '-screenHeight/4'],
        ],
        opacity: [
          ["elInY", "elCenterY-10+176", "elOutY"],
          [1, 1, 0],
        ]
      },
    })

    lax.addElements('.lax4', {
      scrollY: {
        translateY: [
          ["elInY", "elCenterY-10", "elOutY"],
          [0, 0, '-screenHeight/4'],
        ],
        opacity: [
          ["elInY", "elCenterY-10", "elOutY"],
          [1, 1, 0],
        ]
      },
    })
  }, [])

  return (
    <div className={S.homeContain}>
      <section className={S.intro}>
        <header>
          <h1 className="lax1">
            你好，
            <br />
            我是王瑞江，
            <br />
            一个自学者。
          </h1>
          <h2 className="lax2">爱好音乐、运动、游戏和编程。</h2>
          <div className={cx(S.slice, S.left, 'lax3')} />
          <div className={cx(S.slice, S.right, 'lax4')} />

        </header>
      </section>
      <div className={S.comments}>
        <p>写新留言</p>
        <Comments />
      </div>
    </div>
  )
}

export default Home