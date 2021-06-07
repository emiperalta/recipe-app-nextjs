import Image from 'next/image';
import Link from 'next/link';

export default function Recipe({ recipe }) {
  const { cookingTime, slug, thumbnail, title } = recipe.fields;
  const { file } = thumbnail.fields;
  return (
    <>
      <div className='card'>
        <section className='featured'>
          <Image src={`https:${file.url}`} width={550} height={450} />
        </section>
        <section className='content'>
          <div className='info'>
            <h4>{title}</h4>
            <p>Takes approx {cookingTime} mins to make</p>
          </div>
          <div className='actions'>
            <Link href={`/recipes/${slug}`}>
              <a>Cook this</a>
            </Link>
          </div>
        </section>
      </div>
      <style jsx>{`
        .card {
          transform: rotateZ(-1deg);
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          left: -10px;
          margin: 0;
          position: relative;
          top: -40px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          padding: 16px 24px;
          text-decoration: none;
          color: #fff;
          background-color: #f01b29;
          transition: background-color 0.3s ease;
        }
        .actions a:hover {
          background-color: #bb0915;
        }
      `}</style>
    </>
  );
}
