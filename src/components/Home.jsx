import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "./PitchForm";

const Home = () => {
  const [check, setCheck] = useState(false);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/pitch`;
    navigate(path);
  };
  return (
    <div className="home-page">
      <div className="flex gap-5 py-2 ">
        <div  >
          <button
            onClick={() => setCheck(!check)}
            className="  mx-20 px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300  "
          >
            Check your pitch
          </button>
          {check && <Form />}
          <button
            onClick={routeChange}
            className="  px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300  "
          >
            Predict Analysis
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
