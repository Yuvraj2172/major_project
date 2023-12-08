import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const arr = [
  "agriculture",
  "animal",
  "beauty",
  "education",
  "electronic",
  "food",
  "furnishing",
  "hardware",
  "liquor/beverages",
  "manufacturing",
  "medical/health",
  "services",
  "sports",
  "technology",
  "vehicles",
];

export function Form() {
  const [userName, setUserName] = useState("");
  const [product, setProduct] = useState("");
  const [investment, setInvestment] = useState("");
  const [equity, setEquity] = useState("");
  const [industry, setIndustry] = useState("");
  const [summary, setSummary] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/pitch`;
    navigate(path);
    console.log(path);
  };
  return (
    <form
      className=" p-5 rounded-lg w-2/3 bg-white absolute inset-x-60 inset-y-50 my-20"
      onSubmit={handleSubmit}
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Introduce your product.
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="userName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="userName"
                  id="first-name"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="product-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="product"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  id="product-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="investment"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Expected Investment
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="investment"
                  id="investment"
                  value={investment}
                  onChange={(e) => setInvestment(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="equity"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Equity Sharing
              </label>
              <div className="mt-2">
                <input
                  value={equity}
                  onChange={(e) => setEquity(e.target.value)}
                  type="text"
                  name="equity"
                  id="equity"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="summary"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Summary
              </label>
              <div className="mt-2">
                <textarea
                  rows={4}
                  cols={40}
                  id="summary"
                  name="summary"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="industry"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Industry type
              </label>
              <div className="mt-2">
                <input
                  id="industry"
                  name="industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  autoComplete="industry-name"
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          
        >
          Save
        </button>
        
      </div>
    </form>
  );
}
