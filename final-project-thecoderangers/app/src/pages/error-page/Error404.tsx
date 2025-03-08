import React from "react";
import NavigationBar from "../../modules/components/navigation-bar/NavigationBar";
import "./ErrorPage.css";
import AppFooter from "../../modules/components/footer/AppFooter";

type Props = {};

const Error404 = (props: Props) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <h3>404</h3>
      <h5>Page Not Found</h5>
      <AppFooter />
    </React.Fragment>
  );
};

export default Error404;
