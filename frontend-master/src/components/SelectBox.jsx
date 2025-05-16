import { getCategory } from '@/services/Category';
import React, { useEffect, useState } from 'react';

const SelectBox = ({id, name, category_idx, handleChange = f => f}) => {
  const [options, setOptions] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  useEffect(()=> {
    getCategory(category_idx)
      .then((res) => res.data)
      .then((data) => setOptions(data))
  },[])

  return (
    <select
            id={id}
            name={name}
            value={selectValue}
            onChange={(e)=> {
              handleChange(e)
              setSelectValue(e.target.value)
            }}
          >
          <option value="">선택하세요</option>
          {
            options.map((option)=> 
            <option key={option.sub_idx} value={option.sub_idx}>
              {option.categoryName}
            </option>)
          }
    </select>
  );
};

export default SelectBox;