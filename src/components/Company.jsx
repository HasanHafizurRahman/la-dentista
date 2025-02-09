import dentist from "../assets/dentist.png";
import patient from "../assets/patient.png";

const OurCompany = () => {
  return (
    <div className="max-width mx-auto pt-80">
      <h2 className="text-3xl font-bold text-center mb-8">Our Company</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start">
          <img
            src={dentist}
            alt="Mission Image"
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-green-600 mb-2">Our Mission</h3>
          <p className="text-gray-700">
            At La Dentista, our mission is to provide exceptional dental care with
            a focus on patient comfort, cutting-edge technology, and personalized
            treatment. We are committed to enhancing oral health, restoring
            confidence, and creating beautiful smiles through high-quality,
            ethical, and compassionate dental services.
          </p>
          <span className="mt-4 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-full self-end">
            1261
          </span>
        </div>

        {/* Vision Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start">
          <img
            src={patient}
            alt="Vision Image"
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-red-600 mb-2">Our Vision</h3>
          <p className="text-gray-700">
            Our vision is to be a leading dental clinic recognized for excellence
            in patient care, innovation, and community impact. We strive to set
            new standards in dentistry by embracing modern techniques, fostering
            a warm and welcoming environment, and empowering individuals with
            healthy, radiant smiles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
