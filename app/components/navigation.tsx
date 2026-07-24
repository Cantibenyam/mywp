import Link from 'next/link';

export default function Navigation() {
  return (
    <div>
      <nav>
        <ul className="tabItems">
          <li className="Tab">
            <Link href="/">Home</Link>
          </li>
          <li className="Tab">
            <Link href="/projects"> Projects </Link>
          </li>
          <li className="Tab">
            <Link href="/blog"> Blog </Link>
          </li>
          <li className="Tab">
            <Link href="/contact"> Contact </Link>
          </li>
          <li className="Tab">
            <Link href="/resume"> Resume </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
