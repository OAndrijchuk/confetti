import { Metadata } from 'next';
import { Bounce, ToastContainer } from 'react-toastify';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

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
      <body className="text-main">
        {children}
        <ToastContainer
          autoClose={4000}
          position="top-right"
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
