import { IconClock, IconMail, IconTooth } from "../assets/Icons";

const Booking = () => {
  return (
    <div className="px-[144px] py-10">
      <div className="max-width mx-auto flex justify-between items-center rounded-2xl px-[133px] py-16 shadow-lg bg-white gap-10">
        {/* Contact Us */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 flex items-center justify-center bg-primary-0 text-white rounded-lg">
            <IconMail />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-600 text-[16px]">+88 (0172) 293-8124</p>
            <p className="text-gray-600 text-[16px]">info@ladentista.net</p>
            <button className="mt-4 px-6 py-2 bg-primary-0 hover:bg-[#AD2423] text-white rounded-xl text-sm">
              Book appointment
            </button>
          </div>
        </div>

        <div className="vertical-line"></div>
        

        {/* Open Hours */}
        <div className="flex items-start gap-4"> 
          <div className="w-10 h-10 flex items-center justify-center bg-primary-0 text-white rounded-lg">
            <IconClock />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Open Hours</h3>
            <p className="text-gray-600 text-[16px]">
              <span className="text-primary-0 font-semibold">Mon - Fri:</span> 9:00 AM to 5:00 PM
            </p>
            <p className="text-gray-600 text-[16px]">
              <span className="text-primary-0 font-semibold">Saturday:</span> 9:00 AM to 8:00 PM
            </p>
            <p className="text-gray-600 text-[16px]">
              <span className="text-primary-0 font-semibold">Sunday:</span> 9:00 AM to 8:00 PM
            </p>
          </div>
        </div>

        <div className="vertical-line"></div>
        

        {/* Services */}
        <div className="flex items-start gap-4"> {/* Removed border-l */}
          <div className="w-10 h-10 flex items-center justify-center bg-primary-0 text-white rounded-lg">
            <IconTooth />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Services</h3>
            <p className="text-gray-600 text-[16px]">Cosmetic dentist</p>
            <p className="text-gray-600 text-[16px]">Dental Implants</p>
            <p className="text-gray-600 text-[16px]">Teeth Whitening</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;