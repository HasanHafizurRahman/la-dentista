import {
  DentistPlatformIcon,
  DentalProductsIcon,
  SupplierTradingIcon,
  MarketingIcon,
  FosterIcon,
  LifeLineIcon,
} from "../assets/Icons";

const OurServices = () => {
  return (
    <section className="px-[144px] py-20 ">
      <div className="max-width mx-auto">
        {/* Section heading + description */}
        <h2 className="text-[2.5rem] font-bold mb-4">Our Services</h2>

        <section className="grid grid-cols-2">
          <div>
            <p className="text-gray-600 mb-6">
              We use only the best quality materials on the market in order to
              provide
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-2">
                <span className="bg-primary-0 text-white text-center px-1" style={{borderRadius: "100%"}}>✓</span>
                <span>Discount on all dental treatment.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-primary-0 text-white text-center px-1" style={{borderRadius: "100%"}}>✓</span>
                <span>Enrollment is quick and easy.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-primary-0 text-white text-center px-1" style={{borderRadius: "100%"}}>✓</span>
                <span>Top quality dental team.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-primary-0 text-white text-center px-1" style={{borderRadius: "100%"}}>✓</span>
                <span>State of the art dental services.</span>
              </li>
            </ul>

            {/* View More button */}
            <button className="px-6 py-2 bg-primary-0 text-white font-semibold rounded-md mb-10 hover:bg-[#AD2423]">
              View More
            </button>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col items-center justify-center bg-[#CAFFE5] rounded-md p-6 text-center">
              <DentistPlatformIcon className="w-20 h-20 mb-2" />
              <p className="font-semibold">Digital Dentist Platform</p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center justify-center bg-[#FFF2C5] rounded-md p-6 text-center">
              <DentalProductsIcon className="w-20 h-20 mb-2" />
              <p className="font-semibold">Authentic Dental Products</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center justify-center bg-[#CAE4FF] rounded-md p-6 text-center">
              <SupplierTradingIcon className="w-20 h-20 mb-2" />
              <p className="font-semibold">Digital Supplier &amp; Trading</p>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center justify-center bg-[#FFF2C5] rounded-md p-6 text-center">
              <MarketingIcon className="w-20 h-20 mb-2" />
              <p className="font-semibold">Strong Marketing Team</p>
            </div>
            {/* Card 5 */}
            <div className="flex flex-col items-center justify-center bg-[#CAE4FF] rounded-md p-6 text-center">
              <FosterIcon className="w-20 h-20 mb-2" />
              <p className="font-semibold">Foster Dentist</p>
            </div>
            {/* Card 6 */}
            <div className="flex flex-col items-center justify-center bg-[#CAFFE5] rounded-md p-6 text-center">
              <LifeLineIcon className="w-20 h-20 mb-2" />
              <p className="font-semibold">Dentist&apos;s Life Line</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default OurServices;
