import Image from 'next/image';
import Navigation from './navigation';

export default function Portrait() {
  return (
    <div>
      <Image src="/images/cat.avif" width={120} height={200} alt="My portrait (Cat currently)" />
    </div>
  );
}
