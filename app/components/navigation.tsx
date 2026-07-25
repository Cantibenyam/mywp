import Link from 'next/link';

export default function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/" className="Tab">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="Tab">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="Tab">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="Tab">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/resume" className="Tab">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
