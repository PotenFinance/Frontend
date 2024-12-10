import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>포텐파이낸스</h1>
      </main>
      <footer></footer>
    </>
  );
}

export const getServerSideProps = async ({ req }: GetServerSidePropsContext) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return {
      redirect: {
        destination: '/begin',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
