import Image from 'next/image';

export default function Portrait() {
  return (
    <div className="portrait">
      <Image src="/images/cat.avif" width={120} height={200} alt="My portrait (Cat currently)" />
    </div>
  );
}
