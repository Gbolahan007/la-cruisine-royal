import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      Layout
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
