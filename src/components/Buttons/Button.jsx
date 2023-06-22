import './Button.css';
import Link from 'next/link';
export default function Button({ title, link }) {
  return (
    <Link href={link} className="button">
      {title}
    </Link>
  );
}
