import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  width: 100%;
  background-color: #fff; /* белый фон для формы */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* легкая тень для формы */
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ErrorWrapper = styled.div`
  color: #971f1f;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > b {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const S = {
    Container, ButtonWrapper, ErrorWrapper, FieldWrapper, ContactsWrapper, FormWrapper
}