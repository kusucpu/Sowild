import TopNav from '@/components/shared/TopNav';
import BottomNav from '@/components/shared/BottomNav';
import './globals.css';

export default function RootLayout({ children }) {
  // State untuk mengontrol visibilitas BottomNav
  // Ini perlu di-lift ke context provider agar bisa diakses global
  const [isBottomNavVisible, setIsBottomNavVisible] = React.useState(false);

  return (
    <html lang="en">
      <body>
        <TopNav onMenuClick={() => setIsBottomNavVisible(!isBottomNavVisible)} />
        <main>{children}</main>
        <BottomNav isVisible={isBottomNavVisible} />
      </body>
    </html>
  );
}
