import React from 'react';
import { NavLink } from 'react-router-dom';
import { Divider } from '@chakra-ui/react'
import * as F from "../../style/FooterDesign"
import { FaGithubSquare } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

const Footer = () => {
  return (
     <F.Footer_nav>
      <div className="navigation">
      <div className="ftMenu">
          {/* {" "} */}
          회사소개{" "}
        <span> | </span>
          {" "}
          이용약관{" "}
        <span> | </span>
          {" "}
          운영정책{" "}
        <span> | </span>
          {" "}
          개인정보처리방침{" "}
        <span> | </span>
          {" "}
          청소년보호정책{" "}
        <span> | </span>
          {" "}
          광고제휴{" "}
      </div>
      <F.HorizontalDivider />
      <div className="ft-column">
        <div className='left-column'>
          <h2 className='ft-h2'></h2>
          <div className='team-About'>
            <a href="https://github.com/SMU2nd-Engineer" >
              <FaGithubSquare size={35} color="#5d2279" />
            </a> <br />
            <F.Reference>
              <div className="tickets">
                <a href="https://ticket.interpark.com/"
                   target="_blank"
                   rel="noopener noreferrer" >
                  {" "}
                  <IoTicketOutline size={25} color="#5d6dff"/>
                  <span className="interpark">Interpark </span>
                  {" "} 
                </a> <br />
                <a href="https://www.ticketlink.co.kr/home"
                   target="_blank"
                   rel="noopener noreferrer">
                  {" "}
                  <IoTicketOutline size={25} color="#fa3131" />
                  <span className="ticketlink">Ticketlink </span>
                  {" "}
                </a> <br />
                <a href="https://ticket.melon.com/main/index.htm"
                   target="_blank"
                   rel="noopener noreferrer" >
                  {" "}
                  <IoTicketOutline size={25} color="#41D26B" />
                  <span className="melonticket">MelonTicket</span>
                </a><br />
              </div>
              <div className="markets">
                <a href="https://m.bunjang.co.kr/"
                   target="_blank"
                   rel="noopener noreferrer">
                  {" "}
                  <TiShoppingCart size={25} color="#000000" />
                  <span className="ticketlink">번개장터 </span>
                  {" "}
                </a><br />
                <a href="https://kream.co.kr/" 
                   target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <TiShoppingCart size={25} color="#000000" />
                  <span className="ticketlink">Kream </span>
                  {" "}
                </a>
                <a href=""></a>
              </div>
            </F.Reference>
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
      </div>
    </F.Footer_nav>
  );
};

export default Footer;