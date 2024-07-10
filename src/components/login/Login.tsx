import {FormDataType, ReduxLoginForm} from "./LoginForm";

type Props = {

};

export const Login = (props: Props) => {

    const onSubmitHandler = (formData: FormDataType) => {

    }

    return (
        <div style={{margin: '10%'}}>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmitHandler}/>
        </div>
    );
};