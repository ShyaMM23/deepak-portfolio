import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Certifications from "./components/Certifications/Certifications";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CustomCursor from "./components/CustomCursor/CustomCursor";

import CodeAnalyzer from "./pages/CodeAnalyzer/CodeAnalyzer";
import RoadSignDetection from "./pages/RoadSignDetection/RoadSignDetection";
import InventoryManagement from "./pages/InventoryManagement/InventoryManagement";
import RailwayTicketBooking from "./pages/RailwayTicketBooking/RailwayTicketBooking";


function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter basename="/deepak-portfolio">

      <CustomCursor />

      {loading && (
        <Loader
          onComplete={() => setLoading(false)}
        />
      )}

      {!loading && (
        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* CODE ANALYZER */}

          <Route
            path="/work/code-analyzer"
            element={
              <>
                <Navbar />
                <CodeAnalyzer />
              </>
            }
          />


          {/* ROAD SIGN DETECTION */}

          <Route
            path="/work/road-sign-detection"
            element={
              <>
                <Navbar />
                <RoadSignDetection />
              </>
            }
          />


          {/* INVENTORY MANAGEMENT */}

          <Route
            path="/work/inventory-management"
            element={
              <>
                <Navbar />
                <InventoryManagement />
              </>
            }
          />


          {/* RAILWAY TICKET BOOKING */}

          <Route
            path="/work/railway-ticket-booking"
            element={
              <>
                <Navbar />
                <RailwayTicketBooking />
              </>
            }
          />

        </Routes>
      )}

    </BrowserRouter>
  );
}

export default App;