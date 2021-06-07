import { createClient } from 'contentful';
import Head from 'next/head';

export default function Recipes({ recipes }) {
  return (
    <>
      <Head>
        <title>Home | Recipe-app</title>
        <meta name='description' content='recipes homepage' />
      </Head>
      <div className='recipe-list'>Recipe List</div>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
  });
  const res = await client.getEntries({ content_type: 'recipe' });
  return {
    props: { recipes: res.items },
  };
}
