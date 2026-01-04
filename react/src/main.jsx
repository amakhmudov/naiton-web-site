import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router";
import { ErrorBoundary } from "react-error-boundary";

import Loader from "@/components/Loader.jsx";
import Error from "@/components/Error.jsx";
import App from "@/App.jsx";
const LazyHome = lazy(() => import("@/pages/Home.jsx"));
const LazyAbout = lazy(() => import("@/pages/About.jsx"));
const LazySolutions = lazy(() => import("@/pages/Solutions.jsx"));
const LazyContact = lazy(() => import("@/pages/Contact.jsx"));

const queryClient = new QueryClient();

createRoot(document.getElementById("container")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <ErrorBoundary fallback={<Error />}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route element={<App />}>
                <Route path="/" element={<LazyHome />} />
                <Route path="/about/" element={<LazyAbout />} />
                <Route path="/solutions/" element={<LazySolutions />} />
                <Route path="/contact/" element={<LazyContact />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  </StrictMode>,
);
