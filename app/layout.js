import AOSInitializer from './components/AOSInitializer';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Microdose Muse',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AOSInitializer/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
