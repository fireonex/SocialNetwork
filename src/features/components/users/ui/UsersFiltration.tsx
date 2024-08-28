import { Formik, Field, Form } from 'formik';
import { StyledButton } from "../../../../common/commonComponents/antdComponents/StyledButton";
import styled from 'styled-components';
import { CustomInput } from "../../../../common/commonComponents/antdComponents/CustomInput";

type Props = {
    onFilterChange: (values: Values) => void;
};

type Values = {
    userName: string;
    followed: boolean;
};

export const UsersFiltration = ({ onFilterChange }: Props) => {
    return (
        <FiltrationContainer>
            <Formik
                initialValues={{
                    userName: '',
                    followed: false,
                }}
                onSubmit={(values) => {
                    onFilterChange(values);
                }}
            >
                {({ values, handleChange }) => (
                    <StyledForm>
                        <FieldWrapper>
                            <Field
                                id="userName"
                                name="userName"
                                as={CustomInput}
                                value={values.userName}
                                onChange={handleChange}
                                placeholder="Enter username"
                            />
                        </FieldWrapper>
                        <CheckboxWrapper>
                            <label>
                                <StyledCheckboxWrapper>
                                    <Field type="checkbox" name="followed" />
                                    <Checkmark />
                                </StyledCheckboxWrapper>
                                <span>Only those you follow</span>
                            </label>
                        </CheckboxWrapper>
                        <ButtonWrapper>
                            <StyledButton htmlType="submit">Find</StyledButton>
                        </ButtonWrapper>
                    </StyledForm>
                )}
            </Formik>
        </FiltrationContainer>
    );
};

// Стилизация контейнера для всей формы
const FiltrationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

// Стилизация формы
const StyledForm = styled(Form)`
    display: flex;
    gap: 15px;
    align-items: center;
`;

// Стилизация для обертки поля ввода
const FieldWrapper = styled.div`
    flex-grow: 1;
`;

// Стилизация для чекбокса
const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    label {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;

// Стилизация самого чекбокса и кастомного чекмарка
const StyledCheckboxWrapper = styled.div`
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
    
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    input:checked + span {
        background: linear-gradient(90deg, #5F888A 0%, #9BB6B3 100%);
    }

    input:checked + span:after {
        display: block;
    }
`;

const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: #eaeaea;
    border-radius: 4px;
    border: 2px solid #cccccc;
    transition: all 150ms;
    
    &:after {
        content: "";
        position: absolute;
        display: none;
        left: 7px; 
        top: 3px;   
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
`;



// Стилизация для обертки кнопки
const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`;
