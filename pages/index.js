import Head from 'next/head';

import { Box, Flex, Text, Image } from '../components/Base';

const Home = () => {
  return (
    <Box p={4}>
      <Head>
        <title>{'โรงพยาบาลรามคำแหง - Ramkhamhaeng Hospital'}</title>
        <meta name="description" content="Ramkhamhaeng Hospital" />
      </Head>
      <Flex justifyContent="center">Hello world</Flex>
    </Box>
  );
};

export default Home;
