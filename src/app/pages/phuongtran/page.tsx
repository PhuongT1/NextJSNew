'use client';
import { Form, Input, Checkbox, Button } from 'antd';
import style from './login.module.scss';
// import useSWR from 'swr';

const Phuong = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  // const fetcher = () =>
  //   fetch(
  //     'http://3.34.3.172:8090/photoism/v1/admin/payment/find/top-up?size=10&page=1&sort=desc',
  //     {
  //       method: 'GET',
  //       headers: {
  //         Authorization:
  //           'Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE3MDA3MTUwMDcsImlhdCI6MTcwMDI4MzAwNywianRpIjoiYTkwNDhmZjUtZWNhMi00NWUxLTgyZjctMWExMTdmN2IxNGQ2IiwiaXNzIjoiREZJTEUiLCJhdWQiOiJERklMRSIsInN1YiI6ImFkbWluMTIzQGdtYWlsLmNvbSJ9.zzjekQYb4QwTK8Wfk2UQgfmwYwYazJGnY6mgb-o1pbw'
  //       }
  //     }
  //   ).then((res) => res.json());
  // const { data, error } = useSWR(
  //   'http://3.34.3.172:8090/photoism/v1/admin/payment/find/top-up?size=10&page=1&sort=desc',
  //   fetcher
  // );
  // console.log('data   ', data);
  return (
    <div className={style.loginForm}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={style.formLayer}
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Phuong;
