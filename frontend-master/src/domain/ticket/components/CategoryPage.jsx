import React, { useState } from "react";
import SelectCategory from "./SelectCategory";
import SearchTitleAndCast from "./SearchTitleAndCast";
import * as TicketPages from "../style/TicketPageDesign";

const CategoryPage = ({ setSelectedIds, setSearchTerm }) => {
  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <div className="category">
      <TicketPages.SelectCategory>
        <SelectCategory onChange={setSelectedIds} />
      </TicketPages.SelectCategory>
      <TicketPages.SearchTitleAndCastDiv>
        <SearchTitleAndCast onSearch={handleSearch} />
      </TicketPages.SearchTitleAndCastDiv>
    </div>
  );
};

export default CategoryPage;
