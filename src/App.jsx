import "./App.css";
import Booking from "./components/Booking";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <section className="background-gradient-hero">
        <Navbar />
        <Hero />
      </section>
        <Booking />
    </>
  );
}

export default App;
