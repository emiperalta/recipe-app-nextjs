import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/'), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Error | Recipe-app</title>
        <meta name='description' content='not found error' />
      </Head>
      <div className='not-found'>
        <h1>404</h1>
        <h2>Ooops! That page cannot be found :/</h2>
        <p>
          Redirecting to the <Link href='/'>Homepage</Link> for more recipes...
        </p>
      </div>
      <style jsx>{`
        .not-found {
          background-color: #fff;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          margin: 20px auto;
          max-width: 800px;
          padding: 30px;
          text-align: center;
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 4.5rem;
        }
      `}</style>
    </>
  );
}
