import React, { useState } from 'react'
import { Input } from 'antd'
import BraftEditor from 'braft-editor'
import { ExtendControlType } from 'braft-editor'
import S from './index.less'
import 'braft-editor/dist/index.css'

const CreateArticle: React.FC = () => {

  const [editorValue, setEditorValue] = useState()
  const [title, setTitle] = useState('')

  // useEffect(() => {
  //   async function fetchData() {
  //     // Assume here to get the editor content in html format from the server
  //     const htmlContent = await fetchEditorContent()
  //     // Use BraftEditor.createEditorState to convert html strings to editorState data needed by the editor
  //     this.setState({
  //       editorState: BraftEditor.createEditorState(htmlContent)
  //     })
  //   }
    
  // }, [])

  const handleEditorChange = (value: any) => {
    setEditorValue(value)
  }

  const submitContent = async () => {
    // Pressing ctrl + s when the editor has focus will execute this method
    // Before the editor content is submitted to the server, you can directly call editorState.toHTML () to get the HTML content
    const htmlContent = (editorValue as any).toHTML()
    console.log(htmlContent)
    // const result = await saveEditorContent(htmlContent)
  }

  const extendControls: ExtendControlType[] = [
    'separator',
    {
        key: 'my-button', // 控件唯一标识，必传
        type: 'button',
        title: '提交', // 指定鼠标悬停提示文案
        className: 'my-button', // 指定按钮的样式名
        html: null, // 指定在按钮中渲染的html字符串
        text: 'Submit', // 指定按钮文字，此处可传入jsx，若已指定html，则text不会显示
        onClick: submitContent,
    }
]

  return (
    <div className={S.editorContainer}>
      <div className={S.title}>
        <span className={S.text}>标题：</span>
        <Input
          style={{ width: 'calc(100% - 45px)' }}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <BraftEditor
        value={editorValue}
        onChange={handleEditorChange}
        style={{ boxShadow: '0 8px 11px -3px rgba(10, 10, 10, 30%)' }}
        extendControls={extendControls}
      />
    </div>
  )
}

export default CreateArticle