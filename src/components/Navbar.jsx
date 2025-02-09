import { Logo } from "../assets/Icons";

const Navbar = () => {
  return (
    <nav className="px-[144px] py-[10px] w-full">
      <div className="max-width mx-auto">
        <Logo />
      </div>
    </nav>
  );
};

export default Navbar;
