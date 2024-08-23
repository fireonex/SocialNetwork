import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin: 10% auto;
  width: 400px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const LoginTitle = styled.h2`
  font-size: 32px;
  font-family: 'IM FELL English', serif;
  margin-bottom: 20px;
  color: #3a3a3a;
`;

const FieldWrapper = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ErrorText = styled.div`
  color: #971f1f;
  margin-bottom: 10px;
  text-align: center;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

export const S = {
    LoginContainer, LoginTitle, FieldWrapper, ButtonWrapper, ErrorText, CheckboxWrapper
}
