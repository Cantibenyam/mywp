export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Nyam's profile</title>
        <meta name="description" content="This is Nyam's personal profile website"></meta>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
