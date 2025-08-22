import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react";


export function Layout() {

  const { pathname } = useLocation();

  useEffect(() => {
    const element = document.getElementById('root');
    element?.scrollIntoView({ behavior: 'smooth' });
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
