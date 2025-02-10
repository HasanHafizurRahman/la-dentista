import doctor from "../assets/doctor.png";

const ReasonsToChoose = () => {
  return (
    <section className="px-[144px] py-16">
      <div className="max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left (Image) */}
          <div>
            <img
              src={doctor}
              alt="Dentist treating a patient"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>

          {/* Right (Text & Button) */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              You Have Lots of Reasons <br /> To Choose US
            </h2>
            <p className="text-gray-700 mb-6">
              We use only the best quality materials on the market in order <br /> to
              provide the best products to our patients
            </p>
            <button className="p-3 bg-primary-0 text-white text-xs font-semibold rounded-md hover:bg-[#AD2423] transition-colors">
              See more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsToChoose;
