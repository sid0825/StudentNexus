import React from "react";
import NavigationBar from "../../modules/components/navigation-bar/NavigationBar";
import AppFooter from "../../modules/components/footer/AppFooter";

type Props = {};

const AddListing = (props: Props) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <div>AddListing</div>;
      <AppFooter />
    </React.Fragment>
  );
};

export default AddListing;
