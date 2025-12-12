import { plans } from "../data/companyData";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-10"
    >
      <h2 className="h2-style">Choose a plan that fits your needs</h2>
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <div className="border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50">
          <h3 className="text-4xl">Free</h3>
          <p className="text-lg font-light">
            For personal use or testing your app before deploying to customers.
          </p>
          <p className="uppercase">Key Features</p>
          <ul className="space-y-3">
            {plans[0].features.map((feature, index) => (
              <li key={index} className="flex items-center gap-4">
                <i className="fa-solid fa-check text-gray-500" />
                <span className="text-lg font-light text-gray-800">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <button className="border px-8 py-3 text-primary rounded-lg hover:border-gray-800 font-display font-medium">
            Read Docs
          </button>
        </div>
        {/* Card 2 */}
        <div className="border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50">
          <h3 className="text-4xl">Essential</h3>
          <p className="text-lg font-light">For simple desktop apps.</p>
          <p className="text-lg font-light">
            <span className="text-2xl font-semibold">$99</span>/month
          </p>
          <p className="uppercase">Key Features</p>
          <ul className="space-y-3">
            {plans[1].features.map((feature, index) => (
              <li key={index} className="flex items-center gap-4">
                <i className="fa-solid fa-check text-gray-500" />
                <span className="text-lg font-light text-gray-800">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <button className="border px-8 py-3 text-primary rounded-lg hover:border-gray-800 font-display font-medium">
            Read Docs
          </button>
        </div>

        {/* Card 3 */}
        <div className="border flex-1 relative rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50">
          <p className="text-blue-800 text-sm bg-indigo-100 rounded-full w-fit px-4 py-2 font-display font-semibold absolute top-0 right-8 -translate-y-1/2">
            Most Popular
          </p>
          <h3 className="text-4xl">Professional</h3>
          <p className="text-lg font-light">For sophisticated desktop apps.</p>
          <p className="text-lg font-light">
            <span className="text-2xl font-semibold">$99</span>/month
          </p>
          <p className="uppercase">Key Features</p>
          <ul className="space-y-3">
            {[
              "Branded Download Links",
              "Analytics",
              "Access to Plugins",
              "Access to Restricted API",
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-4">
                <i className="fa-solid fa-check text-gray-500" />
                <span className="text-lg font-light text-gray-800">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <button className="px-8 py-3 text-white bg-primary rounded-lg hover:bg-opacity-90 font-display font-medium">
            Read Docs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
