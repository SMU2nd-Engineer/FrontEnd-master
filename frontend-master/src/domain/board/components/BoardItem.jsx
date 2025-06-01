import React from "react";
import { useNavigate } from "react-router-dom";

// DB에서 입력한 데이터를 카테고리, 제목, 날짜, 작성자 칼럼에 맞춰 한줄씩 출력함
const BoardItem = ({ item }) => {
  const navigate = useNavigate();
  // category_idx == '4002' ? '삽니다' : '팝니다'
  // get(객체), text(): 메서드 정의
  //console.log(typeof item.category_idx)
  const getText = (category_idx) => {
    switch (category_idx) {
      case 4001: // 잡담
        return "잡담";
      case 4002: // 삽니다
        return "삽니다";
      case 4003: // 팝니다
        return "팝니다";
      case 4004: // 기타
        return "기타";
      default:
        return category_idx;
    }
  };

  return (
    <tr key={item.idx} onClick={() => navigate(`/board/detail/${item.idx}`)}>
      <td id={`item-${item.idx}-idx`}>{item.idx}</td>
      <td id={`item-${item.idx}-category`}>{getText(item.category_idx)}</td>
      <td id={`item-${item.idx}-title`}>{item.title}</td>
      <td id={`item-${item.idx}-sdate`}>
        {(() => {
          const sdate = new Date(item.sdate);
          const today = new Date();

          const isToday =
            sdate.getFullYear() === today.getFullYear() &&
            sdate.getMonth() === today.getMonth() &&
            sdate.getDate() === today.getDate();

          return isToday
            ? item.sdate.slice(0, 16).replace("T", " ")
            : item.sdate.slice(0, 10);
        })()}
      </td>
      <td id={`item-${item.nickname}-title`}>{item.nickname}</td>
    </tr>
  );
};

export default BoardItem;
