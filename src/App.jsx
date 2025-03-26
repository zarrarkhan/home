import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Publications from "./components/Publications";
import Presentations from "./components/Presentations";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-white min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <div className="w-3/4 mx-auto border-t border-gray-600 mt-10 mb-0"></div>
        <Portfolio />
        <div className="w-3/4 mx-auto border-t border-gray-600 mt-10 mb-0"></div>
        <Publications />
        <div className="w-3/4 mx-auto border-t border-gray-600 mt-10 mb-0"></div>
        <Presentations />
        <Footer />
      </main>
    </div>
  );
}

export default App;
