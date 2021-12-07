import { Upload, message } from 'antd';

import { Text, Icon } from '../Base';
import Theme from '../Theme';

const { Dragger } = Upload;

const UploadImage = (props) => {
  const { filename, text, hintText, ...restProps } = props;
  const actionProp = { action: '/api/upload' };
  if (filename) {
    actionProp.action = `/api/upload/${filename}`;
  }
  return (
    <Dragger {...restProps} {...actionProp} style={{ padding: 10 }}>
      <Text textStyles="h1" style={{ color: Theme.colors.primary }}>
        <Icon name={Icon.List.Inbox} />
      </Text>
      <Text textStyles="normal">{text}</Text>
      <Text textStyles="small" style={{ color: Theme.colors.greyscale.grey2 }}>
        {hintText}
      </Text>
    </Dragger>
  );
};

UploadImage.defaultProps = {
  name: 'imageFile',
  multiple: false,
  accept: 'image/*',
  listType: 'picture',
  filename: null,
  text: 'คลิกเพื่อเลือกไฟล์ หรือลากไฟล์มาวางในบริเวณนี้',
  hintText: 'รองรับไฟล์ขนาด aaa x bbb นามสกุล png เท่านั้น',
  onChange: (info) => {
    const { status } = info.file;
    if (status === 'done') {
      message.success(`อัปโหลดไฟล์ ${info.file.name} สำเร็จเรียบร้อย`);
    } else if (status === 'error') {
      message.error(`อัปโหลดไฟล์ ${info.file.name} ไม่สำเร็จ`);
    }
  },
  onDrop: (e) => {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export default UploadImage;
