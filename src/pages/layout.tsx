import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
