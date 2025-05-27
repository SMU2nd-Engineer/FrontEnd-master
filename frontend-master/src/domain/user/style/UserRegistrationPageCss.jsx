import styled from "styled-components";

export const RegistFormContainer = styled.div`
  width: 100%;
`;

export const RegistFormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`;

export const RegistInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RegistStyledInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid ${({ $error }) => ($error ? "#e53e3e" : "#ddd")};
  border-radius: 5px;
  font-size: 1rem;
`;

export const RegistHelperText = styled.p`
  font-size: 0.875rem;
  margin-top: 0.25rem;
  color: ${({ color }) => color || "#555"};
`;

export const RegistFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RegistFormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RegistFormError = styled.span`
  font-size: 0.875rem;
  color: #e53e3e;
  margin-top: 0.25rem;
`;

export const RegistStyledButtonWrapper = styled.div`
  width: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegistHelperMessage = styled.p`
  font-size: 0.875rem;
  margin-top: 0.25rem;
  height: 0.875rem;
  color: ${({ color }) => color || "#555"};
`;
