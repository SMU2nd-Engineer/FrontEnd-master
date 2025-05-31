import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchAllPage from '../page/SearchAllPage';

const SearchRoutes = () => {
  return (
    <div className="search">
      <Routes>
        <Route path="" element={<SearchAllPage />} />
      </Routes>
      
    </div>
  );
};

export default SearchRoutes;