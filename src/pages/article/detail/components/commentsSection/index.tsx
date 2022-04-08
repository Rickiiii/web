import React, { useState } from 'react';
import { Comment, Avatar, Form, Button, List, Input, message } from 'antd';
import { postData } from '@/utils/request';
import moment from 'moment';
import S from './index.less';

const { TextArea } = Input;

interface IComments {
  content: React.ReactNode | string;
  [propsName: string]: any;
}

interface ICommentListProps {
  comments: IComments[];
}

const CommentList = ({ comments }: ICommentListProps) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

interface IEditorProps {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onSubmit: React.MouseEventHandler<HTMLElement> | undefined;
  submitting: boolean;
  value: string | undefined;
}

const Editor = ({ onChange, onSubmit, submitting, value }: IEditorProps) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        评论
      </Button>
    </Form.Item>
  </div>
);

interface ICommentsSectionProps {
  comments: IComments[];
  id: string;
  refresh: () => void;
}

const CommentsSection: React.FunctionComponent<ICommentsSectionProps> = ({
  comments,
  id,
  refresh,
}) => {
  const [value, setValue] = useState(undefined);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    postData('article/addComment', {
      id,
      comment: value,
    }).then((res) => {
      if (res?.code === 0) {
        message.success('评论成功');
        setValue(undefined);
        refresh();
      }
    });
  };

  return (
    <div className={S.commentsSectionContainer}>
      <h4>评论区（{comments?.length}条）</h4>
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    </div>
  );
};

export default CommentsSection;
