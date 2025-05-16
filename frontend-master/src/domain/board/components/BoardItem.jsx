import React from "react";
 
// DB에서 입력한 데이터를 카테고리, 제목, 날짜, 작성자 칼럼에 맞춰 한줄씩 출력함
const BoardItem = ({ item }) => {
  return (
      <tr key={item.idx}>
        <td id={`item-${item.idx}-idx`}>{item.idx}</td>
        <td id={`item-${item.idx}-division`}>{item.division}</td>
        <td id={`item-${item.idx}-title`}>{item.title}</td>
        <td id={`item-${item.idx}-sdate`}>{item.sdate}</td>
        <td id={`item-${item.nickname}-title`}>{item.nickname}</td>
      </tr>
  );
};

export default BoardItem;