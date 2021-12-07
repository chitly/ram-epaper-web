import Head from 'next/head';

import { Box, Flex, Text, Image } from '../components/Base';
import UploadImage from '../components/UploadImage';

const Home = () => {
  return (
    <Box p={4}>
      <Head>
        <title>{'โรงพยาบาลรามคำแหง - Ramkhamhaeng Hospital'}</title>
        <meta name="description" content="Ramkhamhaeng Hospital" />
      </Head>
      <Flex justifyContent="center">
        <Flex flexDirection="column" alignItems="center">
          <Image
            src="/logo/full-no-white.png"
            alt="Ramkhamhaeng Hospital"
            width={300}
          />
          <Text textStyles="h3">
            ระบบอัพโหลดรูปภาพสำหรับหน้าจออิเล็กทรอนิกส์
          </Text>
          <UploadImage />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
