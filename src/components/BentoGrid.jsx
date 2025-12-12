import Image37 from "../assets/asset 37.png";
import Image38 from "../assets/asset 38.png";
import Image39 from "../assets/asset 39.png";
import Image40 from "../assets/asset 40.png";
import Image42 from "../assets/asset 42.png";
import Image43 from "../assets/asset 43.png";

const BentoGrid = () => {
  return (
    <div
      id="bento-grid"
      className="gap-6 px-6  max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-32 "
    >
      <h2 className="text-5xl sm:font-semibold mb-14 max-w-2xl leading-normal">
        ToDesktop handles the details
      </h2>
      <div
        id="grid-container"
        className="flex flex-col gap-6 lg:grid lg:grid-cols-3"
        style={{
          gridAutoRows: "96px",
        }}
      >
        <div className="row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
          <div className="bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
            <h3 className="text-2xl">Native Notification</h3>
            <img src={Image37} alt="" />
          </div>
        </div>

        <div className="row-start-1 row-end-4  group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
          <div className="bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
            <h3 className="text-2xl">Auto Updates</h3>
            <p className="text-lg text-center font-light">
              We’ll ensure the underlying browser is up to date and deliver
              performance improvements, security patches, & additional features.
            </p>
            <img src={Image38} alt="Browser Security" />
          </div>
        </div>

        <div className="row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
          <div className="bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
            <h3 className="text-2xl">Plugins</h3>
            <img src={Image39} alt="" />
          </div>
        </div>

        <div className="row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
          <div className="bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
            <h3 className="text-2xl">Access to Native APIs</h3>
            <p className="text-lg text-center font-light">
              ToDesktop ensures the underlying browser, performance
              improvements, security patches and additional features are always
              up to date.
            </p>
            <img src={Image40} alt="Browser Security" />
          </div>
        </div>

        <div className="row-start-4 row-end-6 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
          <div className="bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
            <h3 className="text-2xl">Customizable look and feel</h3>
            <img className="" src={Image42} alt="" />
          </div>
        </div>

        <div className="row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
          <div className="bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
            <h3 className="text-2xl">Native Installers</h3>
            <p className="text-lg text-center font-light">
              We even provide a magic link which will detect your users
              operating system & download the most up to date version of your
              app.
            </p>
            <img src={Image43} alt="Browser Security" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
