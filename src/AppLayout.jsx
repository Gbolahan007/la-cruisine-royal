import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Cart from './cart/cart';

function AppLayout() {
  return (
    <div>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Cart />
      <Footer />
    </div>
  );
}

export default AppLayout;
