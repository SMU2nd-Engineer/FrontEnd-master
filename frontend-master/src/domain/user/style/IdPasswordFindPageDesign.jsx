import styled from "styled-components";

export const FindBox = styled.div`
  max-width: 32rem;
  margin: 2.5rem auto 0;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FindHeading = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #f0b8b8;
  text-decoration: underline;
  text-underline-offset: 0.5rem;
`;

export const FindForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 10px;
  line-height: 3rem;
`;

export const FindFormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const FindLabel = styled.label`
  font-weight: bold;
`;

export const FindInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  font-size: 1rem;
  width: auto;
  height: 3rem;
`;

export const FindButton = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  width: 100%;
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const CancelButton = styled(FindButton)`
  background-color: #ff9a9a;
  margin-top: 0;
  &:hover {
    background-color: #fff;
    color: #ff9a9a;
  }
`;
