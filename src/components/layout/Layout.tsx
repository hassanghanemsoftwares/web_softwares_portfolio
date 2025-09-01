import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react";
import { useHome } from "@/hooks/usePublicData";
import StaticFullPageSpinner from "../StaticFullPageSpinner";

export function Layout() {

  const { pathname } = useLocation();
  const { data: settingsData, isLoading } = useHome();

  const configurations = settingsData?.configurations || [];

  const theme_color1 = configurations.find(item => item.key === 'theme_color1')?.value;
  const theme_color2 = configurations.find(item => item.key === 'theme_color2')?.value;
  useEffect(() => {
    const element = document.getElementById('root');
    element?.scrollIntoView({ behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    if (theme_color1) {
      document.documentElement.style.setProperty('--color-primary', theme_color1);
    }
    if (theme_color2) {
      document.documentElement.style.setProperty('--color-secondary', theme_color2);
    }
  }, [theme_color1, theme_color2]);
  if (isLoading) {
    return <StaticFullPageSpinner />;
  }
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
