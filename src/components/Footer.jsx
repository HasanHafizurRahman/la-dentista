
import googlePlayBadge from "../assets/googlePlayBadge.png";
import appStoreBadge from "../assets/appStoreBadge.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <footer className="bg-[#DAFFE1] py-10">
      <div className="max-width mx-auto">
        {/* Top row: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-6">
          {/* 1) Brand Info */}
          <div>
            <h2 className="text-xl font-bold mb-2">Ladentista.net</h2>
            <p className="text-sm text-gray-700 mb-4">
              Over the next years, the most important medical journals will be
              available online, free and in full-text. The unrestricted access
              to scientific knowledge – the new standard in medical publishing
            </p>
            <p className="font-semibold mb-2">Download the app</p>
            <div className="flex space-x-2">
              {/* Google Play badge */}
              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={googlePlayBadge}
                  alt="Google Play"
                  className="h-8 w-auto object-contain"
                />
              </a>
              {/* App Store badge */}
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appStoreBadge}
                  alt="App Store"
                  className="h-8 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* 2) Company Links */}
          <div>
            <h3 className="text-red-700 font-bold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#cancellation">Cancellation Policy</a>
              </li>
              <li>
                <a href="#terms">Terms and Condition Policy</a>
              </li>
            </ul>
          </div>

          {/* 3) About Links */}
          <div>
            <h3 className="text-red-700 font-bold mb-3">About</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#aboutus">About us</a>
              </li>
              <li>
                <a href="#customer-service">Customer Service</a>
              </li>
              <li>
                <a href="#career">Career</a>
              </li>
            </ul>
          </div>

          {/* 4) Address & Contact */}
          <div>
            <h3 className="text-red-700 font-bold mb-3">Address</h3>

            {/* Location */}
            <div className="flex items-start space-x-2 mb-2">
              <svg
                className="w-5 h-5 text-gray-600 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-3.727 0-6.75 3.023-6.75 6.75 0 7.312 6.75 12.75 6.75 12.75s6.75-5.438 6.75-12.75c0-3.727-3.023-6.75-6.75-6.75z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z"
                />
              </svg>
              <p className="text-sm text-gray-700 leading-tight">
                13/7, Solimullah Road,<br />
                Mohammadpur, Dhaka-1207
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-2 mb-2">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.42 6.58 15 15 15 .819 0 1.58-.059 2.306-.17a1.876 1.876 0 00.956-.532l1.765-1.765a1.875 1.875 0 000-2.652l-2.343-2.343a1.875 1.875 0 00-2.652 0l-.558.558a.938.938 0 01-1.325 0L9.47 9.469a.938.938 0 010-1.325l.558-.558a1.875 1.875 0 000-2.652L8.143 2.592a1.875 1.875 0 00-2.652 0l-1.765 1.765a1.876 1.876 0 00-.532.956c-.11.726-.17 1.487-.17 2.306z"
                />
              </svg>
              <p className="text-sm text-gray-700">+88 (0172) 293-8124</p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 8.25l-9.57 5.533a.75.75 0 01-.78 0L1.84 8.25M2.25 6h19.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H2.25a.75.75 0 01-.75-.75V6.75a.75.75 0 01.75-.75z"
                />
              </svg>
              <p className="text-sm text-gray-700">info@ladentista.net</p>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <hr className="border-gray-300 mb-4" />

        {/* Copyright & Social icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-700 space-y-2 sm:space-y-0">
          <p>
            Copyright © 2022 All Rights Reserved
            <span className="ml-1">by Ladentista Ltd.</span>
          </p>

          {/* Social icons */}
          <div className="flex space-x-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <img src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
