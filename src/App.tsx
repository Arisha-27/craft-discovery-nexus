import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ArtisansPage from "./pages/ArtisansPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/artisans" element={<ArtisansPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/workshops" element={<div className="container mx-auto px-4 py-16 text-center"><h1 className="text-3xl font-bold">Workshops - Coming Soon</h1></div>} />
              <Route path="/community" element={<div className="container mx-auto px-4 py-16 text-center"><h1 className="text-3xl font-bold">Community - Coming Soon</h1></div>} />
              <Route path="/collections" element={<div className="container mx-auto px-4 py-16 text-center"><h1 className="text-3xl font-bold">Collections - Coming Soon</h1></div>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
