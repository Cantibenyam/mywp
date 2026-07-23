import './globals.css';
import { Metadata } from 'next';
import Footer from './components/footer';
import Header from './components/header';

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
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
