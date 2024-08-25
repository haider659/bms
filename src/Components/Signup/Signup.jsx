import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Steps } from 'antd';
import { UserOutlined, MailOutlined, IdcardOutlined, LockOutlined } from '@ant-design/icons';
import img from '../../assets/img.jpg'; // Assuming you have an image at this path
import Agreement from '../Signup/Agreement'; // Import your Agreement component

const { Step } = Steps;

const properties = {
  'Property A': {
    address: '123 Main St',
    city: 'New York',
    owner: 'John Doe',
    rent: '$1200',
    occupancy: 'Occupied',
  },
  'Property B': {
    address: '456 Elm St',
    city: 'Los Angeles',
    owner: 'Jane Smith',
    rent: '$1500',
    occupancy: 'Vacant',
  },
  'Property C': {
    address: '789 Oak St',
    city: 'Chicago',
    owner: 'Alice Johnson',
    rent: '$1000',
    occupancy: 'Occupied',
  },
};

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm(); // Form instance
  const [formValues, setFormValues] = useState({});
  const [selectedProperty, setSelectedProperty] = useState(''); // New state to keep track of selected property

  const onFinish = (values) => {
    console.log('Form Values: ', values);
    setFormValues({ ...formValues, ...values, propertyName: selectedProperty });
    if (currentStep < 4) {
      nextStep();
    }
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handlePropertyChange = (value) => {
    setSelectedProperty(value); // Update the selected property state
    const property = properties[value];
    if (property) {
      form.setFieldsValue({
        address: property.address,
        city: property.city,
        owner: property.owner,
        rent: property.rent,
        occupancy: property.occupancy,
      });
    }
  };

  const generateContract = () => {
    console.log('Contract generated with details: ', formValues);
    // Add contract generation logic here
  };

  return (
    <Row style={{ height: '100vh' }}>
      <Col span={12} style={{ backgroundColor: '#0D6EFD', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={img} alt="Illustration" style={{ width: '100%' }} />
      </Col>
      <Col span={12} style={{ padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Steps current={currentStep} style={{ marginBottom: '30px' }}>
          <Step title="Personal Details" />
          <Step title="Email Verification" />
          <Step title="Property Details" />
          <Step title="Review Details" />
          <Step title="Contract" />
        </Steps>

        <Form
          form={form} // Associate the form instance
          layout="vertical"
          onFinish={onFinish}
          style={{
            padding: '30px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.30)',
          }}
        >
          {currentStep === 0 && (
            <>
              <Form.Item
                name="fullName"
                label="Full Name"
                rules={[{ required: true, message: 'Please enter your full name!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="John Doe" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Please enter your email!' }]}
              >
                <Input prefix={<MailOutlined />} placeholder="email@example.com" />
              </Form.Item>
              <Form.Item
                name="unitId"
                label="Rental Unit ID"
                rules={[{ required: true, message: 'Please enter your rental unit ID!' }]}
              >
                <Input prefix={<IdcardOutlined />} placeholder="Rental Unit ID" />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: 'Please enter your password!' }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="Password" />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
              </Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Next
              </Button>
            </>
          )}

          {currentStep === 1 && (
            <>
              <Form.Item
                name="verificationCode"
                label="Verification Code"
                rules={[{ required: true, message: 'Please enter the verification code sent to your email!' }]}
              >
                <Input placeholder="Enter the code" />
              </Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Next
              </Button>
              <Button onClick={prevStep} style={{ width: '100%', marginTop: '10px' }}>
                Previous
              </Button>
            </>
          )}

          {currentStep === 2 && (
            <>
              <Form.Item
                name="propertyName"
                label="Property Name"
                rules={[{ required: true, message: 'Please select your property!' }]}
              >
                <Input
                  placeholder="Property Name"
                  onChange={(e) => handlePropertyChange(e.target.value)}
                  list="propertyList"
                />
                <datalist id="propertyList">
                  {Object.keys(properties).map((property) => (
                    <option key={property} value={property} />
                  ))}
                </datalist>
              </Form.Item>
              <Form.Item
                name="address"
                label="Address"
                rules={[{ required: true, message: 'Please enter the address!' }]}
              >
                <Input placeholder="Address" disabled />
              </Form.Item>
              <Form.Item
                name="city"
                label="City"
                rules={[{ required: true, message: 'Please enter the city!' }]}
              >
                <Input placeholder="City" disabled />
              </Form.Item>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[{ required: true, message: 'Please enter the owner name!' }]}
              >
                <Input placeholder="Owner" disabled />
              </Form.Item>
              <Form.Item
                name="rent"
                label="Rent"
                rules={[{ required: true, message: 'Please enter the rent amount!' }]}
              >
                <Input placeholder="Rent" disabled />
              </Form.Item>
              <Form.Item
                name="occupancy"
                label="Occupancy"
                rules={[{ required: true, message: 'Please enter the occupancy details!' }]}
              >
                <Input placeholder="Occupancy" disabled />
              </Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Next
              </Button>
              <Button onClick={prevStep} style={{ width: '100%', marginTop: '10px' }}>
                Previous
              </Button>
            </>
          )}

          {currentStep === 3 && (
            <Agreement
              
              prevStep={prevStep}
              generateContract={generateContract}
            />
          )}

          {currentStep === 4 && (
            <div>
              <h3>Contract Generation</h3>
              <p>Your contract has been generated. Please review it below.</p>
              {/* Add contract generation logic and display here */}
            </div>
          )}
        </Form>
      </Col>
    </Row>
  );
};

export default Signup;
