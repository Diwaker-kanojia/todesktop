import Steps from "./Steps";

const StepByStep = () => {
  return (
    <div
      id="steps"
      className=" flex flex-col gap-6 px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-32"
    >
      <h2 className="text-5xl sm:font-semibold mb-14">How it works</h2>
      <Steps step={"Step 1"} />
      <Steps step={"Step 2"} />
      <Steps step={"Step 3"} />
    </div>
  );
};

export default StepByStep;
