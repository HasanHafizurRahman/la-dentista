import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <section className="bg-gradient-to-bl from-primary-1 to-white">
        <Navbar />
        <Hero />
      </section>
    </>
  );
}

export default App;
