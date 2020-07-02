import * as React from "react";
import { useEffect, useState } from "react";
import fetchHelper from "../helpers/fetchHelper";

const ResponseShower = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const url = "http://backend.192.168.64.11.nip.io/public";
    // const url =
    //   "http://" + process.env.REACT_APP_L_AUTHENTICATION_SERVER_HOST + "/test";

    fetchHelper
      .fetchWithAuthentication(url, "get")
      .then(json => setResponse(JSON.stringify(json, null, 2)));
  }, []);

  return (
    <div>
      <pre>{response}</pre>
    </div>
  );
};

export default ResponseShower;
