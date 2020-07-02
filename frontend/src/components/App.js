import * as React from "react";
import Secured from "./Secured";

export const App = () => {
  console.log(
    "REACT_APP_L_AUTHENTICATION_SERVER_HOST: " +
      process.env.REACT_APP_L_AUTHENTICATION_SERVER_HOST
  );

  return (
    <div>
      <div>
        <Secured />
      </div>
    </div>
  );
};

export default App;
