import { Logo } from "../assets/Icons";

const Navbar = () => {
  return (
    <nav className="px-[144px] py-[10px] w-full">
      <div className="max-width mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div>
            <ul className="flex items-center gap-5">
              <li>
                <a href="#" className="font-medium">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="font-medium">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#" className="font-medium">
                  Responsibilty
                </a>
              </li>
              <li>
                <a href="#" className="font-medium">
                  Products
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
