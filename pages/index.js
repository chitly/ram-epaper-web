import Head from 'next/head';

import { Box, Flex, Text, Image } from '../components/Base';
import ImageForm from '../components/ImageForm';

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
            ระบบอัปโหลดรูปภาพสำหรับหน้าจออิเล็กทรอนิกส์
          </Text>
          <ImageForm />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
