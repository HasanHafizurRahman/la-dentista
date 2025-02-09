import ladentistaHero from "../assets/ladentistaHero.png";

const Hero = () => {
  return (
    <div className="px-[144px] pt-40 pb-60">
      <div className="max-width mx-auto">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <section>
            <h1 className="text-[40px] font-bold">Enhance Your Dental Life</h1>
            <h1 className="text-[40px] text-primary-0 font-bold">
              Dental Profession
            </h1>
            <p>La Dentista, Your Digital Partner</p>
          </section>

          {/* Right Section */}
          <section className="flex items-end">
            <img src={ladentistaHero} alt="ladentistaHero" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
