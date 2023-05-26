import { Header } from './components/header';
import { Footer } from './components/footer';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './features/user';

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('userArgentBank'));
    if (storageData && storageData.rememberMe) {
      dispatch(setUser(storageData));
    } else {
      localStorage.clear();
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
