import Head from 'next/head';

import { client } from 'utils/contentfulClient';

import Recipe from 'components/Recipe';
import Skeleton from 'components/Skeleton';

export default function RecipeDetails({ recipe }) {
  if (!recipe) return <Skeleton />;

  const { title } = recipe.fields;

  return (
    <>
      <Head>
        <title>{title} | Recipe-app</title>
        <meta name='description' content='recipe details' />
      </Head>
      <Recipe recipe={recipe} />
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
  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const recipe = await client.getEntries({
    content_type: 'recipe',
    'fields.slug': slug,
  });
  return {
    props: { recipe: recipe.items[0] },
    revalidate: 1,
  };
}
