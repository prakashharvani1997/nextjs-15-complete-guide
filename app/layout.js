import './globals.css'

export const metadata = {
  title: 'Nextjs-15 complete course',
  description: 'Nextjs-15 complete course app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
