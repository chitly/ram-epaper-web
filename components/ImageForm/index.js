import { Form, Input, Button } from 'antd';

import UploadImage from '../UploadImage';

const ImageForm = (props) => {
  return (
    <Form {...props}>
      <Form.Item label="เลขห้อง">
        <Form.Item name="roomId" noStyle>
          <Input size="large" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="รูปภาพ">
        <Form.Item name="image" noStyle>
          <UploadImage />
        </Form.Item>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 36, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          ยืนยันและอัปโหลด
        </Button>
      </Form.Item>
    </Form>
  );
};

ImageForm.defaultProps = {
  name: 'image-form',
  labelCol: { span: 6 },
  wrapperCol: { span: 36 },
  onFinish: (values) => {
    console.log('Received values of form: ', values);
  },
};

export default ImageForm;
