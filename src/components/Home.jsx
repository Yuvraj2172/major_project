import React, { useState } from "react";

import { Form } from "./Form";

const Home = () => {
  const [check, setCheck] = useState(false);
  function handleCheck() {}
  return (
    <div className="home-page  ">
      <button
        onClick={() => setCheck(!check)}
        className=" absolute left-20 top-20  px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300  "
      >
        Check your pitch
      </button>
      {check && <Form />}
    </div>
  );
};

export default Home;
