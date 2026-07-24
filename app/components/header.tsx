import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="NavigationHeader">
        <Link href="./">Home</Link>
        <nav>
          <ul>
            <li>
              <Link href="./projects"> Projects </Link>
            </li>
            <li>
              <Link href="./blog"> Blog </Link>
            </li>
            <li>
              <Link href="./contact"> Contact </Link>
            </li>
            <li>
              <Link href="./resume"> Resume </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
