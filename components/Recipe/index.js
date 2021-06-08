import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export default function Recipe({ recipe }) {
  const { cookingTime, featuredImage, ingredients, method, title } = recipe.fields;
  const { file } = featuredImage.fields;
  return (
    <>
      <div className='banner'>
        <Image
          src={`https:${file.url}`}
          width={file.details.image.width}
          height={file.details.image.height}
        />
        <h2>{title}</h2>
      </div>
      <div className='info'>
        <p>Tarda unos {cookingTime} mins en cocinarse.</p>
        <h3>Ingredientes: </h3>
        <ul>
          {ingredients.map(ing => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
      </div>
      <div className='method'>
        <h3>Método: </h3>
        <div>{documentToReactComponents(method)}</div>
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
