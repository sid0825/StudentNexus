import React from "react";
import NavigationBar from "../../modules/components/navigation-bar/NavigationBar";
import "./ErrorPage.css";
import AppFooter from "../../modules/components/footer/AppFooter";

type Props = {};

const Error401 = (props: Props) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <h3>401</h3>
      <h5>User Unauthenticated</h5>
      <AppFooter />
    </React.Fragment>
  );
};

export default Error401;
