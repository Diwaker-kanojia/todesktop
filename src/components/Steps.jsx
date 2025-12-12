import { features } from "../data/companyData";
import Image66 from "../assets/asset 66.svg";

const Steps = ({ step }) => {
  return (
    <div
      id={step}
      className="rounded-xl border border-slate-200 px-8 py-12 flex flex-col lg:flex-row justify-between"
    >
      <div className="flex flex-col gap-6 lg:w-1/2">
        <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">
          {step}
        </span>
        <h3 className="text-4xl">Bootstrap straight from your web app</h3>
        <p className="text-lg font-light">
          Copy and paste your web app url into ToDesktop. Customise your app
          design, app icon and window frame UI with no code.
        </p>
        <ul className="grid grid-cols-2 gap-2">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-4">
              <i className="fa-solid fa-check text-gray-500"></i>
              <a
                className="text-sm md:text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                href=""
              >
                {feature}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-12">
        <img src={Image66} alt="" />
      </div>
    </div>
  );
};

export default Steps;
