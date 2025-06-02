import React, { useState } from "react";
import SelectCategory from "./SelectCategory";
import SearchTitleAndCast from "./SearchTitleAndCast";
import * as TicketPages from "../style/TicketPageDesign";

const CategoryPage = () => {
  return (
    <div className="category">
      <TicketPages.SelectCategory>
        <SelectCategory />
      </TicketPages.SelectCategory>
      <TicketPages.SearchTitleAndCastDiv>
        <SearchTitleAndCast />
      </TicketPages.SearchTitleAndCastDiv>
    </div>
  );
};

export default React.memo(CategoryPage);
