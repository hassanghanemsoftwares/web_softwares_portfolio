import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route as ReactRouterRoute,
  Navigate
} from 'react-router-dom';
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/layout/Layout";
import { lazy } from "react";

const NotFoundError = lazy(() => import('./features/Errors/NotFoundError'));
const Home = lazy(() => import("./features/Home"));
const About = lazy(() => import("./features/About"));
const Services = lazy(() => import("./features/Services"));
const Projects = lazy(() => import("./features/Projects"));
const Contact = lazy(() => import("./features/Contact"));
const Privacy = lazy(() => import("./features/Privacy"));
const Terms = lazy(() => import("./features/Terms"));
const Reviews = lazy(() => import("./features/Reviews"));


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />


        <BrowserRouter>
          <ReactRouterRoutes>
            <ReactRouterRoute path="/home" element={<Navigate to="/" replace />} />
            <ReactRouterRoute element={<Layout />}>
              <ReactRouterRoute index path="/" element={<Home />} />
              <ReactRouterRoute path="/about" element={<About />} />
              <ReactRouterRoute path="/services" element={<Services />} />
              <ReactRouterRoute path="/projects" element={<Projects />} />
              <ReactRouterRoute path="/contact" element={<Contact />} />
              <ReactRouterRoute path="/privacy" element={<Privacy />} />
              <ReactRouterRoute path="/terms" element={<Terms />} />
              <ReactRouterRoute path="/reviews" element={<Reviews />} />
              <ReactRouterRoute path="*" element={<NotFoundError />} />
            </ReactRouterRoute>
          </ReactRouterRoutes>
        </BrowserRouter>



      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
