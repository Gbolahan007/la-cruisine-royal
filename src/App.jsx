import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AppLayout from './AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Reservation from './pages/Reservation';
import PageNotFound from './pages/PageNotFound';
import Menu from './pages/Menu';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import MenuDetail from './features/menu/MenuDetail';
import ScrollToTop from './ScrollToTop';
import ItemDetail from './ItemDetail';
import { Toaster } from 'react-hot-toast';
import { ModalProvider } from './contexts/ModalContexts';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ModalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="/home" />} />

              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/services" element={<Services />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:slug" element={<MenuDetail />} />
              <Route path="/menu/:category/:slug" element={<ItemDetail />} />

              <Route path="/reservation" element={<Reservation />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              background: '#4CAF50',
              color: '#FFFFFF',
            },
          },
          error: {
            duration: 5000,
            style: {
              background: '#D32F2F', // Red background for error
              color: '#FFFFFF', // White text for error
            },
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            background: '#222222', // Default background
            color: '#E0E0E0', // Default text color
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
