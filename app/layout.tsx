import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "Nyam's Profile",
    template: "%s | Nyam's Profile",
  },
  description: 'my funky profile',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
