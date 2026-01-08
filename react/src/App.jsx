import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";

import "@/App.css";
import Header from "@/Header.jsx";
import Footer from "@/Footer.jsx";
import Loader from "@/components/Loader.jsx";

const LazyHome = lazy(() => import("@/pages/Home.jsx"));
const LazyAbout = lazy(() => import("@/pages/About.jsx"));
const LazySolutions = lazy(() => import("@/pages/Solutions.jsx"));
const LazyContact = lazy(() => import("@/pages/Contact.jsx"));
const LazyNotFound = lazy(() => import("@/pages/NotFound.jsx"));

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Enable View Transitions API for navigation
    if (document.startViewTransition) {
      const handleClick = (e) => {
        const link = e.target.closest("a");
        if (link && link.origin === location.origin) {
          e.preventDefault();
          const href = link.getAttribute("href");
          document.startViewTransition(() => {
            navigate(href);
          });
        }
      };
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <main className="main">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/about/" element={<LazyAbout />} />
            <Route path="/solutions/" element={<LazySolutions />} />
            <Route path="/contact/" element={<LazyContact />} />
            <Route path="*" element={<LazyNotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
