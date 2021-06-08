import Head from 'next/head';

import { client } from 'utils/contentfulClient';

import RecipeCard from 'components/RecipeCard';

export default function Recipes({ recipes }) {
  return (
    <>
      <Head>
        <title>Inicio | Recipe-app</title>
        <meta name='description' content='recipes homepage' />
      </Head>
      <div className='recipe-list'>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
        ))}
      </div>
      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 20px 60px;
        }
        @media screen and (min-width: 600px) {
          .recipe-list {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: 'recipe' });
  return {
    props: { recipes: res.items },
    revalidate: 1,
  };
}
