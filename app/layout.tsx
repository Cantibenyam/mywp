import './globals.css';
import { Metadata } from 'next';
import Footer from './components/footer';
import Header from './components/header';
import Navigation from './components/navigation';

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
        <main className="Folder">
          <div className="Tabs">
            <Navigation></Navigation>
          </div>
          <div className="Paper">{children}</div>
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
