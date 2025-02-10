import "./App.css";
import Booking from "./components/Booking";
import OurCompany from "./components/Company";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ReasonsToChoose from "./components/ReasonsToChoose";
import OurServices from "./components/Services";

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
        <OurServices />
        <ReasonsToChoose />
      </section>
      <Footer />
    </>
  );
}

export default App;
