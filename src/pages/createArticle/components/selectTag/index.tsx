import React, { useState } from 'react';
import { Tag, AutoComplete, Card } from 'antd';
import { ILabelValue } from '@/interface';
import { deepCloneByJson } from '@/utils/util';
import debounce from 'lodash/debounce';
import S from './index.less';

interface ISelectTagProps {
  tags: string[];
  setTags: (tags: string[]) => void;
}

const SelectTag: React.FunctionComponent<ISelectTagProps> = ({
  tags,
  setTags,
}) => {
  const [options, setOptions] = useState<ILabelValue[]>([]);

  const onSearch = (value: string) => {
    const newOptions = deepCloneByJson(options);
    newOptions.shift();
    if (!newOptions.map((i) => i.value).includes(value)) {
      newOptions.push({ label: value, value: value });
      setOptions(newOptions);
    }
  };

  const onSelect = (value: string) => {
    const newTags = deepCloneByJson(tags);
    newTags.push(value);
    setTags(newTags);
  };

  const debounceSearch = debounce((value: string) => onSearch(value), 300);

  return (
    <div className={S.selectTagContainer}>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={debounceSearch}
        placeholder="input here"
        backfill
      />
      <Card style={{ width: 300, marginTop: 20 }}>
        {tags.map((item) => (
          <Tag style={{ marginBottom: 10 }}>{item}</Tag>
        ))}
      </Card>
    </div>
  );
};

export default SelectTag;
