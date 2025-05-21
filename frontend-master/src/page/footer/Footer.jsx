import React from 'react';
import { NavLink } from 'react-router-dom';
import { Divider } from '@chakra-ui/react'

const Footer = () => {
  return (
     <nav className="footer-nav">
      <div className="ftMenu">
        <NavLink
          to="/company"
          style={({ isActive }) => (isActive ? selectedStyle : undefined)}
        >
          {" "}
          회사소개{" "}
        </NavLink>
        <span> | </span>
        <NavLink
          to="/service"
          style={({ isActive }) => (isActive ? selectedStyle : undefined)}
        >
          {" "}
          이용약관{" "}
        </NavLink>
        <span> | </span>
        <NavLink
          to="/service-police"
          style={({ isActive }) => (isActive ? selectedStyle : undefined)}
        >
          {" "}
          운영정책{" "}
        </NavLink>
        <span> | </span>
        <NavLink
          to="/privacy"
          style={({ isActive }) => (isActive ? selectedStyle : undefined)}
        >
          {" "}
          개인정보처리방침{" "}
        </NavLink>
        <span> | </span>
        <NavLink
          to="/youth-policy"
          style={({ isActive }) => (isActive ? selectedStyle : undefined)}
        >
          {" "}
          청소년보호정책{" "}
        </NavLink>
        <span> | </span>
        <NavLink
          to="/partner"
          style={({ isActive }) => (isActive ? selectedStyle : undefined)}
        >
          {" "}
          광고제휴{" "}
        </NavLink>
      </div>
      <div className="chakra-divider">
        <Divider orientation='horizontal'/>
      </div>
      <div className="ft-column">
        <div className='left-column'>
          <h2 className='ft-h2'>팀 소개를 해보도록 합시다</h2>
          <div className='team-About'>
            <p></p>
          </div>
        </div>
        <div className='right-column'>
          <h2 className='ft-h2'> 멤버</h2>
          <div className='member'>
            <p>한경민</p>
            <p>오택률</p>
            <p>방미선</p>
            <p>이가현</p>
            <p>추가연</p>
            <p>권라엘</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;