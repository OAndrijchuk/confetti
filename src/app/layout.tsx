import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Confetti',
  description:
    'Tworzymy unikalne i niepowtarzalne dekoracje balonowe na imprezy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="text-main">{children}</body>
    </html>
  );
}
