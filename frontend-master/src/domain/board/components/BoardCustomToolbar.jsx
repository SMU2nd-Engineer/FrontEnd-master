// BoardCustomToolbar.jsx
import React from 'react';

const BoardCustomToolbar = () => (
  <div id="toolbar">
    {/* 텍스트 크기 */}
    <span className="ql-formats">
      <select className="ql-size" defaultValue="small">
        <option value="small">Small</option>
        <option value="normal">Normal</option>
        <option value="large">Large</option>
        <option value="huge">Huge</option>
      </select>

      {/* (헤더)문단 - 제목 스타일 <h1>~<h6> */}
      <select className="ql-header" defaultValue="">
        <option value="">Normal</option>
        <option value="1">Header 1</option>
        <option value="2">Header 2</option>
        <option value="3">Header 3</option>
        <option value="4">Header 4</option>
        <option value="5">Header 5</option>
        <option value="6">Header 6</option>
      </select>

      {/* 정렬 */}
      <select className="ql-align" />
    </span>

    {/* 색상 설정 - 글자색, 텍스트 배경색 */}
    <span className="ql-formats">
      <select className="ql-color" />
      <select className="ql-background" />
    </span>

    {/* 텍스트 스타일 버튼들 (굵게,기울임,밑줄,취소선)*/}
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
    </span>

    {/* 순서 있는&없는 리스트, 문단 들여쓰기(증가+감소) */}
    <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
    </span>

    {/* 이미지 삽입 도구 */}
    <span className="ql-formats">
      <button className="ql-image" />
    </span>
  </div>
);

export default BoardCustomToolbar;
