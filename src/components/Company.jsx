import dentist from "../assets/dentist.png";
import patient from "../assets/patient.png";

const OurCompany = () => {
  return (
    <div className="px-[144px] pt-60 pb-10">
      <div className="max-width mx-auto">
        <h2 className="text-[2.5rem] font-bold mb-8">Our Company</h2>
        
        <div className="space-y-16">
          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-2 gap-6 items-start">
            {/* Image on the left */}
            <div>
              <img
                src={dentist}
                alt="Mission"
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Text on the right */}
            <div>
              <h3 className="text-3xl font-bold text-green-600 mb-4">
                Our Mission
              </h3>
              <p className="leading-relaxed">
                At La Dentista, our mission is to provide exceptional dental care
                with a focus on patient comfort, cutting-edge technology, and
                personalized treatment. We are committed to enhancing oral health,
                restoring confidence, and creating beautiful smiles through
                high-quality, ethical, and compassionate dental services.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-2 gap-6 items-start">
            {/* Text on the left */}
            <div>
              <h3 className="text-3xl font-bold text-red-600 mb-4">
                Our Vision
              </h3>
              <p className="leading-relaxed">
                Our vision is to be a leading dental clinic recognized for
                excellence in patient care, innovation, and community impact.
                We strive to set new standards in dentistry by embracing modern
                techniques, fostering a warm and welcoming environment, and
                empowering individuals with healthy, radiant smiles.
              </p>
            </div>
            {/* Image on the right */}
            <div>
              <img
                src={patient}
                alt="Vision"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
