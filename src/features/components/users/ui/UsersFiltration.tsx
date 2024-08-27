import { Field, Form, Formik } from 'formik';

type Props = {
    onFilterChange: (values: Values) => void; 
};

type Values = {
    userName: string;
    followed: boolean;
};

export const UsersFiltration = ({ onFilterChange }: Props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    userName: '',
                    followed: false,
                }}
                onSubmit={(values) => {
                    onFilterChange(values);
                }}
            >
                <Form>
                    <Field id="userName" name="userName" placeholder="Enter username" />
                    <label>
                        <Field type="checkbox" name="followed" />
                        Only those you follow
                    </label>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
