import {Form, Input, Button} from 'antd';
import './Login_Fom.css';

const Login_Form = () => {
    const onFinish = (e) => {
        console.log(e);
    }

    return (
        <div className='login_form'>
            <h2>Login Form</h2>
            <Form onFinish={onFinish}>
                <Form.Item  label="User Name"   name="user_name">
                <Input placeholder='user name' required></Input>
                </Form.Item>
                <Form.Item  label="Password"   name="password">
                <Input.Password placeholder='password' required></Input.Password>
                </Form.Item>
                <Form.Item>
                <Button type='primary' htmlType='submit' block >Login</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login_Form;