import "./App.css";
import Booking from "./components/Booking";
import OurCompany from "./components/Company";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <section className="background-gradient-hero">
        <Navbar />
        <Hero />
      </section>

      <section className="-my-[180px] relative z-10">
        <div className="relative z-10 isolate">
          <Booking />
        </div>
      </section>

      <section className="background-gradiant-body">
        <OurCompany />
      </section>
    </>
  );
}

export default App;
