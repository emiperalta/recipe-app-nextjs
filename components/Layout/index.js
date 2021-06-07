import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <header>
        <Link href='/'>
          <a>
            <h1>
              <span>Solo come</span>
              <span>Milanesas</span>
            </h1>
            <h2>Difunde la alegría</h2>
          </a>
        </Link>
      </header>
      <div className='page-content'>{children}</div>
      <footer>
        <p>Copyright 2021 - Milanesas :)</p>
      </footer>
    </div>
  );
}
