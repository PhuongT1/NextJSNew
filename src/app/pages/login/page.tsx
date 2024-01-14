'use client';
import { Form, Input, Checkbox, Button } from 'antd';
import style from './login.module.scss';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import axios from 'axios';
import { type } from 'os';

export interface FormLogin {
  username: string;
  password: string;
  remember?: boolean;
}

export type Login = Omit<FormLogin, 'remember'>;
const Login = () => {
  const fetcher = (url: any, { arg }: { arg: Login }) => {
    return axios
      .post('http://3.34.3.172:8090/photoism/v1/login-admin', arg)
      .then((res) => res.data);
  };

  // const { data, error, isLoading, mutate } = useSWR(
  //   'login-admin',
  //   fetcher
  // );

  const { data, error, trigger, isMutating } = useSWRMutation(
    'login-admin',
    fetcher
  );

  console.log('data', data);

  const onFinish = (values: FormLogin) => {
    console.log('Success:', values);
    const { remember, ...rest } = values;
    trigger(rest);
  };

  return (
    <div className={style.loginForm}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={style.formLayer}
      >
        <Form.Item<FormLogin>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FormLogin>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FormLogin>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={isMutating}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
