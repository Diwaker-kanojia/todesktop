import Logo from "../assets/asset 0.png";
import Image54 from "../assets/asset 54.svg";

const Footer = () => {
  return (
    <footer className="px-6 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-10">
      <div className="rounded-lg border border-slate-200 lg:border-none lg:bg-gray-50 bg-gray-50 flex flex-col lg:flex-row-reverse items-center px-8 py-12 gap-8">
        <a href="#" className="font-light font-display">
          Documentation
        </a>
        <div className="flex gap-8 text-lg">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <i className="fa-brands fa-twitter" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <i className="fa-brands fa-github" />
          </a>
        </div>
        <a href="#" id="brand" className="flex gap-2 items-center flex-1">
          <img
            className="object-cover max-w-12 max-h-12"
            src={Logo}
            alt="Logo"
          />
          <span className="text-lg font-medium font-display">ToDesktop</span>
        </a>
      </div>
      <div
        id="sub-footer"
        className="flex flex-col gap-6 items-center justify-center my-12"
      >
        <div className="flex gap-2 items-center ">
          <img className="w-4 h-4" src={Image54} alt="Y-combinator" />
          <p className="text-sm text-gray-600">A Y Combinator company.</p>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} ToDesktop, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
