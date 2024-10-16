import React from 'react';
import { Select } from 'antd';

const SearchSelect = ({ options, placeholder, width = '100%' }) => {
  return (
    <Select
      showSearch
      style={{
        width: width,
      }}
      placeholder={placeholder}
      optionFilterProp="label"
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={options}
    />
  );
};

export default SearchSelect;
