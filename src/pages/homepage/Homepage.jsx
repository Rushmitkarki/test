import React, { useEffect } from "react";
import { testApi } from "../../apis/api";

const Homepage = () => {
  // print Hello!, when page load(Automactically)
  useEffect(() => {
    console.log("Hello!");
    // trigger testApi
    testApi().then((res) => {
      console.log(res);
    });
  });
  return <div>Home page</div>;
};
export default Homepage;
