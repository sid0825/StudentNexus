import React from "react";
import NavigationBar from "../../modules/components/navigation-bar/NavigationBar";
import AppFooter from "../../modules/components/footer/AppFooter";
import RentalSection from "./RentalSection";
import withRoot from "../../modules/withRoot";
import ProductValues from "./ProductValues";
import TestimonialCarousel from "./TestimonialCarousel";
import ProductCategories from "./ProductCategories";
import ContactButton from "./Contactbutton";
import RentingProcessBlock from "./RentingProcessBlock";
// import LocationInfoBlock from "./LocationInfoBlock";
// import VirtualTourSetupBlock from "./VirtualTourSetupBlock";
import ProductCTA from "./ProductCTA"; // Import the ProductCTA component
import PersonalisedHelp from "./PersonalisedHelp";

type Props = {};

const Landing = (props: Props) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <RentalSection />
      <ProductValues />
      <ProductCategories />
      <TestimonialCarousel />
      {/* <RentingProcessBlock /> */}
      {/* <LocationInfoBlock /> */}
      {/* <VirtualTourSetupBlock /> */}
      <ProductCTA />
      {/* <PersonalisedHelp /> */}
      <ContactButton />
      <AppFooter />
      {/* <div className="App">
      <h1>{t('greeting')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('zh')}>Chinese</button>
      <p>{t('bye')}</p>
    </div> */}
    </React.Fragment>
  );
};

export default withRoot(Landing);
