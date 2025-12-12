import { useState } from "react";
import { faqData } from "../data/companyData";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div id="faq" className="px-6 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-10">
      <h2 className="h2-style">FAQs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6 items-start">
        {faqData.map((faq, index) => (
          <div
            className="group rounded-xl border border-gray-200 bg-gray-50 p-6"
            key={index}
          >
            <dt
              className="cursor-pointer flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <p className="font-semibold text-lg">{faq.question}</p>
              <i
                className={`fa-solid fa-chevron-up transition-transform ${
                  openIndex === index ? "" : "-rotate-180"
                }`}
              />
            </dt>

            {openIndex === index && (
              <dd className="text-lg font-light mt-6">
                <p>{faq.answer}</p>
              </dd>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
