import {Alert} from "antd";

type Props = {
    message: string;
};


export const ErrorNotification = ({message}: Props) => {
    return (
        <Alert
            message={message}
            type="error"
            showIcon
            closable
        />
    );
};




