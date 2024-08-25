import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import img1 from '../../assets/img1.jpeg';

const Login = ({ onRegisterClick }) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row className="container" style={{ height: '100vh' }}>
      <Col span={12} style={{ backgroundColor: '#0D6EFD', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={img1} alt="Logo" style={{ width: '100%' }} />
      </Col>
      <Col span={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Form
          name="login"
         
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ width: '100%', maxWidth: '400px', padding: "30px",
            background: "#fff",
            borderRadius: "8px", // 'borderRadius' should be in camelCase
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.30)" }}
        >
          <h2 style={{ textAlign: 'center' }}>Login</h2>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
              Log in
            </Button>
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="/forgot-password" style={{ float: 'right' }}>
              Forgot password?
            </a>
            Or <a onClick={onRegisterClick}>register now!</a>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
