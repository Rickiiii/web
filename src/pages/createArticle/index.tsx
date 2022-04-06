import React, { useState, useEffect } from 'react';
import { Input, Select, message, Button } from 'antd';
import { history } from 'umi';
import { articleCategoryList } from '../article/constants';
import LabelCell from './components/labelCell';
import SelectTag from './components/selectTag';
import { postData, getData } from '@/utils';
import { ILocation } from '@/interface';
import MDEditor from '@uiw/react-md-editor';

import S from './index.less';

interface IProps extends ILocation {}

const CreateArticle: React.FC<IProps> = ({ location }) => {
  const [editorValue, setEditorValue] = useState();
  const [title, setTitle] = useState('');
  const [type, setType] = useState(1);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const {
      query: { id },
    } = location;
    if (id) {
      getData('article/getOne', {
        id,
      }).then((res: any) => {
        if (res?.code === 0) {
          const {
            title: newTitle,
            content,
            tags: newTags,
            type: newType,
          } = res?.data || {};
          setEditorValue(content);
          setTitle(newTitle);
          setType(newType);
          setTags(JSON.parse(newTags));
        }
      });
    }
  }, []);

  const handleEditorChange = (value: any) => {
    console.log(value);
    setEditorValue(value);
  };

  const submitContent = async () => {
    const {
      query: { id },
    } = location;
    const params = {
      id: id || undefined,
      title,
      type,
      tags: JSON.stringify(tags),
      content: editorValue,
    };
    postData(`article/${id ? 'update' : 'create'}`, params).then((res: any) => {
      if (res?.code === 0) {
        message.success(id ? '编辑成功' : '创建成功');
        history.push('/article');
      }
    });
    console.log(params, 'params');
  };

  return (
    <div className={S.editorContainer}>
      <LabelCell label="标题">
        <Input
          style={{ width: 'calc(100% - 45px)' }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </LabelCell>
      <LabelCell label="类型">
        <Select
          style={{ width: 300 }}
          value={type}
          onChange={(value) => setType(value)}
        >
          {articleCategoryList.map((item) => (
            <Select.Option key={item.value} value={item.value}>
              {item.label}
            </Select.Option>
          ))}
        </Select>
      </LabelCell>
      <LabelCell label="标签">
        <SelectTag tags={tags} setTags={setTags} />
      </LabelCell>
      <div className={S.editContainer}>
        <div className={S.submit}>
          <Button type="primary" onClick={submitContent}>
            Submit
          </Button>
        </div>
        <MDEditor
          height={600}
          value={editorValue}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default CreateArticle;
