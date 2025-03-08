import React from "react";
import NavigationBar from "../../modules/components/navigation-bar/NavigationBar";
import "./ErrorPage.css";
import AppFooter from "../../modules/components/footer/AppFooter";

const Error500 = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <h3>500</h3>
      <h5>Internal Server Error</h5>
      <AppFooter />
    </React.Fragment>
  );
};

export default Error500;
