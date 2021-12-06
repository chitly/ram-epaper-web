import Head from 'next/head';

import { Box, Flex, Text, Image } from '../components/Base';

const Home = () => {
  return (
    <Box p={4}>
      <Head>
        <title>{'Ram E-paper'}</title>
        <meta name="description" content="Ram E-paper" />
      </Head>
      <Flex justifyContent="center">Hello world</Flex>
    </Box>
  );
};

export default Home;
