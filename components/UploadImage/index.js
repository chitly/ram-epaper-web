import { Upload, message } from 'antd';

import { Text, Icon } from '../Base';
import Theme from '../Theme';

const { Dragger } = Upload;

const UploadImage = (props) => {
  return (
    <Dragger {...props} style={{ padding: 10 }}>
      <Text textStyles="h1" style={{ color: Theme.colors.primary }}>
        <Icon name={Icon.List.Inbox} />
      </Text>
      <Text textStyles="normal">
        คลิกเพื่อเลือกไฟล์ หรือลากไฟล์มาวางในบริเวณนี้
      </Text>
      <Text textStyles="small" style={{ color: Theme.colors.greyscale.grey2 }}>
        รองรับไฟล์รูปภาพขนาด aaa x bbb นามสกุล png เท่านั้น
      </Text>
    </Dragger>
  );
};

UploadImage.defaultProps = {
  name: 'imageFile',
  multiple: false,
  accept: 'image/*',
  action: '/api/upload',
  onChange(info) {
    const { status } = info.file;
    console.log('status', status);
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`อัปโหลดไฟล์ ${info.file.name} สำเร็จเรียบร้อย`);
    } else if (status === 'error') {
      message.error(`อัปโหลดไฟล์ ${info.file.name} ไม่สำเร็จ`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export default UploadImage;
