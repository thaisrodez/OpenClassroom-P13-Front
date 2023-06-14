import { Header } from './components/header';
import { Footer } from './components/footer';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from './features/user';

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    let storageData =
      localStorage.getItem('userArgentBank') ||
      sessionStorage.getItem('userArgentBank');
    if (storageData) {
      storageData = JSON.parse(storageData);
      dispatch(setUser(storageData));
      dispatch(setToken(storageData.token));
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
