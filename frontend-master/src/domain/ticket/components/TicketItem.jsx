import React from "react";
import * as TicketPages from "../style/TicketPageDesign";

// 메모이제이션(React.memo는 props 변화에만 영향을 줌)
const TicketItem = React.memo(({ info, onClick }) => {
  return (
    <TicketPages.DataList onClick={() => onClick(info.idx)}>
      <TicketPages.TicketItemTextTitle>
        {info.title || info.name}
      </TicketPages.TicketItemTextTitle>
      <TicketPages.TicketItemTextCompany>
        - {info.company}
      </TicketPages.TicketItemTextCompany>
    </TicketPages.DataList>
  );
});

export default TicketItem;
