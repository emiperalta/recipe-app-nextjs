import Head from 'next/head';

import { client } from 'utils/contentfulClient';

export default function RecipeDetails({ recipe }) {
  console.log(recipe);
  return (
    <>
      <Head>
        <title>Details | Recipe-app</title>
        <meta name='description' content='recipe details' />
      </Head>
      <div>Recipe Details</div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'recipe' });
  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const recipe = await client.getEntries({
    content_type: 'recipe',
    'fields.slug': slug,
  });
  return {
    props: { recipe: recipe.items[0] },
  };
}
