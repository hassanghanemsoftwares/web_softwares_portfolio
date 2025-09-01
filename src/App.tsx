import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route as ReactRouterRoute,
  Navigate
} from 'react-router-dom';
import { Layout } from "./components/layout/Layout";
import { lazy } from "react";
import Providers from "./components/providers/provider";

const NotFoundError = lazy(() => import('./features/Errors/NotFoundError'));
const Home = lazy(() => import("./features/Home"));
const About = lazy(() => import("./features/About"));
const Services = lazy(() => import("./features/Services"));
const Projects = lazy(() => import("./features/Projects"));
const Contact = lazy(() => import("./features/Contact"));
const Privacy = lazy(() => import("./features/Privacy"));
const Terms = lazy(() => import("./features/Terms"));

const App = () => (
  <Providers>
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
          <ReactRouterRoute path="*" element={<NotFoundError />} />
        </ReactRouterRoute>
      </ReactRouterRoutes>
    </BrowserRouter>
  </Providers>
);

export default App;
