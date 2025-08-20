import React from "react";
import { getDetails } from "../Actions/formAction";

const Page = () => {
  return (
    <>
      <h2>SignUp</h2>
      <form action={getDetails}>
        <div>
          <input type="text" placeholder="UserName" name="data" />
        </div>
        <div>
          <input type="text" placeholder="Password" name="data" />
        </div>

        <div>
          <button>SignIn</button>
        </div>
      </form>
    </>
  );
};

export default Page;
