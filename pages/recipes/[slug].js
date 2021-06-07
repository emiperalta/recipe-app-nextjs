import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from 'next/head';
import Image from 'next/image';

import { client } from 'utils/contentfulClient';

export default function RecipeDetails({ recipe }) {
  const { cookingTime, featuredImage, ingredients, method, title } = recipe.fields;
  const { file } = featuredImage.fields;
  return (
    <>
      <Head>
        <title>{title} | Recipe-app</title>
        <meta name='description' content='recipe details' />
      </Head>
      <div>
        <div className='banner'>
          <Image
            src={`https:${file.url}`}
            width={file.details.image.width}
            height={file.details.image.height}
          />
          <h2>{title}</h2>
        </div>
        <div className='info'>
          <p>Take about {cookingTime} mins to cook.</p>
          <h3>Ingredients: </h3>
          <ul>
            {ingredients.map(ing => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
        </div>
        <div className='method'>
          <h3>Method: </h3>
          <div>{documentToReactComponents(method)}</div>
        </div>
      </div>
      <style jsx>{`
        h2,
        h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
        }
        .info p {
          margin: 0;
        }
        .info li {
          margin-bottom: 5px;
        }
        .method div {
          line-height: 1.9rem;
        }
      `}</style>
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
