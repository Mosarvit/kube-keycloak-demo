import Keycloak from "keycloak-js";
import * as React from "react";
import { useEffect, useState } from "react";
import { setAccessToken } from "../accessToken";
import ResponseShower from "./ResponseShower";

const Secured = () => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // const keycloak = Keycloak("/keycloak.json");
    let kcConfig = {
      realm: "NewReal",
      url: "http://keycloak.192.168.64.11.nip.io/auth/",
      clientId: "l-ui",
      "enable-cors": true,
      "public-client": true
    };
    const keycloak = new Keycloak(kcConfig);

    keycloak
      .init({ onLoad: "login-required", checkLoginIframe: false })
      .then(authenticated => {
        // console.log(authenticated);
        setKeycloak(keycloak);
        setAccessToken(keycloak.token);
        setAuthenticated(authenticated);
      });
  }, []);

  function logout() {
    keycloak.logout();
  }

  return (
    <div>
      {authenticated ? (
        <div>
          <div style={{ border: "1px solid black" }}>
            <ResponseShower />
          </div>
          <div style={{ border: "1px solid black" }}>
            <button onClick={() => logout()}>Logout</button>
          </div>
        </div>
      ) : (
        <div>Waiting to authenticate</div>
      )}
    </div>
  );
};

export default Secured;
